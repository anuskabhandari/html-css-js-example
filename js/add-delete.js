
// select elements
let input = document.getElementById("name")
let addbtn = document.getElementById("addbtn")
let deletebtn = document.getElementById("deletebtn")
let ul = document.getElementById("todolist");

// Add Button click event
addbtn.addEventListener("click", function(){
   let task = input.value; // get the text from input

   if (task==""){
    alert("Please enter a task!"); // prevent empty task
    return;
   }


    let li = document.createElement("li"); // Create a new list item
    li.textContent = task;                 // Set its text
    ul.appendChild(li);                    // Add it to the list

    input.value = ""; // Clear the input after adding
});

// Step 3: Delete button click event
deletebtn.addEventListener("click", function() {
    let lastTask = ul.lastElementChild; // Get the last <li> in the list
    if(lastTask) {
        ul.removeChild(lastTask);       // Remove it
    } else {
        alert("No tasks to delete!");   // If list is empty
    }

});