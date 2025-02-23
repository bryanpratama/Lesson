const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Daftar konversi waktu dalam detik
const timeUnits = {
  detik: 1,
  menit: 60,
  jam: 3600,
  hari: 86400,
  minggu: 604800,
  bulan: 2628000, // rata-rata 30,44 hari
  tahun: 31536000, // 365 hari
};

function formatNumber(num) {
  return new Intl.NumberFormat("id-ID").format(num);
}

function convertTime(amount, fromUnit, toUnit) {
  if (!timeUnits[fromUnit] || !timeUnits[toUnit]) {
    return "Satuan waktu tidak valid!";
  }
  
  const inSeconds = amount * timeUnits[fromUnit];
  const convertedValue = inSeconds / timeUnits[toUnit];

  return `${formatNumber(amount)} ${fromUnit} = ${formatNumber(convertedValue.toFixed(2))} ${toUnit}`;
}

function startConversion() {
  rl.question("Masukkan jumlah waktu: ", (amount) => {
    if (isNaN(amount) || amount <= 0) {
      console.log("❌ Harap masukkan angka positif!");
      return startConversion();
    }

    rl.question("Masukkan satuan asal (detik, menit, jam, hari, minggu, bulan, tahun): ", (fromUnit) => {
      fromUnit = fromUnit.toLowerCase();

      rl.question("Masukkan satuan tujuan (detik, menit, jam, hari, minggu, bulan, tahun): ", (toUnit) => {
        toUnit = toUnit.toLowerCase();

        const result = convertTime(parseFloat(amount), fromUnit, toUnit);
        console.log(`✅ Hasil: ${result}`);

        rl.question("Ingin konversi lagi? (y/n): ", (answer) => {
          if (answer.toLowerCase() === "y") {
            startConversion();
          } else {
            console.log("Terima kasih telah menggunakan konverter waktu! 👋");
            rl.close();
          }
        });
      });
    });
  });
}

console.log("🕰️ Welcome to Unit Time Converter CLI! 🕰️");
startConversion();
