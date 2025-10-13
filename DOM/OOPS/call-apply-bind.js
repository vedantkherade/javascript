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





// call, apply and bind
// -----------------------------
function greet(place) {
    console.log(`Hi, I am ${this.name} fom ${place}`);
}

let person1 = {
    name: "Rohit"
}

let person2 = {
    name: "Neha"
}

// 3. bind()
// returns new function
// abhi mat chalao
// let newFun = functionName.bind(thisValue, arg1, arg2)

// let greetRohit = greet.bind(person1, "Pune");
// greetRohit();

// let greetNeha = greet.bind(person2, "Mumbai")
// greetNeha();


// 2. apply()
// direct call with arguments as array
// turant chaloao
// functionName.apply(thisValue, [arg1, arg2, arg3])
// greet.apply(person1, ["Delhi"]);
// greet.apply(person2, ["Mumbai"]);

// 1. call()
// direct call with arguments
// turant chaloao
// functionName.call(thisValue, arg1, arg2, arg3, ...)
// greet.call(person1, "Pune");
// greet.call(person2, "Mumbai");



// activity
// const person = {
//     name: "Ravi"
// }

// function intro(city, country) {
//     console.log(`${this.name} from ${city}, ${country}.`);
// }

// intro("Delhi", "India");
// intro.call(person, "Delhi", "India");
// intro.apply(person, ["Delhi", "India"]);
// const fn = intro.bind(person, "Delhi", "India");
// fn();