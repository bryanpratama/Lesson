const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function askForNumber() {
  rl.question("Masukkan angka untuk dicek: ", (input) => {
    const number = parseInt(input);

    if (isNaN(number) || number < 0) {
      console.log("❌ Masukkan angka positif yang valid!");
      askForNumber();
    } else {
      if (isPrime(number)) {
        console.log(`✅ ${number} adalah bilangan prima!`);
      } else {
        console.log(`❌ ${number} bukan bilangan prima.`);
      }
      rl.close();
    }
  });
}

askForNumber();
