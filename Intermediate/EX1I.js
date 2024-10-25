function sortArray() {
    const input = document.getElementById("arrayInput").value;
    const array = input.split(",").map(Number);
    array.sort((a, b) => a - b);
    document.getElementById("result").textContent = "Sorted Array: " + array.join(", ");
}
