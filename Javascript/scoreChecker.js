const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function scoreChecker(score) {
  let result;

  if (score >= 90) {
    result = "Selamat! Anda mendapatkan nilai A.";
  } else if (score >= 80) {
    result = "Anda mendapatkan nilai B.";
  } else if (score >= 70) {
    result = "Anda mendapatkan nilai C.";
  } else if (score >= 60) {
    result = "Anda mendapatkan nilai D.";
  } else {
    result = "Anda mendapatkan nilai E.";
  }

  return result;
}

// Meminta input dari pengguna
rl.question("Masukkan nilai Anda: ", (input) => {
  const score = parseInt(input); // Konversi input ke angka

  if (isNaN(score) || score < 0 || score > 100) {
    console.log("Masukkan nilai dalam rentang 0 - 100.");
  } else {
    console.log(scoreChecker(score));
  }

  rl.close(); // Menutup input setelah selesai
});
