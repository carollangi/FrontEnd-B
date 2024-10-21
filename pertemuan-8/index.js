// // Javascript Object & Conditional
// // array adalah variable yg dapat menyimpan banyak data.
// // Deklarasi object
// // object literal
// let john = {
//     firstName: "John", 
//     age: 30,
//     isMarried: true,
//     grade: [80, 90, 100],
//     sayGreetings: function() {
//         console.log("Hello my name is"+ this.firstName);
//     },
//     address: {
//         street: "Jl. Arnold Mononutu Airmadidi",
//         city: "Minahasa Utara",
//         province: "Sulawesi Utara",
//         postalCode: 95371,
//     },
// };
// console.log(john);

// // Mengakses properti dalam object
// //1. Dot notation
// console.log(john.firstName); // John
// console.log(john.age); // 30
// john.age = 31; //ubah nilai
// console.log(john);
// john.job = "Teacher" //tambah properti baru
// console.log(john);
// // 2. Bracket notation
// console.log(john["isMarried"]); //true
// john["nationality"] = "Indonesia"; //tambah property baru
// console.log(john);

// //object method
// john.sayGreetings();

// //object inside object
// console.log(john.address.city);

// //delete property dalam object
// delete john.grade;
// console.log(john);



//Javascript object & conditional
// 1. if - else
// jika suhu hari ini lebih dari atau sama dengan 37,
// tampilkan suhu hari ini panas
// jika tidak tampilkan suhu hari ini dingin
let temp = 38;
if (temp >= 37){
    console.log("Suhu hari ini panas");
} else{
    console.log("Suhu hari ini sejuk");
};

// 2. if - else - if - else
// jika nilai 100 - 80 tampilkan grade A
// jika nilai 70 - 79 tampilkan grade B
// jika nilai 50 - 69 tampilkan grade C
// jika nilai dibawah 50 tampilkan grade D
let grade = 100;
if (grade >= 80 && grade<= 100){
    console.log("Grade A")
} else if (grade >= 70 && grade <=80){
    console.log("Grade B")
} else if (grade >=50 && grade <= 70){
    console.log("Grade C")
} else {
    console.log("Grade D")
}

// 3. Switch - case
// jika angka 1 tampilkan January
// jika angka 2 tampilkan February
// jika angka 3 tampilkan March
//:
// JIka angka 12 tampilkan December

let number = 1;
switch (number){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("Not found");
        break;
}