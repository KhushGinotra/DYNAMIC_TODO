let ctr =0;
let gtr=1;
let gfd=[];
let y=0;
function book1(){
    document.querySelectorAll("h2")[1].innerHTML =ctr ;
    ctr = ctr +1;
}
function Deletetodo(index){
    const heoh =document.getElementById(index);
    heoh.parentNode.removeChild(heoh);
    gfd.push(index);
    gfd.sort((a, b) => a - b);
}
function Addtodo(){
    const inputEL= document.querySelector("input");
    const innerel=document.createElement("div");
    gfd.push(gtr);
    innerel.setAttribute("id",gfd[0]);
    innerel.innerHTML="<div class='flex'><h2>"+gfd[0]+"."+inputEL.value+"</h2><button onclick='Deletetodo("+gfd[0]+")'>Delete</button></div>";
    document.getElementById("todo").appendChild(innerel);
    gtr=gtr+1;
    gfd.shift();
}
//setTimeout(book1,1000);
//this referes to the node that is calledd to click on so wowowowowowo