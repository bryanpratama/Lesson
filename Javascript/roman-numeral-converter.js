const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const romanNumerals = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" },
];

function toRoman(num) {
  let result = "";
  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
}

function startConversion() {
  rl.question("Masukkan angka untuk dikonversi ke Romawi: ", (input) => {
    // Cek apakah input adalah angka valid
    if (!/^\d+$/.test(input)) {
      console.log("❌ Input harus berupa angka!");
      return startConversion(); // Ulangi input
    }

    const number = parseInt(input);
    console.log(`✅ Hasil: ${number} = ${toRoman(number)}`);
    rl.close();
  });
}

console.log("🏛️ Roman Numeral Converter 🏛️");
startConversion();
