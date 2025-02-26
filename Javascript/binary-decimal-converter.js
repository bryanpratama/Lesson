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

rl.question("Masukkan angka biner atau desimal: ", (input) => {
  if (input.includes("0") || input.includes("1")) {
    console.log(`✅ Hasil konversi: ${binaryToDecimal(input)} (Decimal)`);
  } else {
    console.log(`✅ Hasil konversi: ${decimalToBinary(input)} (Binary)`);
  }
  rl.close();
});
