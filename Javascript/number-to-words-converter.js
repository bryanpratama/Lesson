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
  if (num < 1000) {
    let ratusan = Math.floor(num / 100);
    let sisa = num % 100;
    let ratusanKata = ratusan === 1 ? "seratus" : satuan[ratusan] + " ratus";
    return ratusanKata + (sisa !== 0 ? " " + angkaKeKata(sisa) : "");
  }
  if (num < 1000000) {
    let ribuan = Math.floor(num / 1000);
    let sisa = num % 1000;
    let ribuanKata = angkaKeKata(ribuan) + " ribu";
    return ribuanKata + (sisa !== 0 ? " " + angkaKeKata(sisa) : "");
  }
  if (num < 1000000000) {
    let jutaan = Math.floor(num / 1000000);
    let sisa = num % 1000000;
    let jutaanKata = angkaKeKata(jutaan) + " juta";
    return jutaanKata + (sisa !== 0 ? " " + angkaKeKata(sisa) : "");
  }
  if (num < 1000000000000) {
    let miliaran = Math.floor(num / 1000000000);
    let sisa = num % 1000000000;
    let miliaranKata = angkaKeKata(miliaran) + " miliar";
    return miliaranKata + (sisa !== 0 ? " " + angkaKeKata(sisa) : "");
  }
  if (num < 1000000000000000) {
    let triliunan = Math.floor(num / 1000000000000);
    let sisa = num % 1000000000000;
    let triliunanKata = angkaKeKata(triliunan) + " triliun";
    return triliunanKata + (sisa !== 0 ? " " + angkaKeKata(sisa) : "");
  }

  return "Belum mendukung angka lebih dari 9.999.999.999.999!";
};

rl.question("Masukkan angka: ", (angka) => {
  const hasil = angkaKeKata(parseInt(angka, 10));
  console.log(`Hasil: ${hasil}`);
  rl.close();
});
