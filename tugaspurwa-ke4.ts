//soal 1


type Students = {
  name: string;
  email: string;
};

// Array mahasiswa pertama
const array1: Students[] = [
  { name: 'Student 1', email: 'student1@mail.com' },
  { name: "Student 2", email: "student2@mail.com" },
];

// Array mahasiswa kedua
const array2: Students[] = [
  { name: 'Student 1', email: 'student1@mail.com' },
  { name: 'Student 3', email: 'student3@mail.com' },
];

// Function untuk menggabungkan array
function mergeStudents(arr1: Students[], arr2: Students[]) {
  // Gabungkan kedua array menjadi satu
  const merged = [...arr1, ...arr2];

  // Filter mahasiswa agar tidak ada email duplikat
  const result = merged.filter((student, index) => {
    return (
      merged.findIndex(
        (item) => item.email === student.email
      ) === index
    );
  });

  return result;
}

// Jalankan function
console.log(mergeStudents(array1, array2));

//soal 2



// Data awal
const data = [
  { name: "David", age: 20 }
];

// Function untuk menukar key dan value
function switchPropertyValue(
  arr: Record<string, string | number>[]
) {
  // Mengubah setiap object dalam array
  return arr.map((obj) => {

    // Object kosong untuk menyimpan hasil
    const result: Record<string, string> = {};

    // Mengambil pasangan key dan value
    Object.entries(obj).forEach(([key, value]) => {

      // Value lama menjadi key baru
      // Key lama menjadi value baru
      result[String(value)] = key;
    });

    // Mengembalikan object yang sudah ditukar
    return result;
  });
}

// Jalankan function
console.log(switchPropertyValue(data));
