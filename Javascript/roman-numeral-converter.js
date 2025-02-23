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

// Konversi angka biasa ke angka Romawi
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

// Konversi angka Romawi ke angka biasa
function fromRoman(roman) {
  let result = 0;
  let i = 0;
  
  while (i < roman.length) {
    const twoChar = roman.substr(i, 2);
    const oneChar = roman.substr(i, 1);
    const matchTwo = romanNumerals.find((r) => r.numeral === twoChar);
    const matchOne = romanNumerals.find((r) => r.numeral === oneChar);

    if (matchTwo) {
      result += matchTwo.value;
      i += 2;
    } else if (matchOne) {
      result += matchOne.value;
      i += 1;
    } else {
      return NaN; // Jika ada karakter tidak valid
    }
  }
  
  return result;
}

// Fungsi untuk memproses input
function startConversion() {
  rl.question("Masukkan angka atau angka Romawi: ", (input) => {
    if (/^\d+$/.test(input)) {
      // Jika input angka biasa
      const number = parseInt(input);
      console.log(`✅ Hasil: ${number} = ${toRoman(number)}`);
    } else if (/^[IVXLCDM]+$/i.test(input)) {
      // Jika input angka Romawi
      const result = fromRoman(input.toUpperCase());
      if (isNaN(result)) {
        console.log("❌ Input angka Romawi tidak valid!");
      } else {
        console.log(`✅ Hasil: ${input.toUpperCase()} = ${result}`);
      }
    } else {
      console.log("❌ Input tidak valid! Masukkan angka atau angka Romawi yang benar.");
    }

    startConversion(); // Ulangi input
  });
}

console.log("🏛️ Roman Numeral Converter 🏛️");
startConversion();
