const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generate angka acak antara 1 - 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Fungsi untuk meminta input tebakan
function guessNumber() {
  rl.question("Tebak angka (1-100): ", (input) => {
    const guess = parseInt(input);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log("❌ Masukkan angka yang valid antara 1 - 100!");
      guessNumber();
    } else if (guess < targetNumber) {
      console.log("🔼 Terlalu kecil! Coba lagi.");
      guessNumber();
    } else if (guess > targetNumber) {
      console.log("🔽 Terlalu besar! Coba lagi.");
      guessNumber();
    } else {
      console.log(`🎉 Benar! Angkanya adalah ${targetNumber}.`);
      console.log(`🔥 Anda berhasil dalam ${attempts} percobaan.`);
      rl.close();
    }
  });
}

// Mulai game
console.log("🎮 Selamat datang di Number Guessing Game!");
console.log("Tebak angka antara 1 hingga 100.");
guessNumber();
