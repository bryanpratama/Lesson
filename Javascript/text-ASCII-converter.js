const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function textToASCII(text) {
  return text.split("").map(char => char.charCodeAt(0)).join(" ");
}

function asciiToText(ascii) {
  return ascii.split(" ").map(num => String.fromCharCode(Number(num))).join("");
}

rl.question("Pilih mode: (1) Text to ASCII | (2) ASCII to Text: ", (choice) => {
  if (choice === "1") {
    rl.question("Masukkan teks: ", (input) => {
      console.log(`✅ Hasil ASCII: ${textToASCII(input)}`);
      rl.close();
    });
  } else if (choice === "2") {
    rl.question("Masukkan kode ASCII (pisahkan dengan spasi): ", (input) => {
      console.log(`✅ Hasil Teks: ${asciiToText(input)}`);
      rl.close();
    });
  } else {
    console.log("❌ Pilihan tidak valid.");
    rl.close();
  }
});
