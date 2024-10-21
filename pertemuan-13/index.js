//Rest parameter dan Spread operator
//1. Rest parameter

// tanpa rest parameter
const func1 = (param1, param2, param3, param4, param5) => {
    console.log(param1, param2, param3, param4, param5);
};

func1 ("A", "B", "C", "D", "E");

//dengan rest parameter
const func2 = (...params) => {
    console.log(params);
};

func2("A", "B","C", "D", "E");

//rest parameter harus berada di terakhir dalam parameter list
const func3 = (param1, param2, ...params) => {
    console.log(param1, param2);
    console.log(params);
    console.log(params[1]);
};
func3("A,", "B", "C", "D", "E");

//mini exercise
const penjumlahan = (...arr)  => { //arr nya bisa pake kata lain or another variable
    let hasil = 0;
    arr.forEach((item) => (hasil += item));
    return hasil;
};
console.log(penjumlahan(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Spread operator
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

//Array
// fungsi"nya
// 1. duplikat Array
let number2 = [...numbers];
numbers.push(6);
console.log(number2);

// 2. Menggabungkan Array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let number3 = array1.concat(array2, array3); //ES5
let number4 = [...array1, ...array2, ...array3]; //ES6

//Object
// 1. Duplikas object
const john = {
    fullName: "John Doe",
    age: 30,
};
const john2 = {...john, address: "Manado"};

// 2. menggabungkan object
let obj1 = { a: 1, b: 2};
let obj2 = { c: 3, d: 4};

let combinedObj = {...obj1, ...obj2};
