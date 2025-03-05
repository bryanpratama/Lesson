const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const angkaKeKata = (num) => {
  const satuan = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
  const belasan = ["sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"];
  const puluhan = ["", "", "dua puluh", "tiga puluh", "empat puluh", "lima puluh", "enam puluh", "tujuh puluh", "delapan puluh", "sembilan puluh"];
  
  if (num < 10) return satuan[num];
  if (num < 20) return belasan[num - 10];
  if (num < 100) return puluhan[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + satuan[num % 10] : "");

  return "Belum mendukung angka besar!";
};

rl.question("Masukkan angka: ", (angka) => {
  const hasil = angkaKeKata(parseInt(angka, 10));
  console.log(`Hasil: ${hasil}`);
  rl.close();
});
