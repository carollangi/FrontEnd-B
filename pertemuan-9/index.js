// // Javascript loop

// //Array object
// let students = [
//     {
//         id: 1,
//         firstName: "Carol",
//         grade: 80,
//     },
//     {
//         id: 2,
//         firstName: "Pears",
//         grade: 90,
//     },
//     {
//         id: 3,
//         firstName: "Pamela",
//         grade: 100,
//     },  
// ];
// console.log(students);

// //1. for-loop
// for(let i=0; i < students.length; i++) {
//     console.log(students[i].firstName);
// }

// //2. while-loop
// let i = 0;
// while(i<students.length){
//     console.log(students[i].firstName);
//     i++;
// }

//3. do - while loop
let i = 0;
do {
    console.log(students[i].firstName);
    i++;
}while (i < students.length);

//4. Array built-in method (sebaiknya menggunakan ini)
//4.a forEach()

students.forEach(function (item){
    console.log(item.firstName);
});

//4.b map()
let output= students.map(function (item){
    return item.firstName;
});
console.log(output);

//4.c filter()
let outputFilter = students.filter(function (item){
    return item.grade >= 90;
});
console.log(outputFilter);

//4.d find()
let outputFind = students.find(function (item){
    return item.grade >= 90;
});
console.log(outputFind);

//4.e findIndex()
let outputFindIndex = students.findIndex(function (item){
    return item.firstName ==="Carol";
});
console.log(outputFindIndex);