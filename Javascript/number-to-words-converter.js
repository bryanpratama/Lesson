const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const angkaKeKata = (num) => {
  if (typeof num !== "bigint") num = BigInt(num);

  const satuan = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
  const belasan = ["sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"];
  const puluhan = ["", "", "dua puluh", "tiga puluh", "empat puluh", "lima puluh", "enam puluh", "tujuh puluh", "delapan puluh", "sembilan puluh"];
  const tingkat = ["", "ribu", "juta", "miliar", "triliun", "kuadriliun"];

  if (num < 10n) return satuan[Number(num)];
  if (num < 20n) return belasan[Number(num - 10n)];
  if (num < 100n) return puluhan[Number(num / 10n)] + (num % 10n !== 0n ? " " + satuan[Number(num % 10n)] : "");
  if (num < 1000n) return (num < 200n ? "seratus" : satuan[Number(num / 100n)] + " ratus") + (num % 100n !== 0n ? " " + angkaKeKata(num % 100n) : "");

  let hasil = "";
  let i = 0n;

  while (num > 0n) {
    let bagian = num % 1000n;
    if (bagian > 0n) {
      let kata = angkaKeKata(bagian);
      if (i === 1n && bagian === 1n) {
        hasil = "seribu " + hasil;
      } else {
        hasil = kata + (i > 0n ? " " + tingkat[Number(i)] + " " : "") + hasil;
      }
    }
    num /= 1000n;
    i++;
  }

  return hasil.trim();
};

rl.question("Masukkan angka: ", (angka) => {
  try {
    const hasil = angkaKeKata(BigInt(angka));
    console.log(`Hasil: ${hasil}`);
  } catch (error) {
    console.log("Angka terlalu besar atau tidak valid!");
  }
  rl.close();
});
