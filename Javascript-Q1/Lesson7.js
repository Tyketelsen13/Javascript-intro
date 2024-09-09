const friend = "BRUTUS"
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
Let BRUTUS = ""
for (let i = 0; i < friend.length; i++) {
    const currentLetter = friend[i];
    const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
    const newIndex = (currentIndex + shiftValue) % alphabet.length;
    BRUTUS += alphabet[newIndex].toUpperCase();
}
// When you use a loops it keeps encryption random and lets you use each letter in the name.
// It keeps the encryption running once we hit z it goes back to a so keeps it encrypted