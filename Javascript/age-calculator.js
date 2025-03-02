const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateAge(birthYear, targetYear = new Date().getFullYear()) {
  const ageYears = targetYear - birthYear;
  const ageMonths = ageYears * 12;
  const ageDays = ageYears * 365; // Asumsi 1 tahun = 365 hari (tanpa kabisat)
  
  return { ageYears, ageMonths, ageDays };
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

      const { ageYears, ageMonths, ageDays } = calculateAge(birthYear, targetYear);
      
      console.log(`\n📅 Umur kamu pada tahun ${targetYear}:`);
      console.log(`🟢 ${ageYears} tahun`);
      console.log(`🟡 ${ageMonths} bulan`);
      console.log(`🟣 ${ageDays} hari (perkiraan)\n`);

      rl.close();
    });
  });
}

main();
