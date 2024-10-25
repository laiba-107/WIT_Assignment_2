function showDateTime() {
    const now = new Date();
    document.getElementById("result").textContent = `Current Date and Time: ${now.toString()}`;
}
