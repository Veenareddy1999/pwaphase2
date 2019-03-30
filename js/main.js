function submitData(){
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var address=document.querySelector("#address").value;
  var mobileno=document.querySelector("#mobileno").value;
  var mailid=document.querySelector("#mailid").value;
  var ginst=document.querySelector("#ginst").value;
  var gbranch=document.querySelector("#gbranch").value;
  var gper=document.querySelector("#gper").value;
  var yop=document.querySelector("#yop").value;
  var inter=document.querySelector("#inter").value;
  var ibranch=document.querySelector("#ibranch").value;
  var iper=document.querySelector("#iper").value;
  var yop=document.querySelector("#yop").value;
  var ssc=document.querySelector("#ssc").value;
  var sbranch=document.querySelector("#sbranch").value;
  var sper=document.querySelector("#sper").value;
  var yop=document.querySelector("#yop").value;
  var skills=document.querySelector("#skills").value;
// indexedDB implementation
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
window.open("index.html");

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
    store.put({
      career:career,
      name:name,
      mobileno:mobileno,
      address:address,
      mailid:mailid,
      education:[
        {
        institute:ginst,
        branch:gbranch,
        yop:yop,
        percentage:gper
      },
      {
        institute:inter,
        branch:ibranch,
        yop:yop,
        percentage:iper
      },
      {
        institute:ssc,
        branch:sbranch,
        yop:yop,
        percentage:sper
      }],
      skills:
      {
      skills:skills
    }
    });


}
}
