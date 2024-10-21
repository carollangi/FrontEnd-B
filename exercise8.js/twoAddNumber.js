// Fungsi untuk menjumlahkan angka
const addNumber = (...numbers) => {
    let sum = 0;
    numbers.forEach((item) => (sum += item));
    return sum;
  };
  
  // Export fungsi addNumber
  export default addNumber;