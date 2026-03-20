let input = document.getElementById("task");
let addBtn = document.getElementById("addBtn");
let deleteBtn = document.getElementById("deleteBtn");
let ul = document.getElementById("to-do");

// ADD TASK
addBtn.addEventListener("click", function(){

    if(input.value.trim() === ""){
        alert("Task input is empty");
        return;
    }

    // Create li
    let li = document.createElement("li");
    li.textContent = input.value;

    // Create delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    // Style 
    delBtn.style.marginLeft = "10px";

    // Delete specific task
    delBtn.addEventListener("click", function(){
        li.remove();
    });

    // Add button to li
    li.appendChild(delBtn);

    // Add li to ul
    ul.appendChild(li);

    // Clear input
    input.value = "";
});


// DELETE LAST TASK
deleteBtn.addEventListener("click", function(){

    let lastTask = ul.lastElementChild;

    if(lastTask){
        ul.removeChild(lastTask);
    } else {
        alert("No task to be removed");
    }
});