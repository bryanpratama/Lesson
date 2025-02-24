const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isIPv4(ip) {
  const parts = ip.split(".");
  return (
    parts.length === 4 &&
    parts.every((part) => /^\d+$/.test(part) && part >= 0 && part <= 255)
  );
}

function isIPv6(ip) {
  const parts = ip.split(":");
  return (
    parts.length >= 2 &&
    parts.length <= 8 &&
    parts.every((part) => /^[0-9a-fA-F]{0,4}$/.test(part))
  );
}

function checkIPv4Type(ip) {
  const parts = ip.split(".").map(Number);
  if (
    (parts[0] === 10) ||
    (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) ||
    (parts[0] === 192 && parts[1] === 168)
  ) {
    return "Private";
  } else if (parts[0] === 127) {
    return "Loopback";
  } else {
    return "Public";
  }
}

function checkIPv6Type(ip) {
  if (ip.startsWith("fe80:")) {
    return "Link-Local";
  } else if (ip.startsWith("fc") || ip.startsWith("fd")) {
    return "Unique Local";
  } else if (ip === "::1") {
    return "Loopback";
  } else {
    return "Global";
  }
}

function checkIP(ip) {
  if (isIPv4(ip)) {
    console.log(`✅ IP Address: ${ip}`);
    console.log(`🔹 Versi: IPv4`);
    console.log(`🔹 Segmen: ${ip.split(".").join(" | ")}`);
    console.log(`🔹 IPv4 terdeteksi. Jenis: ${checkIPv4Type(ip)}`);
  } else if (isIPv6(ip)) {
    console.log(`✅ IP Address: ${ip}`);
    console.log(`🔹 Versi: IPv6`);
    console.log(`🔹 Segmen: ${ip.split(":").join(" | ")}`);
    console.log(`🔹 IPv6 terdeteksi. Jenis: ${checkIPv6Type(ip)}`);
  } else {
    console.log("❌ IP Address tidak valid!");
  }
}

rl.question("Masukkan IP Address: ", (ip) => {
  checkIP(ip);
  rl.close();
});
