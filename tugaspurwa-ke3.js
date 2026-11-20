// create a function to convert excel sheet column title into its corresponding column number    1

function titleToNumber(columnTitle) {
  let result = 0;

  // Periksa setiap huruf dalam nama kolom
  for (let i = 0; i < columnTitle.length; i++) {
    // Ubah huruf menjadi angka (A=1, B=2, dst.)
    let value = columnTitle.charCodeAt(i) - 64;

    // Kalikan hasil sebelumnya dengan 26, lalu tambah nilai huruf
    result = result * 26 + value;
  }

  return result;
}

console.log(titleToNumber("AB"));




//given a non empty array of integers nums, every element  appears twice except for one. Find that single one.   2

function singleNumber(nums) {
  // Periksa setiap angka dalam array
  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    // Hitung berapa kali angka tersebut muncul
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }

    // Jika hanya muncul sekali, kembalikan angkanya
    if (count === 1) {
      return nums[i];
    }
  }
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2])); 
console.log(singleNumber([1])); // 1
console.log(singleNumber([6, 7, 6, 7, 8]));


//given two strings s and t, return true if t is an anagram of s, and false otherwise.    3

function isAnagram(s, t) {
  // Jika jumlah huruf berbeda, bukan anagram
  if (s.length !== t.length) {
    return false;
  }

  // Ubah string menjadi array, urutkan, lalu gabungkan
  let sortedS = s.split("").sort().join("");
  let sortedT = t.split("").sort().join("");

  // Bandingkan hasil pengurutan kedua string
  return sortedS === sortedT;
}

console.log(isAnagram("anagram", "nagaram")); 
console.log(isAnagram("rat", "car")); 
console.log(isAnagram("fast", "fats"));


//You are climbing a staircase. It takes n steps to reach the top. 
//Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?     4


function climbStairs(n) {
  // Jika hanya 1 atau 2 tangga, hasilnya sama dengan n
  if (n <= 2) {
    return n;
  }

  // Jumlah cara untuk 1 dan 2 tangga
  let first = 1;
  let second = 2;

  // Hitung jumlah cara dari tangga ke-3 hingga n
  for (let i = 3; i <= n; i++) {
    // Jumlah cara = dua hasil sebelumnya
    let current = first + second;

    // Geser nilai untuk perhitungan berikutnya
    first = second;
    second = current;
  }

  return second;
}

console.log(climbStairs(2)); 
console.log(climbStairs(3)); 
console.log(climbStairs(5)); 
console.log(climbStairs(6));

//Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. 
//You may assume that the majority element always exists in the array.    5


const nums = [2, 2, 1, 1, 1, 2, 2];

function majorityElement(nums) {
  // Menyimpan jumlah kemunculan setiap angka
  const count = {};

  // Memeriksa setiap angka dalam array
  for (const num of nums) {
    // Menambah jumlah kemunculan angka
    count[num] = (count[num] || 0) + 1;

    // Mengecek apakah angka muncul lebih dari setengah
    if (count[num] > nums.length / 2) {
      return num;
    }
  }
}

console.log(majorityElement(nums)); 


//Create a function to convert roman numeral to integer.    6


const roman = "MCMXCIV";

function romanToInt(s) {
  // Menyimpan nilai setiap simbol Romawi
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  // Menyimpan total hasil perhitungan
  let total = 0;

  // Memeriksa setiap karakter Romawi
  for (let i = 0; i < s.length; i++) {
    // Mengambil nilai karakter sekarang
    const current = values[s[i]];

    // Mengambil nilai karakter berikutnya
    const next = values[s[i + 1]] || 0;

    // Mengurangi jika nilai sekarang lebih kecil
    if (current < next) {
      total -= current;
    } else {
      // Menambahkan jika tidak lebih kecil
      total += current;
    }
  }

  return total;
}

console.log(romanToInt(roman));


//Given an integer numRows, return the first numRows of Pascal's triangle     7


const numRows = 5;

function pascalTriangle(numRows) {
  // Menyimpan semua baris segitiga Pascal
  const result = [];

  // Membuat baris sesuai jumlah yang diminta
  for (let i = 0; i < numRows; i++) {
    // Membuat baris baru berisi angka 1
    const row = Array(i + 1).fill(1);

    // Menghitung angka di tengah baris
    for (let j = 1; j < i; j++) {
      // Menjumlahkan dua angka dari baris sebelumnya
      row[j] = result[i - 1][j - 1] + result[i - 1][j];
    }

    // Memasukkan baris baru ke dalam hasil
    result.push(row);
  }

  return result;
}

console.log(pascalTriangle(numRows));

//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the
//future to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



const prices = [7, 1, 5, 3, 6, 4];

function maxProfit(prices) {
  // Menyimpan harga beli termurah
  let minPrice = Infinity;

  // Menyimpan keuntungan terbesar
  let maxProfit = 0;

  // Memeriksa harga saham setiap hari
  for (const price of prices) {
    // Memperbarui harga beli jika lebih murah
    if (price < minPrice) {
      minPrice = price;
    }

    // Menghitung keuntungan jika dijual hari ini
    const profit = price - minPrice;

    // Memperbarui keuntungan terbesar
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}

console.log(maxProfit(prices)); 
