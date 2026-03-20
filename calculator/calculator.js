// Get the display input
let display = document.getElementById("display");
// get all the number buttons
let numberButtons = document.querySelectorAll(".number");

// get all the operator buttons
let opeartorButtons =document.querySelectorAll(".operator");

//get equal button
let equalButton = document.querySelector(".equal");

//get clear button 
let clearButton =document.querySelector(".clear");

//number buttons click ---> append number to display
numberButtons.forEach(function(button){
  button.addEventListener("click", function(){
     display.value += button.textContent; // add number to display

  });

});

//Operator button click---> append operator to display

opeartorButtons.forEach(function(button){
    button.addEventListener("click",function(){
        let lastChar = display.value.slice(-1); //get last character
        // Only add operator if last character is not an operator
         if(lastChar !== "+" && lastChar !== "-" && lastChar !== "*" && lastChar !== "/"){
            display.value += button.textContent;
        }
    });
});

// Equal button c lick --> calculate Result
equalButton.addEventListener("click",function(){
    try{
        display.value=eval(display.value); // evaluate the expression
    }
    catch(error){
        display.value = "Error"; // Show error if invalid expression
    }
    
});

//Clear button click --> empty display
clearButton.addEventListener("click",function(){
    display.value="";
});