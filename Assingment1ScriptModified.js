window.addEventListener("load",function(){


//all li element of document
var elem1=document.querySelectorAll("ul li");
// first and second ul of the two divs
var firstList=document.getElementById("fList");
var secondList=document.getElementById("sList");


//the hole table
var holeTable=document.querySelector("table");

//set the onclick events to all li elements
holeTable.onclick=function(event){
    console.log(event.target.localName);
    if(event.target.localName=="li"){
        for(i=0;i<elem1.length;i++){
            if(elem1[i].classList.contains("backStyle")){
                elem1[i].classList.remove("backStyle");
                event.target.classList.add("backStyle");
                break;
            }
        }
        event.target.classList.add("backStyle");
       
    }
}

//the left arrow button
var leftArrow=document.querySelector("input[value='>']");
//set the onclick event for the left arrow button
leftArrow.onclick=function(){
    var styledEle=document.querySelector("li.backStyle");
    secondList.appendChild(styledEle);
    styledEle.classList.remove("backStyle");
}
//the right arrow button
var rightArrow=document.querySelector("input[value='<']")
//set the onclick event for the right button
rightArrow.onclick=function(){
    var styledEle=document.querySelector("li.backStyle");
    firstList.appendChild(styledEle);
    styledEle.classList.remove("backStyle");
}
//the add botton
var addButton=document.querySelector("input[value='add']");
//the text field
var textField=document.querySelector("input[type='text']");

addButton.onclick=function(){
    var newItem=document.createElement("li");
    var newText=document.createTextNode(textField.value);
    newItem.appendChild(newText);
    firstList.appendChild(newItem);
}


});//end of load event



