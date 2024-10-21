// //variable dan operators

// // 1. Javascript variable
// let fullName = "John Doe"; //camel case
// let full_name = "John Doe"; //snake case
// let FullName = "John Doe"; //pascal case

// const gender = "male"; //String
// // gender = "female"; //error
// let age = 30; //Number integer
// age = 31; 
// let weight = 85.5; //number float
// let isMarried = true; //Boolean
// let grade = null; //Null
// let address ; //Undefined

// console.log(FullName);
// console.log(gender);
// console.log(age);
// console.log(weight);
// console.log(isMarried);
// console.log(grade);
// console.log(address);

//2. Javascript operators
//a. artihmetic operator (+, -, *, /, %, **)
// let bil1 = 20;
// let bil2 = 5;

// console.log(bil1 + bil2); //25
// console.log(bil1 - bil2); //15
// console.log(bil1 * bil2); //100
// console.log(bil1 / bil2); //
// console.log(bil1 % bil2);
// console.log(bil1 ** bil2);

// let alas = 5;
// let tinggi = 5;
// let luas = 0.5 * alas * tinggi;
// console.log(luas);

// //b. assignment operator (=, +=, -=, *=, /=)
// let bilangan = 10;
// bilangan = bilangan + 10;
// bilangan += 10;
// console.log(bilangan);

// //c. String operator (+)
// let firstName = "John";
// let lastName = "Doe";

// let fullName = firstName + " "+ lastName;
// console.log(fullName);

//d. Relational operator (==, ===, >, <, >=, <=)
let bil1 = 10;
let bil2 = 10;
let bil3 = "10";
let bil4 = 5;

console.log(bil1 == bil2); //true
console.log(bil1 === bil2); //true
console.log(bil1 == bil3); //true
console.log(bil1 === bil3); //false

console.log(bil1 > bil4); //true
console.log(bil1 < bil4); //false

//e. turnery operator (? :)
let age = 17;
let isEligible = age > 17 ? "Bisa buat KTP" : "Belum bisa buat KTP"
console.log(isEligible);

//f. logical operator (&&, ||, !)
// AND (&&)
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

//OR(||)
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); // false

//NOT (!)
console.log(!true); //false
console.log(!false); // true