const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function textToASCII(text) {
  return text.split("").map(char => char.charCodeAt(0)).join(" ");
}

rl.question("Masukkan teks: ", (input) => {
  console.log(`✅ Hasil ASCII: ${textToASCII(input)}`);
  rl.close();
});
