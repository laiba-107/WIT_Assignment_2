function reverseString() {
    const str = document.getElementById("inputString").value;
    const reversed = str.split('').reverse().join('');
    document.getElementById("result").textContent = `Reversed: ${reversed}`;
}
