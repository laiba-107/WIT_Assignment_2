function checkEvenOdd() {
    const number = parseInt(document.getElementById("numberInput").value);
    const result = (number % 2 === 0) ? "Even" : "Odd";
    document.getElementById("result").textContent = `The number is ${result}.`;
}
