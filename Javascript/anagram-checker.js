const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function normalizeText(text) {
  return text.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function isAnagram(str1, str2) {
  const normalized1 = normalizeText(str1);
  const normalized2 = normalizeText(str2);
  return (
    normalized1.split("").sort().join("") === normalized2.split("").sort().join("")
  );
}

function checkAnagram() {
  rl.question("Masukkan kata atau kalimat pertama: ", (input1) => {
    rl.question("Masukkan kata atau kalimat kedua: ", (input2) => {
      if (isAnagram(input1, input2)) {
        console.log("✅ Anagram!");
      } else {
        console.log("❌ Bukan Anagram.");
      }
      checkAnagram();
    });
  });
}

checkAnagram();
