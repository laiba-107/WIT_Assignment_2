// Function to create a pipeline of functions
function pipe(...funcs) {
    return function (initialValue) {
        return funcs.reduce((acc, func) => func(acc), initialValue);
    };
}

// Example functions for the pipeline
function addOne(x) {
    return x + 1;
}

function multiplyByTwo(x) {
    return x * 2;
}

function subtractThree(x) {
    return x - 3;
}

// Create the pipeline
const pipeline = pipe(addOne, multiplyByTwo, subtractThree);

// Run the pipeline with user input
function executePipeline() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const result = pipeline(inputValue);
    document.getElementById('result').textContent = `Result: ${result}`;
}
