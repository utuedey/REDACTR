// Contains the Logic of my app.

function scrambleContent() {
    const content = document.getElementById("content").value;
    const wordsToScramble = document.getElementById("words").value.split(' ');

    if (content.trim() === '') {
        alert("Please enter some content to scramble.");
        return;
    }

    if (wordsToScramble.length === 0) {
        alert("Please specify words to scramble.");
        return;
    }

    const regex = new RegExp(`\\b(${wordsToScramble.join('|')})\\b`, 'gi');
    const scrambledContent = content.replace(regex, match => {
        return scrambleWord(match);
    });

    document.getElementById("scrambledContent").textContent = scrambledContent;
}

function scrambleWord(word) {
    // scrambles the word by replacing it with asteriks
    return '*'.repeat(word.length);
}