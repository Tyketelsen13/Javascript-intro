const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encryptedLetter (letter, shift) {
    const index = alphabet.indexOf(letter.toLowercase());
    const newIndex = (index + shift) % alphabet.length;
    return alphabet(newIndex);
}

function encryptedMessage ( word, shift) {
    let encryptedMessage = "";
    for (let M = 0; M < word.length; M++)
}
encryptedMessage += encryptedLetter(word[m] shift);
return encryptedMessage;

function decryptLetter (letter, shift) {
    const index = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (index - shift + alphabet.length) % alphabet.length;
    return alphabet[newIndex];
}
\function decryptMessage (word, shift) {
    let decryptMessage = "";
    for (let d = 0; < word.length; d++) {
        decryptedMessage =+ decryptLetter(wword[d], shift);
    }
} return decryptedMessage;

// Yes when functions are applied they cancel each other out bringing back the original message.