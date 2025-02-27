const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isAnagram(str1, str2) {
  return (
    str1.split("").sort().join("") === str2.split("").sort().join("")
  );
}

function isValidInput(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function askForInput(question, callback) {
  rl.question(question, (input) => {
    if (!isValidInput(input)) {
      console.log("❌ Input hanya boleh berisi huruf! Coba lagi.");
      askForInput(question, callback);
    } else {
      callback(input);
    }
  });
}

askForInput("Masukkan kata pertama: ", (word1) => {
  askForInput("Masukkan kata kedua: ", (word2) => {
    if (isAnagram(word1.toLowerCase(), word2.toLowerCase())) {
      console.log("✅ Kedua kata adalah anagram!");
    } else {
      console.log("❌ Bukan anagram.");
    }
    rl.close();
  });
});
