//Buatlah fungsi untuk menghitung BMI (Body Mass Index)
//Rumus : BMI = berat / (tinggi *tinggi),
//berat dalam kg dan tinggi dalam meter
//170cm = 1.7m
//fungsi tersebut menerima 2 parameter  yaitu berat dan tinggi
//dan mengembalikan output berupa BMI

function BMI(weight, height){
    return "BMI result:" + (weight / (height * height));
}

let output = BMI(54, 1.6);
console.log(output);