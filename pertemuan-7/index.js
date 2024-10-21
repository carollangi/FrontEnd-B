// Array in Javascript (kita bisa menyimpan banyak data didalam variable)
// Deklarasi array
// Cara 1. array literal
let numbers = [1, 2, 3, 4, 5];
console.log(numbers)
// Cara 2. Kata kunci new
let numbers2 = new Array(6, 7, 8, 9, 10);
console.log(numbers2);

//Tipe data yang bisa disimpan dalam Array
let numberss = [1, 2, 3, 4, 5];//numbers
let students = ["John", "Jane", "Bob"];//strings
let john = ["John", 30, true, [80, 90, 100]]; // mixed. array di dalam array
console.log(john);

//Array length
console.log(numberss. length); //5
console.log(students. length); //4
console.log(john. length); //3

// cara mengakses element/data tertentu dalam array
// melalui index array. Index selalu dimulai dari 0
console.log(numberss[2]); //3
console.log(students[1]); //Jane
console.log(john[2]); //true
console.log(john[3][1]); //90

// mengakses element/ data terakhir dalam array
let numberz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numberz [numberz. length - 1]);
let index = numberz.findIndex(function (item) {
    return item === "Togo";
});
console.log(index);
console.log(countries[186]);

// Array method
let array = [1, 2, 3, "hello", false, true];
console.log(array);

//1. toString()
console.log(array.toString());
//2. join()
console.log(array.join());
console.log(array.join(" "));
console.log(array.join("-"));
console.log(array.join("#"));
//3. pop()
array.pop();
console.log(array);
//4. push()
array.push("selamat pagi");
console.log(array);
//5. shift()
array.shift();
console.log(array);
//6. unshift()
array.unshift("selamat pagi");
console.log(array);
//7. splice()
array.splice(2, 1); //hapus
console.log(array);
array.splice(1, 1, 1); //ganti
console.log(array);
array.splice(2, 0, 2, 3); //tambah
console.log(array);

//8. concat() >>menggabung
let buah = ["nanas", "semangka", "jeruk"];
let sayur = ["bayam", "tomat", "selada"];
let biji = ["kedelai", "mente", "almond"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);

//9. slice() >kebalikan dari concat, yaitu memisah
let sayuran = makanan.slice(3, 6);
console.log(sayuran);
let bijian = makanan.slice(6);
console.log(bijian);

