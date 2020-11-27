function print(event,charcter){
    event.preventDefault();
    document.querySelector(".input").value+=charcter;
}
document.querySelectorAll(".char").forEach(caclButton=> {caclButton.addEventListener("click",function(event){print(event,this.innerHTML);}) });

//print result

function printRisult(event){
    event.preventDefault();
    var result=document.querySelector(".input");
    document.querySelector(".output").value=(eval(result.value));
}
document.querySelector(".submit").addEventListener("click",function(event){printRisult(event); });

//clear input
function clr(event)
{
    event.preventDefault();
   document.querySelector(".input").value ="";
    document.querySelector(".output").value ="";
}
document.querySelector(".clr").addEventListener("click",function(event){clr(event,this.innerHTML);})


