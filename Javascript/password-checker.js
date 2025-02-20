const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkPasswordStrength(password) {
  let strength = 0;
  let suggestions = [];

  if (password.length >= 12) {
    strength++;
  } else {
    suggestions.push("Gunakan minimal 12 karakter.");
  }

  if (/[A-Z]/.test(password)) {
    strength++;
  } else {
    suggestions.push("Tambahkan huruf besar (A-Z).");
  }

  if (/[a-z]/.test(password)) {
    strength++;
  } else {
    suggestions.push("Tambahkan huruf kecil (a-z).");
  }

  if (/\d/.test(password)) {
    strength++;
  } else {
    suggestions.push("Tambahkan angka (0-9).");
  }

  if (/[\W_]/.test(password)) {
    strength++;
  } else {
    suggestions.push("Tambahkan simbol (!@#$%^&*).");
  }

  return { strength, suggestions };
}

rl.question("Masukkan password untuk diuji kekuatannya: ", (password) => {
  const { strength, suggestions } = checkPasswordStrength(password);

  console.log("\nHasil Analisis Password:");
  if (strength === 5) {
    console.log("✅ Password Anda **KUAT**! 💪");
  } else if (strength >= 3) {
    console.log("⚠️ Password Anda **SEDANG**. Bisa lebih kuat.");
  } else {
    console.log("❌ Password Anda **LEMAH**. Harap diperbaiki!");
  }

  if (suggestions.length > 0) {
    console.log("\n🔹 **Tips untuk memperkuat password:**");
    suggestions.forEach((tip) => console.log("- " + tip));
  }

  rl.close();
});
