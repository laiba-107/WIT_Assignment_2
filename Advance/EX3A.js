// Function to allow dropping the draggable element
function allowDrop(event) {
    event.preventDefault();
}

// Function to handle the drag event
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Function to handle the drop event
function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggableElement = document.getElementById(data);
    event.target.appendChild(draggableElement);
}
