// // Javascript function
// // Cara 1. FUnction Declaration
// function greetings1(){
//     console.log("Hello World");
// }

// greetings1(); // Call/ Execute Function (Jangan lupa di panggil ya)

// // Cara 2. Function Expression
// let greetings2 = function (){
//     console.log("Hello World");
// };
// greetings2();

// //Parameter & Argument (input), return (output)
// // cara 1.
// //                  parameter
// function greetings1(fullName){
//     return "Hello" + fullName;
// }
// //                        argument
// let output = greetings1 ("John Doe");
// console.log(output);

// //Cara 2.
// let greetings2 = function(fullName) {
//     return "Hello" + fullName;
// }
// //                        argument
// let output1 = greetings1("John Doe");
// console.log(output1);

// //              parameter
// function?

// Global Scope and Local Scope

let x = 10;//global

function foo(){
    let y = 20; //local function
    console.log(x); //10
    console.log(y); //20
    if (y > 10){
        let z = 30;
        console.log(z);
    }
}

console.log(x);