const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function textToASCII(text) {
  return text.split("").map(char => char.charCodeAt(0)).join("");
}

function asciiToText(ascii) {
  let result = "";
  let i = 0;

  while (i < ascii.length) {
    let threeDigit = ascii.substring(i, i + 3);
    let twoDigit = ascii.substring(i, i + 2);

    if (threeDigit >= 32 && threeDigit <= 126) {
      result += String.fromCharCode(threeDigit);
      i += 3;
    } else if (twoDigit >= 32 && twoDigit <= 126) {
      result += String.fromCharCode(twoDigit);
      i += 2;
    } else {
      console.log("⚠️ Kesalahan konversi! Pastikan input benar.");
      return "";
    }
  }
  return result;
}

function main() {
  rl.question("Pilih mode: (1) Text to ASCII | (2) ASCII to Text | (X) Keluar: ", (choice) => {
    if (choice.toUpperCase() === "X") {
      console.log("👋 Keluar dari program.");
      rl.close();
      return;
    }

    if (choice === "1") {
      rl.question("Masukkan teks: ", (input) => {
        console.log(`✅ Hasil ASCII: ${textToASCII(input)}`);
        main();
      });
    } else if (choice === "2") {
      rl.question("Masukkan kode ASCII tanpa spasi: ", (input) => {
        console.log(`✅ Hasil Teks: ${asciiToText(input)}`);
        main();
      });
    } else {
      console.log("❌ Pilihan tidak valid.");
      main();
    }
  });
}

main();
