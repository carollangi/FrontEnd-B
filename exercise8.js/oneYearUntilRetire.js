// Import fungsi calculateAge dari file lain
import calculateAge from './calculateAge.js';

// Fungsi untuk menghitung tahun pensiun
const yearUntilRetirement = ({ year, firstName }) => {
  let age = calculateAge(year);
  let retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

// Export fungsi yearUntilRetirement
export default yearUntilRetirement;