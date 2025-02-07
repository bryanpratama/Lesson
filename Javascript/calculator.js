const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan angka pertama: ', (num1) => {
    rl.question('Masukkan angka kedua: ', (num2) => {
        const sum = parseFloat(num1) + parseFloat(num2);
        console.log(`Hasil penjumlahan: ${sum}`);
        rl.close();
    });
});
