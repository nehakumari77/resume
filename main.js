function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200")
    {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  fun_education(data.education);
});
var div2=document.getElementById("child2");
function fun_education(edu){
  var head=document.createElement("head1")
  head.textContent="Educational Qualifiation"
  div2.appendChild(head);
  var hr=document.createElement("hr")
  div2.appendChild(hr);
  var list=document.createElement("ul")
  div2.appendChild(list);
  for(var i=0;i<edu.length;i++){
    var listItem=document.createElement("li");
    listItem.textContent=edu[i].degree;
    list.appendChild(listItem);
    var listItem1=document.createElement("li");
    listItem1.textContent=edu[i].institute;
    list.appendChild(listItem1);
    var listItem2=document.createElement("li");
    listItem2.textContent=edu[i].Data;
    list.appendChild(listItem2);

  }
}
