function findLargestNumber() {
    const array = document.getElementById("arrayInput").value.split(',').map(Number);
    const largest = Math.max(...array);
    document.getElementById("result").textContent = `Largest Number: ${largest}`;
}
