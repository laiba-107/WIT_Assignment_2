function findPrimes() {
    const limit = parseInt(document.getElementById("limitInput").value);
    const primes = [];

    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    document.getElementById("result").textContent = "Prime Numbers: " + primes.join(", ");
}

function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}
