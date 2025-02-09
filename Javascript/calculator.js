const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askNumber(question, callback) {
    rl.question(question, (input) => {
        if (isNaN(input)) {
            console.log('Input harus berupa angka! Silakan coba lagi.');
            askNumber(question, callback);
        } else {
            callback(parseFloat(input));
        }
    });
}

askNumber('Masukkan angka pertama: ', (num1) => {
    askNumber('Masukkan angka kedua: ', (num2) => {
        rl.question('Pilih operasi (tambah, kurang, kali, bagi): ', (operation) => {
            let result;

            switch (operation.toLowerCase()) {
                case 'tambah':
                    result = num1 + num2;
                    break;
                case 'kurang':
                    result = num1 - num2;
                    break;
                case 'kali':
                    result = num1 * num2;
                    break;
                case 'bagi':
                    result = num2 !== 0 ? num1 / num2 : 'Tidak bisa membagi dengan nol';
                    break;
                default:
                    result = 'Operasi tidak dikenali';
            }

            console.log(`Hasil: ${result}`);
            rl.close();
        });
    });
});