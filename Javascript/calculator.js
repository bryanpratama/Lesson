const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan angka pertama: ', (num1) => {
    rl.question('Masukkan angka kedua: ', (num2) => {
        rl.question('Pilih operasi (tambah, kurang, kali, bagi): ', (operation) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            let result;

            switch (operation.toLowerCase()) {
                case 'tambah':
                    result = a + b;
                    break;
                case 'kurang':
                    result = a - b;
                    break;
                case 'kali':
                    result = a * b;
                    break;
                case 'bagi':
                    result = b !== 0 ? a / b : 'Tidak bisa membagi dengan nol';
                    break;
                default:
                    result = 'Operasi tidak dikenali';
            }

            console.log(`Hasil: ${result}`);
            rl.close();
        });
    });
});