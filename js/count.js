let input = document.getElementById("input");
let result = document.getElementById("result")

input.addEventListener("input", function(){
result.textContent = "Characters: " + input.value.length;
});

