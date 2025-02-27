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

rl.question("Masukkan kata pertama: ", (word1) => {
  rl.question("Masukkan kata kedua: ", (word2) => {
    if (isAnagram(word1, word2)) {
      console.log("✅ Kedua kata adalah anagram!");
    } else {
      console.log("❌ Bukan anagram.");
    }
    rl.close();
  });
});
