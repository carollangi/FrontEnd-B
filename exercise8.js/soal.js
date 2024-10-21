// exercise 8
//carol langi
// front end
// ubah pake module

// //1 
// const calculateAge = (birthYear) => 2019- birhtDay;

// const yearUntilRetirement = ({year, firstName}) => {
//     let age = calculateAge(year);
//     let retirement = 60 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//     }else {
//         console.log(`${firstName} is already retired.`);
//     }
// };
// yearUntilRetirement({ year: 1987, firstName: "John"});

// //2 
// const addNumber = (...numbers) => {
//     let sum = 0;
//     //change to map function
//     numbers.map((item) => (sum += item));
//     return sum;
// };
// console.log(addNumber(1, 2, 3, 4, 5, 6, 7))

// //3
// let phi = 3.14;
// let power = 2;
// let radius = 0;

// const calculateArea = (obj) => phi * Math.pow(obj.radius, obj,power);

// radius = 21;
// let area21= calculateArea({ radius: radius, power: 2 });

// radius = 7;
// let area7 = calculateArea({ radius: radius, power: 2});

// console.log(`area with 21 radius: ${area21} and area with 7 radius: ${area7}`);



// //4 (no change)
// const makeAjaxRequest = (url, method = 'GET') => {
//     console.log(url, method);
// };

// makeAjaxRequest('www.google.com');

