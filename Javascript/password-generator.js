const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk menghasilkan password
function generatePassword(length, useUpper, useLower, useNumbers, useSymbols) {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+{}[]|:;<>,.?/~";

    let charPool = "";
    if (useUpper) charPool += upperCase;
    if (useLower) charPool += lowerCase;
    if (useNumbers) charPool += numbers;
    if (useSymbols) charPool += symbols;

    if (charPool === "") {
        return "Pilih setidaknya satu jenis karakter!";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    return password;
}

// Fungsi untuk meminta input dari user
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

// Main function
async function main() {
    console.log("=== Password Generator ===");

    const length = parseInt(await askQuestion("Masukkan panjang password: "), 10);
    if (isNaN(length) || length <= 0) {
        console.log("Panjang password harus berupa angka positif!");
        rl.close();
        return;
    }

    const useUpper = (await askQuestion("Gunakan huruf besar? (y/n): ")).toLowerCase() === "y";
    const useLower = (await askQuestion("Gunakan huruf kecil? (y/n): ")).toLowerCase() === "y";
    const useNumbers = (await askQuestion("Gunakan angka? (y/n): ")).toLowerCase() === "y";
    const useSymbols = (await askQuestion("Gunakan simbol? (y/n): ")).toLowerCase() === "y";

    const password = generatePassword(length, useUpper, useLower, useNumbers, useSymbols);
    console.log("\nPassword yang dihasilkan:", password);

    rl.close();
}

// Jalankan program
main();
