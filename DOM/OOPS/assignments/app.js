// ASSIGNMENT 1

// const person = {
     
//     name: "Rohit",
//     age: 25,

//     setAge(newAge){
//         this.age = newAge;
//     },

//     info(){
//         return this.name + " " + this.age;
//     }
// }

// console.log(person.info());
// person.setAge(30);
// console.log(person.info());


// ASSIGNMENT 2

// function Counter(){
//     this.count = 0;
// }

// Counter.prototype.inc = function(){
//     this.count++;
// }

// Counter.prototype.value = function(){
//     return this.count;
// }

// let c1 = new Counter();
// c1.inc();
// c1.inc();
// console.log(c1.value());


// ASSIGNMENT 4

// const base = {
//     describe: function(){
//         return this.Title = "Title: " + this.Title;
//     }
// }

// const child = Object.create(base);

// child.Title = "My Note";
// console.log(child.describe());


// ASSIGNMENGT 5

// let p = "hello";
// let w = new String("hello");

// console.log(typeof(p));
// console.log(typeof(w));

// String.prototype.lastChar = function(){
//     return this.charAt(this.length-1);
//     // return this.charAt(0);
// }

// console.log(p.lastChar());
// console.log(w.lastChar());


// ASSIGNMENGT 6


// let grand = {
//     g: "one",
// }

// let parent = {
//     p: "two",
// }

// let child = {
//     c: "three",
// }

// child.__proto__ = parent;
// parent.__proto__ = grand;

// console.log(child.g);
// console.log(child.p);
// console.log(child.c);

// parent.color = "blue";
// child.color = "red";

// console.log("parent color", parent.color);
// console.log("child color", child.color);


// ASSIGNMENT 7

// class Person{
//     constructor(name){
//         this.name = name;
//     }

//     hello(){
//         return "Hello " + this.name;
//     }
// }

// Person.prototype.bye = function(){
//     return "Goodbye " + this.name;
// }

// const p1 = new Person("Vedant");

// console.log(p1.hello());
// console.log(p1.bye());


// ASSIGNMENT 8

function Car(kind){
    this.kind = kind;
}

Car.prototype.sound = function(){
    return `${this.kind} runs on road`;
}