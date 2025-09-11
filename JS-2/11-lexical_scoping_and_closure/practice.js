// lexical Scoping

// example
// function outer(){
//     let name = "Ujjwal";

//     function inner(){

//         console.log(name);  //inner can access name from outer
//     }

//     inner();
// }

// outer();




// closure

// example

// function outer(){
//     let counter = 0;

//     return function inner(){
//         counter++;
//         console.log(counter);
//     };
// }

// const count = outer(); // outer is called, inner is returned and assigned to count
// count(); // 1
// count(); // 2
// count(); // 3


// error handling

// let result = 10 / 0;

// let total = price * quantity;  // But price is not defined!


// 1. try...catch – Catch and Handle Errors
// Example 1: Using an undefined variable

// try {
//   let total = price * 5;  // price is not declared
//   console.log("Total:", total);
// } catch (error) {
//   console.log("Something went wrong!");
//   console.log("Error message:", error.message);
// }


// 2. finally – Code That Always Runs
// Example 2: Cleaning up after an error

// try {
//   let marks = [90, 85, 100];
//   console.log(marks[5].toString());  // undefined.toString() = error
// } catch (error) {
//   console.log("Caught error:", error.message);
// } finally {
//   console.log("This line runs no matter what.");
// }



// 3. throw – Create Your Own Errors
// Example 3: Custom error for invalid age

// function checkAge(age) {
//   if (age < 0) {
//     throw new Error("Age cannot be negative");
//   }
//   console.log("Valid age:", age);
// }

// try {
//   checkAge(-5);
// } catch (error) {
//   console.log("Caught:", error.message);
// }





// reduce

// let arr = [2, 4, 6, 8];

// let res = arr.reduce((acc, elem) =>{
//     return acc + elem;
// }, 0);
// console.log(res);


// let res = arr.reduce((a, c) => a + c, 0);
// console.log(res);


// let res = arr.reduce((a, c) => a * c, 1);
// console.log(res);


// let res = arr.reduce((a, c) => a * c, 1);
// console.log(res);


// let res = arr.reduce((a, c) => c > a ? c : a);
// console.log(res);