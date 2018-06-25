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
  // function defination//
  fun_career(data.career);
  fun_education(data.education);
  fun_ach(data.achievements);
  fun_technicalskills(data.technicalskills);
});

var div2=document.getElementById("child2");
//career function//

function fun_career(educa){

var heading=document.createElement("h2");
heading.textContent="Career Objective";
div2.appendChild(heading);

var hr=document.createElement("hr");
div2.appendChild(hr);

var p=document.createElement("p");
  p.textContent=educa.info;
  div2.appendChild(p);
}
//Qualifiation function for education//

function fun_education(edu){

  var heading1=document.createElement("h1");
  heading1.textContent="Educational Qualifiation";
  div2.appendChild(heading1);

  var hr=document.createElement("hr");
  div2.appendChild(hr);

  var list=document.createElement("ul");
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
  //achievements function//
  function fun_ach(achieve){

  var achievements=document.createElement("h3");
  achievements.textContent="achievements";
  div2.appendChild(achievements);

  var hr=document.createElement("hr");
  div2.appendChild(hr);
  //
  var s=document.createElement("ul");
    s.textContent=achieve.name;
    div2.appendChild(s);

    for(var j=0;j<achieve.length;j++){

    var listItem3=document.createElement("li");
    listItem3.innerHTML=achieve[j].name;
    div2.appendChild(listItem3);

}
}
//technicalskills//
function fun_technicalskills(tech){
  var heading=document.createElement("h4");
  heading.textContent="technicalskills";
  div2.appendChild(heading);
  var hr=document.createElement("hr");
  div2.appendChild(hr);
  var list=document.createElement("ul");
  div2.appendChild(list);
  var tr="";
 var table=document.createElement("table");
 table.border="1";
  div2.appendChild(table);
  for(var i=0;i<tech.length;i++){
    tr+="<tr><td>"+tech[i].name+"</td><td>"+tech[i].data+"</td></tr>"
  }
  table.innerHTML=tr;
}
