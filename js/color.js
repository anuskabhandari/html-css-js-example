let heading = document.getElementById("title")
let button =document.getElementById("btn")

let count =0;
button.addEventListener("click",function(){

    count++;

    if (count==1){

    
      heading.style.color="pink";}

      else if(count==2){
      heading.style.color="yellow";
      }

      else{

        heading.style.color="purple"
      }




});