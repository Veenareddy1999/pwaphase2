var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}

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
var info=store.get(paravalue);
info.onsuccess=function(data){
  console.log(data);
  personalinfo(data.target.result);

}
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function personalinfo(pi) {

  var image=document.createElement("img");
  image.src="images/Profile.svg";
  image.alt=pi.name;
  left.append(image);
  var name=document.createElement("h2");
  name.textContent=pi.name;
  left.append(name);
  var mailid=document.createElement("h2");
  mailid.textContent=pi.mailid;
    left.append(mailid);
  var mobileno =document.createElement("h2");
  mobileno.textContent=pi.mobileno;
    left.append(mobileno);
  var address=document.createElement("h2");
  address.textContent=pi.address;
    left.append(address);
var h1=document.createElement("h1");
h1.textContent="Career Objective";
right.appendChild(h1);
var hr=document.createElement("hr");
right.append(hr);
var career=document.createElement("h3");
career.textContent=pi.career;
right.append(career);

var head11=document.createElement("h2");
head11.textContent="Education Details";
right.append(head11);
var hr=document.createElement("hr");
right.append(hr);

var table=document.createElement("table");
table.border="1";
var tr1="<tr><th>qualification</th><th>Institution</th><th>percentage</th><th>YOP</th></tr>"
var tr2=" ";
for(var i in pi.education)
{
  tr2=tr2+"<tr><td>"+pi.education[i].institute+"</td><td>"+pi.education[i].branch+"</td><td>"+pi.education[i].yop+"</td><td>"+pi.education[i].percentage+"</td></tr>";

}
table.innerHTML=tr1+tr2;
right.append(table);

var head1=document.createElement("h1");
head1.textContent="Skills";
right.appendChild(head1);
var hr=document.createElement("hr");
right.append(hr);
var skills=document.createElement("h3");
var tr1="";
for(var i in pi.skills){
  tr1=tr1+pi[i].skills;

}
 skills.textContent=tr1;
  right.append(skills);
}
