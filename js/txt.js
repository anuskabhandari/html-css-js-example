let heading = document.getElementById("title");// GetElementById selects the HTML element
let button = document.getElementById("btn");

let count =0;

button.addEventListener("click",function(){//addEventListener listens for button click
count ++;


if (count==1){
   heading.textContent="Hello Rekha";// text contnt changes the text inxide the heading
   heading.style.color="red";
}
else if(count==2)
{
   heading.textContent="Learning DOM!";
   heading.style.color="blue";
}

else{
   heading.textContent="Great Job!";
   heading.style.color="green";
}

});