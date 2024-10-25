function removeDuplicates() {
    const input = document.getElementById("arrayInput").value;
    const numbers = input.split(',').map(Number);
    const uniqueNumbers = [...new Set(numbers)];
    document.getElementById("result").textContent = `Unique Array: [${uniqueNumbers}]`;
}
