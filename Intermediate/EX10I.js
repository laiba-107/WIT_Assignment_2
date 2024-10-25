function generateFibonacci() {
    const n = parseInt(document.getElementById("limit").value);
    const fibonacci = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    document.getElementById("result").textContent = "Fibonacci Sequence: " + fibonacci.slice(0, n).join(", ");
}
