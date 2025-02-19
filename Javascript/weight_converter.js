const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Konversi 1 gram ke satuan lain
const conversionRates = {
  kg: 0.001,
  ton: 0.000001,
  lb: 0.00220462,
  oz: 0.035274
};

// Menampilkan daftar satuan
function showUnits() {
  console.log("\nSatuan yang tersedia:");
  console.log("  - Gram (g)");
  console.log("  - Kilogram (kg)");
  console.log("  - Ton (ton)");
  console.log("  - Pound (lb)");
  console.log("  - Ounce (oz)");
  console.log("---------------------------------\n");
}

// Fungsi untuk meminta input berat
function getWeightInput() {
  rl.question("Masukkan nilai berat (angka positif): ", (input) => {
    const weight = parseFloat(input);

    if (isNaN(weight) || weight <= 0) {
      console.log("❌ Masukkan angka yang valid!");
      getWeightInput();
    } else {
      getUnitInput(weight);
    }
  });
}

// Fungsi untuk meminta input satuan awal
function getUnitInput(weight) {
  showUnits();
  rl.question("Masukkan satuan awal (contoh: g, kg, lb): ", (fromUnit) => {
    fromUnit = fromUnit.toLowerCase();

    if (fromUnit !== "g" && !conversionRates[fromUnit]) {
      console.log("❌ Satuan tidak valid! Coba lagi.");
      getUnitInput(weight);
    } else {
      getTargetUnit(weight, fromUnit);
    }
  });
}

// Fungsi untuk meminta input satuan tujuan
function getTargetUnit(weight, fromUnit) {
  rl.question("Masukkan satuan tujuan (contoh: kg, lb, oz): ", (toUnit) => {
    toUnit = toUnit.toLowerCase();

    if (!conversionRates[toUnit]) {
      console.log("❌ Satuan tidak valid! Coba lagi.");
      getTargetUnit(weight, fromUnit);
    } else {
      convertWeight(weight, fromUnit, toUnit);
    }
  });
}

// Fungsi konversi berat
function convertWeight(weight, fromUnit, toUnit) {
  let weightInGrams;

  // Jika satuan awal bukan gram, konversi ke gram dulu
  if (fromUnit === "g") {
    weightInGrams = weight;
  } else {
    weightInGrams = weight / conversionRates[fromUnit];
  }

  // Konversi dari gram ke satuan tujuan
  const result = weightInGrams * conversionRates[toUnit];

  console.log(`\n⚖ Hasil Konversi:`);
  console.log(`  ${weight} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`);
  console.log("---------------------------------");

  rl.close();
}

// Jalankan program
console.log("\n⚖ WELCOME TO WEIGHT CONVERTER!");
getWeightInput();
