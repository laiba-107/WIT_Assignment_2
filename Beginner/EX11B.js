function sumArray() {
    const input = document.getElementById("arrayInput").value;
    const numbers = input.split(',').map(Number);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    document.getElementById("result").textContent = `Sum: ${sum}`;
}
