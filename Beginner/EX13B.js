function convertToString() {
    const num = document.getElementById("numberInput").value;
    document.getElementById("result").textContent = `String: "${num.toString()}"`;
}
