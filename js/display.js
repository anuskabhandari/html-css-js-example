let input = document.getElementById("name");
let button = document.getElementById("btn");
let result = document.getElementById("result");


button.addEventListener("click",function(){

    let userName = input.value;
    result.textContent="Hello"  + userName;
}
)