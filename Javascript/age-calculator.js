const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function countLeapYears(startYear, endYear) {
  let count = 0;
  for (let year = startYear; year <= endYear; year++) {
    if (isLeapYear(year)) {
      count++;
    }
  }
  return count;
}

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

  let totalDaysLived = 0;
  for (let y = birth.getFullYear(); y < target.getFullYear(); y++) {
    totalDaysLived += isLeapYear(y) ? 366 : 365;
  }

  for (let m = 0; m < months; m++) {
    totalDaysLived += new Date(target.getFullYear(), m + 1, 0).getDate();
  }
  totalDaysLived += days;

  const leapYearsPassed = countLeapYears(birth.getFullYear(), target.getFullYear());

  return { years, months, days, totalDaysLived, leapYearsPassed };
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

      const { years, months, days, totalDaysLived, leapYearsPassed } = calculateExactAge(birthDate, targetDate);
      
      console.log(`\n📅 Umur kamu pada tanggal ${targetDate}:`);
      console.log(`🟢 ${years} tahun`);
      console.log(`🟡 ${months} bulan`);
      console.log(`🟣 ${days} hari`);
      console.log(`📆 Total hari hidup: ${totalDaysLived} hari`);
      console.log(`🌍 Total tahun kabisat yang telah dilewati: ${leapYearsPassed}\n`);

      rl.close();
    });
  });
}

main();
