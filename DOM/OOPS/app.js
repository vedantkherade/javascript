// 1. object literal

// let user = {
//     firstName: "Rohit",
//     lastName: "Shah",
//     contact: "55555",

//     getName: function(){
//         console.log(this.firstName, this.lastName);
//     },
// }

// user.getName();


// let user2 = {
//     firstName: "Amit",
//     lastName: "Mehta",
//     contact: "88888",

//     getName: function() {
//         console.log("Rohit Shah");
//     },
// }

// user2.getName();
// user.getContact();

// console.log(user2.firstName);

// let myContact = "contact";

// console.log(user2["firstName"]);



// 2. constructor function

// function User(firstName, lastName, contact){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.contact = contact;
// }

// let user1 = new User("Rohit", "Shah", "5555555");
// let user2 = new User("Jenil", "Gupta", "8989999");
// console.log(user1);
// console.log(user1.firstName);
// console.log(user2);
// console.log(user2.contact);



// 3. classes

// class User {
//     constructor(firstName, lastName, contact){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.contact = contact;
//     }

//     getName() {
//         console.log(this.firstName, this.lastName);
//     }
// }

// const user1 = new User("Rohit", "Shah", "55555");
// console.log(user1);
// console.log(user1.contact);



// prototypes


// let user1 = {
//     firstName: "Rohit",
//     lastName: "Shah",
//     contact: "555555"
// }

// // let user2 = {
// //     firstName: "Amit",
// //     lastName: "Gupta",
// //     contact: "5486561"
// // }

// let user2 = Object.create(user1);

// console.log(user2);

// console.log(user1.firstName);
// console.log(user2.firstName);

// console.log(user1.__proto__);
// console.log(user2.__proto__);


// let str = "Learning is fun";
// console.log(str.__proto__.__proto__.__proto__);

// let n = 4;
// console.log(n.__proto__);

// let str2 = new String("Another string");

// // String
// // Boolean
// // Number

// // Wrapper classes

// str.__proto__ = String.prototype

// let u1 = {
//     x1: "inside u1"
// }

// let u2 = {
//     x2: "inside u2",
//     __proto__: u1
// }

// let u3 = {
//     x3: "inside u3",
//     __proto__: u2
// }

// console.log(u3.x1);



// class User{
//     constructor(firstName){
//         this.firstName = firstName;
//     }
// }

// let u1 = new User("Jay");
// console.log(u1);
// console.log(u1.__proto__);