const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isBinary(input) {
  return /^[01]+$/.test(input);
}

function isDecimal(input) {
  return /^\d+$/.test(input);
}

function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

function decimalToBinary(decimal) {
  return Number(decimal).toString(2);
}

function startConverter() {
  rl.question("Masukkan angka biner atau desimal. (X) untuk Keluar : ", (input) => {
    if (input.toUpperCase() === "X") {
      console.log("Keluar dari program.");
      rl.close();
      return;
    }

    if (isBinary(input)) {
      console.log(`✅ Hasil: ${input} (biner) = ${binaryToDecimal(input)} (desimal)`);
    } else if (isDecimal(input)) {
      console.log(`✅ Hasil: ${input} (desimal) = ${decimalToBinary(input)} (biner)`);
    } else {
      console.log("❌ Input tidak valid. Masukkan hanya angka biner atau desimal.");
    }

    startConverter();
  });
}

startConverter();
