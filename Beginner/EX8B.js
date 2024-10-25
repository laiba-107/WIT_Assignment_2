function calculateFactorial() {
    const num = parseInt(document.getElementById("numberInput").value);
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    document.getElementById("result").textContent = `Factorial: ${factorial}`;
}
