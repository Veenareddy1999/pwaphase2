var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.wedkitIndexedDB;

if(!idb in window)
{
  console.log("indexedDB is not supported");
}
// indexedDBcreation
var request;
var store;
var open=idb.open("storedData",1);
console.log("indexedDB is created");

open.onupgradeneeded=function(e){
  request=e.target.result;
  store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");
}
open.onerror=function(e){
console.log("error");
}
open.onsuccess=function(e){
    request=e.target.result;
    var transaction=request.transaction("formdata","readwrite");
    store=transaction.objectStore("formdata");
var info=store.getAll();
info.onsuccess=function(data){
  console.log(data.target.result);
  display(data.target.result);
}

}
var parent=document.querySelector(".parent");
function display(d){
  for(i=0;i<d.length;i++){
    var child=document.createElement("div");
    child.classList.add("child");
    var image=document.createElement("img");
    image.src="images/Profile.svg";
    image.alt=d[i].name;
    var name=document.createElement("h2");
    name.textContent=d[i].name;
    var mailid=document.createElement("h2");
    mailid.textContent=d[i].mailid;
    var mobileno =document.createElement("h2");
    mobileno.textContent=d[i].mobileno;
    var address=document.createElement("h2");
    address.textContent=d[i].address;


    var link=document.createElement("a");
    link.classList.add("link");
    link.href="resume.html?id="+d[i].id;
    link.textContent="view profile";

    child.append(image);
    child.append(link);
    child.append(name);
    child.append(mobileno);
    child.append(address);
    child.append(mailid);
    parent.append(child);

  }

}
