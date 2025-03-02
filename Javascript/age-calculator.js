const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateAge(birthYear, targetYear = new Date().getFullYear()) {
  return targetYear - birthYear;
}

function main() {
  rl.question("Masukkan tahun lahir: ", (birthYear) => {
    birthYear = parseInt(birthYear);
    if (isNaN(birthYear) || birthYear <= 0) {
      console.log("❌ Input tidak valid. Masukkan tahun yang benar!");
      return main();
    }

    rl.question("Masukkan tahun target (kosongkan untuk tahun ini): ", (targetYear) => {
      targetYear = targetYear ? parseInt(targetYear) : new Date().getFullYear();

      if (isNaN(targetYear) || targetYear < birthYear) {
        console.log("❌ Tahun target tidak valid.");
        return main();
      }

      console.log(`✅ Umur kamu pada tahun ${targetYear} adalah ${calculateAge(birthYear, targetYear)} tahun.`);
      rl.close();
    });
  });
}

main();
