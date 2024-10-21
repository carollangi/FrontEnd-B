//IIFE & Callback Function (Immediately<segera atau secara langsung> Invoked Function Expression)
//Kalau fungsi punya nama harus kita panggil, kalau IIFE sudah terpanggil secara langsung<anonymous function> fungsinya tidak memiliki nama.
// 1. IIFE
// //a. no parameter, arg, & return value
// (function (){
//     console.log("Hello World");
// })();
// //b. with parameters, arg & return value
// let output = (function (fullName){
//     return "Hello " + fullName;
// })("John Doe");
// console.log(output);


// //2. Callback Function
// //a.no parameter, arg and return value
// function sayHello(callback) {
//     callback(); //callbacknya boleh pake nama lain
// }
// sayHello(function (){
//     console.log("Hello World"); //Callback function
// });

//b. with prmt, arg and return value
function sayHello(callback) {
    let result= callback("John Doe"); //callbacknya boleh pake nama lain
    return result;
}
let output = sayHello(function (fullName){
    return "Hello" + fullName;
});
console.log(output);