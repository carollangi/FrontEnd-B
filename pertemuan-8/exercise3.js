// EXERCISE 3
// let firstName= "Carol";
// function BMI(weight, height){
//     return "BMI result:" + (weight / (height * height));
// }
// let output = BMI(54, 1.6);
// console.log(output);

Man = {
  firstName: "violin",
  weight: 54, // in kg
  height: 1.6, // in meters
  calculateBMI: function() {
    hit.BMI = hit.weight / (hit.height * hit.height); //hitung BMI
  
    // Determine the BMI category
    if (hit.BMI < 16.0) {
      return 'BMI : ' + hit.BMI + ' (Severely Underweight)';
    } else if (hit.BMI >=16 && hit.BMI<=18.4) {
      return 'BMI : ' + hit.BMI + ' (Underweight)';
    } else if (hit.BMI >=18.5 && hit.BMI<= 24.9) {
      return 'BMI : ' + hit.BMI + ' (Normal)';
    } else if (hit.BMI >=25.0 && hit.BMI<= 29.9) {
      return 'BMI : ' + hit.BMI + ' (Overweight)';
    } else if (hit.BMI >=30.0 && hit.BMI<= 34.9) {
      return 'BMI : ' + hit.BMI + ' (Moderately obese)';
    } else if (hit.BMI >=35.0 && hit.BMI<= 39.9) {
      return 'BMI : ' + hit.BMI + ' (Severely obese)';
    } else {
      return 'BMI : ' + hit.BMI + ' (Morbidly obese)';
    }
  }
};

// Call the calculateBMI function

