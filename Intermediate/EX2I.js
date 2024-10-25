function validateEmail() {
    const email = document.getElementById("emailInput").value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);
    document.getElementById("result").textContent = isValid ? "Valid Email" : "Invalid Email";
}
