let heading = document.getElementById("container"); 
// Selects the element (box/text) with id="container"

let button = document.getElementById("btn"); 
// Selects the button with id="btn"


button.addEventListener("click", function(){
// Adds a click event → this function runs when button is clicked


if(heading.style.display === "none"){
    // Checks: is the element currently hidden?

    heading.style.display = "block"; 
    // If hidden → show the element

    button.textContent = "Hide"; 
    // Change button text to "Hide"
}
else{
    // If element is visible

    heading.style.display = "none"; 
    // Hide the element

    button.textContent = "Show"; 
    // Change button text to "Show"
}

});