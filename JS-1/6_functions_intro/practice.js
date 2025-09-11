// Tradational function

// function greet(){
//     console.log("Hello!");
// }

// greet();
// greet();


// sum of two numbers

// function sum(a, b){
//     let res = a + b;
//     return res;
// }

// let x = sum(5, 3);
// console.log(x);

 
//-----------------------------------------------------------
//scope of functions

//for => var

// var a = 2;
// console.log(a);  //2

// function one(){
//     console.log(a);  //2
//     var b = 4;
//     console.log(b);  //4
// }

// console.log(b);  //error


// if(true){
//     var c = 6;
//     console.log(c);   //6
// }

// console.log(c);   //6


// function two(){
//     if(true){
//         var d = 8;
//         console.log(d);  //8
//     }

//     console.log(d);  //8
// }



//for => let & const

// let a = 2;
// console.log(a);  //2

// function one(){
//     console.log(a);  //2
//     let b = 4;
//     console.log(b);  //4
// }

// console.log(b);  //error


// if(true){
//     let c = 6;
//     console.log(c);   //6
// }

// console.log(c);   //error


// function two(){
//     if(true){
//         let d = 8;
//         console.log(d);  //8
//     }

//     console.log(d);  //error
// }

