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
  " ": "/" // Spasi antar kata dalam Morse
};

// Buat mapping Morse → Teks
const textMap = Object.fromEntries(Object.entries(morseCodeMap).map(([char, morse]) => [morse, char]));

function isValidText(text) {
  return /^[a-zA-Z0-9\s]+$/.test(text); // Mengizinkan spasi
}

function isValidMorse(morse) {
  return /^[.\-\/|]+$/.test(morse); // Mengizinkan '.', '-', '/', dan '|'
}

function textToMorse(text) {
  return text.toUpperCase().split("").map(char => morseCodeMap[char] || "").join("|");
}

function morseToText(morse) {
  return morse.split("|").map(code => textMap[code] || "").join("");
}

function main() {
  rl.question("Pilih mode: (1) Text to Morse | (2) Morse to Text | (X) Keluar: ", (choice) => {
    if (choice.toUpperCase() === "X") {
      console.log("👋 Keluar dari program.");
      rl.close();
      return;
    }

    if (choice === "1") {
      rl.question("Masukkan teks: ", (input) => {
        if (!isValidText(input)) {
          console.log("❌ Input tidak valid. Hanya huruf, angka, dan spasi yang diperbolehkan.");
          main();
          return;
        }
        console.log(`✅ Hasil Morse: ${textToMorse(input)}`);
        main();
      });
    } else if (choice === "2") {
      rl.question("Masukkan kode Morse (gunakan '|' antar huruf, '/' antar kata): ", (input) => {
        if (!isValidMorse(input)) {
          console.log("❌ Input tidak valid. Hanya karakter '.', '-', '/', dan '|' yang diperbolehkan.");
          main();
          return;
        }
        console.log(`✅ Hasil Teks: ${morseToText(input)}`);
        main();
      });
    } else {
      console.log("❌ Pilihan tidak valid.");
      main();
    }
  });
}

main();
