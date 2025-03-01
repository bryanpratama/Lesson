const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const morseCodeMap = {
  "A": ".-",    "B": "-...",  "C": "-.-.",  "D": "-..",
  "E": ".",     "F": "..-.",  "G": "--.",   "H": "....",
  "I": "..",    "J": ".---",  "K": "-.-",   "L": ".-..",
  "M": "--",    "N": "-.",    "O": "---",   "P": ".--.",
  "Q": "--.-",  "R": ".-.",   "S": "...",   "T": "-",
  "U": "..-",   "V": "...-",  "W": ".--",   "X": "-..-",
  "Y": "-.--",  "Z": "--..",
  "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
  "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----",
  " ": "/"
};

function textToMorse(text) {
  return text.toUpperCase().split("").map(char => morseCodeMap[char] || "").join(" ");
}

rl.question("Masukkan teks: ", (input) => {
  console.log(`✅ Hasil Morse: ${textToMorse(input)}`);
  rl.close();
});
