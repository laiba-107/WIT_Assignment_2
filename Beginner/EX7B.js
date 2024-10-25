function countVowels() {
    const str = document.getElementById("stringInput").value.toLowerCase();
    const count = (str.match(/[aeiou]/g) || []).length;
    document.getElementById("result").textContent = `Vowel Count: ${count}`;
}
