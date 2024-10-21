// Import konstanta phi dari file lain
import { phi } from './constants.js';

// Fungsi untuk menghitung luas
const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

// Export fungsi calculateArea
export default calculateArea;