const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateExactAge(birthDate, targetDate = new Date()) {
  const birth = new Date(birthDate);
  const target = new Date(targetDate);

  let years = target.getFullYear() - birth.getFullYear();
  let months = target.getMonth() - birth.getMonth();
  let days = target.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(target.getFullYear(), target.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

function main() {
  rl.question("Masukkan tanggal lahir (YYYY-MM-DD): ", (birthDate) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(birthDate)) {
      console.log("❌ Format tanggal salah! Gunakan format YYYY-MM-DD.");
      return main();
    }

    rl.question("Masukkan tanggal target (YYYY-MM-DD, kosongkan untuk hari ini): ", (targetDate) => {
      targetDate = targetDate || new Date().toISOString().split("T")[0];

      if (!/^\d{4}-\d{2}-\d{2}$/.test(targetDate)) {
        console.log("❌ Format tanggal target salah!");
        return main();
      }

      const { years, months, days } = calculateExactAge(birthDate, targetDate);
      
      console.log(`\n📅 Umur kamu pada tanggal ${targetDate}:`);
      console.log(`🟢 ${years} tahun`);
      console.log(`🟡 ${months} bulan`);
      console.log(`🟣 ${days} hari\n`);

      rl.close();
    });
  });
}

main();
