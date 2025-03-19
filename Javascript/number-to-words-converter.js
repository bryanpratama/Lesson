const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const satuan = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
const belasan = ["sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"];
const puluhan = ["", "", "dua puluh", "tiga puluh", "empat puluh", "lima puluh", "enam puluh", "tujuh puluh", "delapan puluh", "sembilan puluh"];
const skala = ["", "ribu", "juta", "miliar", "triliun", "kuadriliun", "kuintiliun", "sekstiliun", "septiliun", "oktiliun", "noniliun", "desiliun", "undesiliun"];

const angkaKeKata = (num) => {
  if (num === 0n) return "nol";
  let hasil = "";
  let grup = 0;

  while (num > 0n) {
    let tigaDigit = num % 1000n;
    if (tigaDigit > 0n) {
      let bagian = konversiTigaDigit(Number(tigaDigit)) + (skala[grup] ? " " + skala[grup] : "");
      hasil = bagian + (hasil ? " " + hasil : "");
    }
    num = num / 1000n;
    grup++;
  }

  return hasil;
};

const konversiTigaDigit = (num) => {
  if (num === 0) return "";
  if (num < 10) return satuan[num];
  if (num < 20) return belasan[num - 10];
  if (num < 100) return puluhan[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + satuan[num % 10] : "");
  
  let ratusan = Math.floor(num / 100);
  let sisa = num % 100;
  let ratusanKata = ratusan === 1 ? "seratus" : satuan[ratusan] + " ratus";
  return ratusanKata + (sisa !== 0 ? " " + konversiTigaDigit(sisa) : "");
};

rl.question("Masukkan angka: ", (angka) => {
  let num = BigInt(angka);
  if (num > 999999999999999999999999999999999999999n) {
    console.log("Maaf, angka terlalu besar! Maksimum adalah 999 undesiliun.");
  } else {
    console.log(`Hasil: ${angkaKeKata(num)}`);
  }
  rl.close();
});
