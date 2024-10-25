function getUniqueValues() {
    const array = document.getElementById("arrayInput").value.split(",").map(Number);
    const unique = [...new Set(array)];
    document.getElementById("result").textContent = "Unique Values: " + unique.join(", ");
}
