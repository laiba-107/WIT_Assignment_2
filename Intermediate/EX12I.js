function findIntersection() {
    const array1 = document.getElementById("array1").value.split(',').map(Number);
    const array2 = document.getElementById("array2").value.split(',').map(Number);
    const intersection = array1.filter(value => array2.includes(value));
    document.getElementById("result").textContent = "Intersection: " + intersection.join(", ");
}
