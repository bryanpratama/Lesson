const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fungsi untuk menentukan apakah IP adalah IPv4 atau IPv6
function getIPVersion(ip) {
  if (ip.includes(":")) {
    return "IPv6";
  } else if (ip.includes(".")) {
    return "IPv4";
  }
  return "Unknown";
}

// Fungsi untuk memproses input
function startIPCheck() {
  rl.question("Masukkan IP Address atau (X) untuk keluar: ", (input) => {
    input = input.trim();

    if (input.toUpperCase() === "X") {
      console.log("👋 Program selesai. Terima kasih!");
      rl.close();
      return;
    }

    const version = getIPVersion(input);
    console.log(`✅ IP Address: ${input}`);
    console.log(`🔹 Versi: ${version}`);

    if (version === "IPv4") {
      console.log(`🔹 Segmen: ${input.split(".").join(" | ")}`);
    } else if (version === "IPv6") {
      console.log(`🔹 Segmen: ${input.split(":").join(" | ")}`);
    }

    startIPCheck(); // Ulangi input
  });
}

console.log("🌐 IP Address Info Checker 🌐");
startIPCheck();
