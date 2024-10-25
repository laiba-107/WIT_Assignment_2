function countWords() {
    const text = document.getElementById("textInput").value;
    const words = text.toLowerCase().split(/\s+/);
    const wordCount = {};

    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    document.getElementById("result").textContent = JSON.stringify(wordCount);
}
