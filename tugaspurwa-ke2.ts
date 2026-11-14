//soal 1

 // Membuat interface untuk menentukan struktur data siswa
interface Student {
  name: string;   // Nama siswa harus berupa string
  email: string;  // Email siswa harus berupa string
  age: Date;      // Tanggal lahir siswa menggunakan Date
  score: number;  // Nilai siswa harus berupa angka
}

// Membuat array yang berisi 3 object siswa
const students: Student[] = [
  {
    name: "Andi",
    email: "andi@gmail.com",
    age: new Date("2005-01-10"),
    score: 90
  },
  {
    name: "Budi",
    email: "budi@gmail.com",
    age: new Date("2003-05-15"),
    score: 80
  },
  {
    name: "Citra",
    email: "citra@gmail.com",
    age: new Date("2004-08-20"),
    score: 85
  }
];

// Membuat function untuk menghitung statistik siswa
// Parameter students menerima array berisi object Student
function calculateStudent(students: Student[]) {

  // Memastikan array siswa tidak kosong
  // Karena array kosong tidak bisa dihitung rata-ratanya
  if (students.length === 0) {
    throw new Error("Student array cannot be empty");
  }

  // Mengambil semua score dari array siswa
  // Hasilnya menjadi array angka: [90, 80, 85]
  const scores = students.map(student => student.score);

  // Mengubah tanggal lahir setiap siswa menjadi umur
  const ages = students.map(student => {

    // Mengambil tanggal hari ini
    const today = new Date();

    // Menghitung selisih tahun sekarang dengan tahun lahir
    let age = today.getFullYear() - student.age.getFullYear();

    // Menghitung selisih bulan sekarang dengan bulan lahir
    const month = today.getMonth() - student.age.getMonth();

    // Jika ulang tahun siswa tahun ini belum lewat,
    // maka hasil umur harus dikurangi 1
    if (
      month < 0 ||
      (month === 0 && today.getDate() < student.age.getDate())
    ) {
      age--;
    }

    // Mengembalikan umur siswa dalam bentuk angka
    return age;
  });

  // Mengembalikan object berisi hasil perhitungan
  return {
    score: {
      // Mengambil nilai terbesar dari array scores
      highest: Math.max(...scores),

      // Mengambil nilai terkecil dari array scores
      lowest: Math.min(...scores),

      // Menjumlahkan seluruh score lalu membaginya
      // dengan jumlah siswa untuk mendapat rata-rata
      average: scores.reduce((a, b) => a + b, 0) / scores.length
    },

    age: {
      // Mengambil umur paling tinggi
      highest: Math.max(...ages),

      // Mengambil umur paling rendah
      lowest: Math.min(...ages),

      // Menghitung rata-rata umur seluruh siswa
      average: ages.reduce((a, b) => a + b, 0) / ages.length
    }
  };
}

// Memanggil function dengan mengirim array students
// Lalu menampilkan object hasil perhitungan
console.log(calculateStudent(students));







//soal 2

// CLASS PRODUCT
// Class ini menjadi template untuk membuat object produk
class Product {

  // Menentukan property yang dimiliki setiap produk
  name: string;
  price: number;

  // Constructor dijalankan otomatis saat membuat
  // object baru menggunakan new Product(...)
  constructor(name: string, price: number) {

    // Menyimpan nama yang diterima constructor
    // ke property name milik object
    this.name = name;

    // Menyimpan harga yang diterima constructor
    // ke property price milik object
    this.price = price;
  }
}


// CLASS TRANSACTION
// Class ini mengatur keranjang dan total belanja
class Transaction {

  // Menyimpan total harga transaksi
  // Nilai awalnya 0 karena belum ada produk
  total: number = 0;

  // Array untuk menyimpan produk dan jumlahnya
  // Setiap elemen berisi object Product dan qty
  product: { product: Product; qty: number }[] = [];


  // METHOD ADD TO CART
  // Menerima produk dan jumlah yang ingin dibeli
  addToCart(product: Product, qty: number) {

    // Memastikan jumlah produk berupa bilangan bulat positif
    if (qty <= 0 || !Number.isInteger(qty)) {
      throw new Error("Quantity must be a positive integer");
    }

    // Memasukkan object produk dan qty ke array keranjang
    this.product.push({ product, qty });

    // Menghitung subtotal produk (harga x jumlah)
    // Lalu menambahkannya ke total transaksi
    this.total += product.price * qty;
  }


  // METHOD SHOW TOTAL
  // Mengembalikan total harga belanja saat ini
  showTotal() {
    return this.total;
  }


  // METHOD CHECKOUT
  // Mengembalikan seluruh data transaksi
  checkout() {
    return {
      total: this.total,     // Total harga seluruh produk
      product: this.product  // Semua produk dan jumlahnya
    };
  }
}


// MEMBUAT OBJECT PRODUK

// Membuat object laptop dari class Product
// name = "Laptop", price = 10000000
const laptop = new Product("Laptop", 10000000);

// Membuat object mouse dari class Product
// name = "Mouse", price = 200000
const mouse = new Product("Mouse", 200000);


// MEMBUAT OBJECT TRANSAKSI

// Membuat transaksi baru dari class Transaction
// Total awal = 0 dan keranjang masih kosong
const transaction = new Transaction();


// MENAMBAHKAN PRODUK

// Memanggil addToCart untuk memasukkan 1 laptop
// Total menjadi 10000000
transaction.addToCart(laptop, 1);

// Memasukkan 2 mouse ke keranjang
// 200000 x 2 = 400000
// Total sekarang menjadi 10400000
transaction.addToCart(mouse, 2);


// MENAMPILKAN TOTAL

// Memanggil method showTotal untuk mendapatkan
// total belanja, lalu menampilkannya ke console
console.log(transaction.showTotal());


// CHECKOUT

// Memanggil method checkout untuk mendapatkan
// data transaksi yang berisi total dan produk
console.log(transaction.checkout());
