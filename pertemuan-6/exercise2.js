//ubah atau modifikasi exercise 1 
//menggunakan
//1. IIFE
//2.Callback Function

//1. with parameter
let output = (function BMI(weight, height){
    return (weight / (height ** 2))
})(54, 1.6);
console.log(output)

//2. with prmt, arg and return value
function BMI(callback) {
    let result= callback(54, 1.6)
    return result;
}
let outputs = BMI(function (Weight, height){
    return "The BMI result =" + Weight,height
});
console.log(outputs)