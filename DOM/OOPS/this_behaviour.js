// 1. normal function call
// "use strict";

// function greet() {
//     console.log(this);
// }

// greet();


// 2. method inside an object
// let user = {
//     name: "Jay",
//     showName() {
//         console.log(this.name);
//     }
// }

// user.showName();


// 3. constructor
// function Student(name) {
//     this.name = name;
// }

// let s1 = new Student("Aman");
// console.log(s1.name);



// 4. inside event listener
// button.addEventListener("click", function() {
//     console.log(this);  //the button
// });

// button.addEventListener("click", () => {
//     console.log(this);  //window
// })


// 5. class methods
// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//     show() {
//         console.log(this.name);
//     }
// }

// let c = new Car("BMW");
// c.show();



// arrow function
// function normalFun() {
//     console.log(this);
// }

// const arrowFun = () => {
//     console.log(this);
// }

// normalFun();
// arrowFun();



// let obj = {
//     name: "Rohit",
//     normal: function() {
//         console.log(this);
//     },
//     arrow: () => {
//         console.log(this);
//     }
// }

// obj.normal();
// obj.arrow();





