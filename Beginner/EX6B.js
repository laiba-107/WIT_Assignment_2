function checkPalindrome() {
    const str = document.getElementById("palindromeInput").value.toLowerCase();
    const isPalindrome = str === str.split('').reverse().join('');
    document.getElementById("result").textContent = isPalindrome ? "It's a palindrome!" : "Not a palindrome.";
}
