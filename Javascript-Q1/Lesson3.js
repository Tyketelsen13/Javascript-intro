cost randomDecimal = math.Random();
const range = 33 - 3 + 1';
// answer is 31
const randomInRange = randomDecimal * range;
// random number within range of 0-3
const randomInt = math.floor(randomInRange);
// removes decimal to give whole number
const shiftValue = randomInt + 3;
// Shift range to get number between 3-33