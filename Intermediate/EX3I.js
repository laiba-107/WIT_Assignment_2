function manipulateObject() {
    const obj = { name: "John", age: 25 };
    obj.gender = "Male"; // Add property
    delete obj.age; // Remove property
    obj.name = "Jane"; // Update property

    document.getElementById("result").textContent = JSON.stringify(obj);
}
