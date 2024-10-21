// NO 1
import yearUntilRetirement from './yearUntilRetirement.js';

// Panggil fungsi yearUntilRetirement
yearUntilRetirement({ year: 1987, firstName: "John" });

//NO 2
import addNumber from './addNumber.js';

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

//No 3
// Import fungsi calculateArea dari file lain
import calculateArea from './calculateArea.js';

let radius = 21;
let area21 = calculateArea({ radius, power: 2 });

radius = 7;
let area7 = calculateArea({ radius, power: 2 });

console.log(`area with 21 radius: ${area21} and area with 7 radius: ${area7}`);

//No 4
// Import fungsi makeAjaxRequest dari file lain
import makeAjaxRequest from './ajax.js';

// Panggil fungsi makeAjaxRequest
makeAjaxRequest('www.google.com');