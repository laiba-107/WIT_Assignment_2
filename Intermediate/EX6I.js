function checkAnagram() {
    const str1 = document.getElementById("string1").value.toLowerCase().replace(/\s+/g, '');
    const str2 = document.getElementById("string2").value.toLowerCase().replace(/\s+/g, '');
    
    const sortStr = (str) => str.split('').sort().join('');
    const isAnagram = sortStr(str1) === sortStr(str2);

    document.getElementById("result").textContent = isAnagram ? "The strings are anagrams." : "The strings are not anagrams.";
}
