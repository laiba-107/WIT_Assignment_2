function flattenArray() {
    const input = JSON.parse(document.getElementById("arrayInput").value);
    const flattened = input.flat(Infinity);
    document.getElementById("result").textContent = "Flattened Array: " + JSON.stringify(flattened);
}
