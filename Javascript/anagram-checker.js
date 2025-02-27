const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getCharCount(text) {
  const charCount = {};
  for (let char of text) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

function compareCharCounts(count1, count2) {
  let missingFromFirst = [];
  let missingFromSecond = [];
  
  for (let char in count1) {
    if (!count2[char]) {
      missingFromSecond.push(char.repeat(count1[char]));
    } else if (count1[char] > count2[char]) {
      missingFromSecond.push(char.repeat(count1[char] - count2[char]));
    }
  }

  for (let char in count2) {
    if (!count1[char]) {
      missingFromFirst.push(char.repeat(count2[char]));
    } else if (count2[char] > count1[char]) {
      missingFromFirst.push(char.repeat(count2[char] - count1[char]));
    }
  }

  return { missingFromFirst, missingFromSecond };
}

function isAnagram(text1, text2) {
  const cleanText1 = text1.replace(/\s+/g, "").split('').sort().join('');
  const cleanText2 = text2.replace(/\s+/g, "").split('').sort().join('');
  return cleanText1 === cleanText2;
}

function checkAnagram(text1, text2) {
  if (isAnagram(text1, text2)) {
    console.log("✅ Kata/kalimat merupakan anagram.");
  } else {
    console.log("❌ Kata/kalimat bukan anagram.");
    const { missingFromFirst, missingFromSecond } = compareCharCounts(getCharCount(text1), getCharCount(text2));
    if (missingFromFirst.length > 0) {
      console.log("🔹 Perbedaan karakter:");
      console.log(`   - Tambahkan pada kalimat pertama: ${missingFromFirst.join("")}`);
    }
    if (missingFromSecond.length > 0) {
      console.log("🔹 Perbedaan karakter:");
      console.log(`   - Tambahkan pada kalimat kedua: ${missingFromSecond.join("")}`);
    }
  }
}

rl.question("Masukkan kata/kalimat pertama: ", (input1) => {
  rl.question("Masukkan kata/kalimat kedua: ", (input2) => {
    checkAnagram(input1, input2);
    rl.close();
  });
});