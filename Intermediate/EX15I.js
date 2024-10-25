function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = () => li.style.textDecoration = "line-through";

    li.appendChild(completeButton);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}
