function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById("celsiusInput").value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
}
