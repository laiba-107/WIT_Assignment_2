function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function deepCloneExample() {
    const original = { name: "Laiba", details: { age: 20, hobbies: ["reading", "coding"] } };
    const clone = deepClone(original);
    clone.details.age = 21;

    document.getElementById("result").textContent = 
        `Original: ${JSON.stringify(original, null, 2)}\n\nClone: ${JSON.stringify(clone, null, 2)}`;
}
