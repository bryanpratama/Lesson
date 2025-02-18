const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Konversi 1 meter ke satuan lain
const conversionRates = {
  km: 0.001,
  cm: 100,
  mm: 1000,
  inch: 39.3701,
  foot: 3.28084,
  yard: 1.09361,
  mile: 0.000621371
};

// Menampilkan daftar satuan
function showUnits() {
  console.log("\nSatuan yang tersedia:");
  console.log("  - Meter (m)");
  console.log("  - Kilometer (km)");
  console.log("  - Centimeter (cm)");
  console.log("  - Milimeter (mm)");
  console.log("  - Inci (inch)");
  console.log("  - Kaki (foot)");
  console.log("  - Yard (yard)");
  console.log("  - Mil (mile)");
  console.log("---------------------------------\n");
}

// Fungsi untuk meminta input panjang
function getLengthInput() {
  rl.question("Masukkan nilai panjang (angka positif): ", (input) => {
    const length = parseFloat(input);

    if (isNaN(length) || length <= 0) {
      console.log("❌ Masukkan angka yang valid!");
      getLengthInput();
    } else {
      getUnitInput(length);
    }
  });
}

// Fungsi untuk meminta input satuan awal
function getUnitInput(length) {
  showUnits();
  rl.question("Masukkan satuan awal (contoh: m, cm, inch): ", (fromUnit) => {
    fromUnit = fromUnit.toLowerCase();

    if (fromUnit !== "m" && !conversionRates[fromUnit]) {
      console.log("❌ Satuan tidak valid! Coba lagi.");
      getUnitInput(length);
    } else {
      getTargetUnit(length, fromUnit);
    }
  });
}

// Fungsi untuk meminta input satuan tujuan
function getTargetUnit(length, fromUnit) {
  rl.question("Masukkan satuan tujuan (contoh: km, yard, mile): ", (toUnit) => {
    toUnit = toUnit.toLowerCase();

    if (!conversionRates[toUnit]) {
      console.log("❌ Satuan tidak valid! Coba lagi.");
      getTargetUnit(length, fromUnit);
    } else {
      convertLength(length, fromUnit, toUnit);
    }
  });
}

// Fungsi konversi panjang
function convertLength(length, fromUnit, toUnit) {
  let lengthInMeters;

  // Jika satuan awal bukan meter, konversi ke meter dulu
  if (fromUnit === "m") {
    lengthInMeters = length;
  } else {
    lengthInMeters = length / conversionRates[fromUnit];
  }

  // Konversi dari meter ke satuan tujuan
  const result = lengthInMeters * conversionRates[toUnit];

  console.log(`\n📏 Hasil Konversi:`);
  console.log(`  ${length} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`);
  console.log("---------------------------------");

  rl.close();
}

// Jalankan program
console.log("\n🔢 WELCOME TO LENGTH CONVERTER!");
getLengthInput();
