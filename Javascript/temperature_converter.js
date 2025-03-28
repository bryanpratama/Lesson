const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askTemperature() {
    rl.question('Masukkan suhu: ', (temp) => {
        if (isNaN(temp)) {
            console.log('Input harus berupa angka! Silakan coba lagi.');
            askTemperature();
        } else {
            askUnit(parseFloat(temp));
        }
    });
}

function askUnit(temperature) {
    rl.question('Konversi ke (C/F): ', (unit) => {
        let convertedTemp;
        
        if (unit.toUpperCase() === 'C') {
            convertedTemp = (temperature - 32) * 5/9;
            console.log(`${temperature}°F = ${convertedTemp.toFixed(2)}°C`);
        } else if (unit.toUpperCase() === 'F') {
            convertedTemp = (temperature * 9/5) + 32;
            console.log(`${temperature}°C = ${convertedTemp.toFixed(2)}°F`);
        } else {
            console.log('Pilihan tidak valid. Gunakan C untuk Celcius atau F untuk Fahrenheit.');
            askUnit(temperature);
            return;
        }
        
        rl.close();
    });
}

askTemperature();
