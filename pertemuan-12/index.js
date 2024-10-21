// String literals, Array function and Default parameter

//1. string literals
let fullName = "John Doe";
let age = 33;
let address = "Manado";

//Halo nama saya John Doe, umur saya 33 tahun dan saya tinggal di manado
let kalimat =
    "Halo nama saya" +
    fullName + 
    "umur saya" +
    age +
    "tahun dan saya tinggal di "+
    address;

console.log(kalimat);

let kalimat2 = `halo nama saya ${fullName} umur saya ${age} tahun dan saya tinggal di ${address}`;


//2. arrow function
function sayGreetings1 (fullName) {
    return `Halo nama saya ${fullName}`;
}
console.log(sayGreetings1("John Doe"));

const sayGreetings = (fullName) => `Halo nama saya ${fullName}`;

console.log(sayGreetings("John Doe"));

// arroy function pada IIFE
let output1 = (() => "Hello")();
console.log(output1);

// arrow function pada callback
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2);

//3. Default parameter
const sayGreetings3 = (fullName) => {
    if(fullName === undefined) {
        
    }
}