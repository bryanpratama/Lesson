const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

function decimalToBinary(decimal) {
  return Number(decimal).toString(2);
}

function isBinary(input) {
  return /^[01]+$/.test(input);
}

function isDecimal(input) {
  return /^[0-9]+$/.test(input);
}

rl.question("Masukkan angka biner atau desimal: ", (input) => {
  if (isBinary(input)) {
    console.log(`✅ Hasil konversi: ${binaryToDecimal(input)} (Decimal)`);
  } else if (isDecimal(input)) {
    console.log(`✅ Hasil konversi: ${decimalToBinary(input)} (Binary)`);
  } else {
    console.log("❌ Input tidak valid! Harap masukkan angka biner (hanya 0 dan 1) atau angka desimal.");
  }
  rl.close();
});
