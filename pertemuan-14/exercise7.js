// exercise 7
//carol langi
// front end

//1 
let yearUntilRetirement = ({ year, firstName }) => {
    const age = calculateAge(year);
    const retirement = 60 - age;
  
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
};

//2 no change
const addNumber = (...numbers) => {
    return numbers.reduce((sum, current) => sum + current, 0);
    };
  
    console.log(`${addNumber(1, 2, 3, 4, 5, 6, 7)}`);


//3
const calculateArea = ({ radius, power = 2 }) => {
    return 3.14 * Math.pow(radius, power);
};
  
const { area21, area7 } = {
    area21: calculateArea({ radius: 21 }),
    area7: calculateArea({ radius: 7 }),
};
  
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

//4 (no change)
const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
};

makeAjaxRequest({ url: 'www.google.com' });

