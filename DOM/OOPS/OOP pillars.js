// 1. encapsulation (encapsulating data and methods in one unit)
// class BankAccount {
//     #balance = 1000;

//     deposit(amount) {
//         this.#balance += amount;
//     }

//     withdraw(amount) {
//         if(amount <= this.#balance) {
//             this.#balance -= amount;
//         } else {
//             console.log("Insufficient balance");
//         }
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }

// const acc = new BankAccount();
// acc.deposit(500);
// console.log(acc.getBalance());





// 2. inheritance (data/method transfer from parent to child)
// extends
// super()

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`Hi, I am ${this.name}`);
//     }
// }

// class Student extends Person {
//     constructor(name, course) {
//         super(name);
//         this.course = course;
//     }
//     study() {
//         console.log(`${this.name} is studying ${this.course}`);
//     }
// }

// const s1 = new Student("Riya", "MERN Stack");
// s1.study();
// s1.greet();


// 3. polymorphism (one method - many forms)
// class Animal {
//     speak() {
//         console.log("Animal makes a sound");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log("Dog sound!");
//     }
// }

// class Cat extends Animal {
//     speak() {
//         console.log("Cat sound!");
//     }
// }

// const animals = [new Dog(), new Cat(), new Animal()];

// animals.forEach(a => a.speak());



// abstraction (hide complexity, show only what's needed)
// class CoffeeMachine {
//     start() {
//         console.log("Starting the machine..");
//         this.#heatWater();
//         this.#brewCoffee();
//         console.log("Coffee is ready!");
//     }

//     #heatWater() {
//         console.log("Heating water...");
//     }
//     #brewCoffee() {
//         console.log("Brewing coffee...");
//     }
// }

// let c = new CoffeeMachine();
// // c.start();
// // c.#brewCoffee();     //error
