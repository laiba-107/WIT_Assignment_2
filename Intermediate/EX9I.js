function checkSubstring() {
    const mainStr = document.getElementById("mainString").value;
    const subStr = document.getElementById("subString").value;
    const isPresent = mainStr.includes(subStr);

    document.getElementById("result").textContent = isPresent ? "Substring found!" : "Substring not found.";
}
