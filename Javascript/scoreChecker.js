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

function askForScore() {
  rl.question("Masukkan nilai (0-100): ", (input) => {
    const score = Number(input);

    if (isNaN(score) || score < 0 || score > 100) {
      console.log("Input tidak valid! Masukkan angka antara 0 hingga 100.");
      askForScore(); // Meminta ulang input
    } else {
      console.log(scoreChecker(score));
      rl.close();
    }
  });
}

askForScore();
