// A1: Wallet (Encapsulation)
// class Wallet {
//   // Private field
//   #amount = 0;

//   // Add cash to the wallet
//   addCash(value) {
//     if (typeof value !== "number" || value <= 0) {
//       console.log("Invalid amount");
//       return;
//     }
//     this.#amount += value;
//     console.log(`Added ₹${value}.`);
//   }

//   // Spend cash from the wallet
//   spend(value) {
//     if (typeof value !== "number" || value <= 0) {
//       console.log("Invalid amount");
//       return;
//     }
//     if (value > this.#amount) {
//       console.log("Not enough balance!");
//       return;
//     }
//     this.#amount -= value;
//     console.log(`Spent ₹${value}.`);
//   }

//   // Check balance
//   balance() {
//     return this.#amount;
//   }
// }

// // ✅ Demo code
// const myWallet = new Wallet();
// myWallet.addCash(500);
// myWallet.spend(200);
// console.log("Current balance:", myWallet.balance());



// B1) Device → Phone / Laptop (Method Override)

// B1: Device → Phone/Laptop
// class Device {
//   // TODO: constructor(name)
//   constructor(name){
//     this.name = name;
//   }
//   // TODO: info()
//   info(){
//     console.log(`Name: ${this.name}`);
//   }
  
// }

// class Phone extends Device {
//   // TODO: constructor(name, os)
//   constructor(name, os){
//     super(name);
//     this.os = os;
//   }
//   // TODO: info() // override
//   info(){
//     console.log(`Name: ${this.name} and OS: ${this.os}`);
//   }
  
// }

// class Laptop extends Device {
//   // TODO: constructor(name, ram)
//   constructor(name, ram){
//     super(name);
//     this.ram = ram;
//   }
//   // TODO: info() // override
//   info(){
//     console.log(`Name: ${this.name} and RAM: ${this.ram}`);
//   }
// }

// // TODO: demo with multiple instances

// let d = new Device("Handset");
// d.info();

// let p = new Phone("IPhone", "256GB");
// p.info();

// let l = new Laptop("Asus", "512GB");
// l.info();



// // B2) Employee → Manager / Intern (super + new fields)

// // B2: Employee → Manager/Intern
// class Employee {
//   // TODO: constructor(name)
//   constructor(name){
//     this.name =  name;
//   }
//   // TODO: intro()
//    intro(){
//     console.log(`Employee Name: ${this.name}`);
//   }
// }

// class Manager extends Employee {
//   // TODO: constructor(name, dept)
//   constructor(name, dept){
//     super(name);
//     this.dept = dept;
//   }

//   // TODO: intro() // call super.intro() then log dept
//   intro(){
//     super.intro();
//     console.log(`dept: ${this.dept}`);
//   }
// }

// class Intern extends Employee {
//   // TODO: constructor(name, durationMonths)
//   constructor(name, durationMonths){
//     super(name);
//     this.durationMonths = durationMonths;
//   }
//   // TODO: intro() // customized message
//   intro(){
//     console.log(`Name: ${this.name} and Duration: ${this.durationMonths}`);
//   }
// }

// // TODO: demo all three
// let e = new Employee("Raj");
// e.intro();
// let m = new Manager("Rahul", "IT");
// m.intro();
// let i = new Intern("sourabh", "6m");
// i.intro();



// // B3) Content → Article / Video (Shared + Specific)

// // B3: Content → Article/Video
// class Content {
//   // TODO: constructor(title)
//   constructor(title){
//     this.title = title;
//   }
//   // TODO: details()
//   details(){
//     console.log(`Title: ${this.title}`);
//   }
// }

// class Article extends Content {
//   // TODO: constructor(title, wordCount)
//   constructor(title, wordCount){
//     super(title);
//     this.wordCount = wordCount;
    
//   }
//   // TODO: details() // override
//   details(){
//     console.log(`Aricle: ${this.title}, Content: ${this.wordCount}`);
//   }
// }

// class Video extends Content {
//   // TODO: constructor(title, durationSec)
//   constructor(title, durationSec){
//     super(title);
//     this.durationSec = durationSec;
//   }
//   // TODO: details() // override
//   details(){
//     console.log(`Video: ${this.title}, Duration: ${this.durationSec}`);
//   }
// }

// // TODO: demo list of mixed contents
// let c = new Content("OOPS");
// c.details();
// let a = new Article("Inheritance", "1222");
// a.details();
// let v = new Video("React", 150);
// v.details();



// // C1) Notifier Family (Same method, many forms)

// // C1: Notifier Polymorphism
// class Notifier {
//   // TODO: notify(msg)
//   notify(msg){
//     console.log(`Message ${msg}`)
//   }
// }
// class EmailNotifier extends Notifier {
//   // TODO: notify(msg) // override
//   notify(msg){
//     console.log(`Email sent ${msg}`);
//   }
// }
// class SMSNotifier extends Notifier {
//   // TODO: notify(msg) // override
//   notify(msg){
//     console.log(`SMS sent ${msg}`);
//   }
// }

// // TODO: demo: array of notifiers, call notify in a loop
// const notifiers = [new Notifier(), new EmailNotifier(), new SMSNotifier()];

// notifiers.forEach(n => n.notify("New Update"));


// // for (let n of notifiers) {
// //   n.notify("System update available!");
// // }


// // C2: Transport Fare
// class Transport {
//   // TODO: fare(km) // default
//   fare(km){
//     console.log(`Transport Fare for ${km} km is ₹${km * 5}`);
//   }
// }
// class Bus extends Transport {
//   // TODO: fare(km) // per km
//   fare(km){
//     const ratePerKm = 8;
//     console.log(` Bus fare for ${km} km: ₹${km * ratePerKm}`);
//   }
// }
// class Taxi extends Transport {
//   // TODO: fare(km) // base + per km
//     fare(km) {
//     const baseFare = 50;
//     const ratePerKm = 15;
//     console.log(`Taxi fare for ${km} km: ₹${baseFare + km * ratePerKm}`);
//   }
// }
// class Metro extends Transport {
//   // TODO: fare(km) // slab rules
//    fare(km) {
//     let cost;
//     if (km <= 5) cost = 10;
//     else if (km <= 15) cost = 25;
//     else cost = 40;

//     console.log(`Metro fare for ${km} km: ₹${cost}`);
//   }
// }

// // TODO: demo: mixed transports + km array → loop → log fare
// const rides = [
//   new Bus(),
//   new Taxi(),
//   new Metro()
// ];

// const kms = [10, 7, 20];

// for (let i = 0; i < rides.length; i++) {
//   rides[i].fare(kms[i]);
// }


// // C3) Shape Areas (Override area())
// // C3: Shape Areas
// class Shape {
//   // TODO: area()
//   area(){
//     return 0;
//   }
// }
// class Circle extends Shape {
//   // TODO: constructor(r)
//   constructor(r){
//     super();
//     this.r = r;
//   }
  

//   // TODO: area()
//   area() {
//     return Math.PI * this.r * this.r;
//   }
// }
// class Rectangle extends Shape {
//   // TODO: constructor(w, h)
//    constructor(w, h){
//     super();
//     this.w = w;
//     this.h = h;
//    }
//   // TODO: area()
//   area(){
//     return this.w * this.h;
//   }
// }
// class Triangle extends Shape {
//   // TODO: constructor(b, h)
//   constructor(b, h){
//     super();
//      this.b = b;
//     this.h = h;
//   }

//   // TODO: area()
//    area() {
//     return 0.5 * this.b * this.h;
//   }
  
// }

// // TODO: demo: array of shapes → compute total area
// const shapes = [
//   new Circle(5),
//   new Rectangle(4, 6),
//   new Triangle(10, 8)
// ];


// let total = 0;
// for (let s of shapes) {
//   total += s.area();
// }

// console.log("Total Area =", total.toFixed(2));


// E1) Storage Family (Inheritance + Polymorphism)
// E1: Storage Family
// class Storage {
//   // TODO: save(data)
//   save(data) {
//     console.log("Saving data:", data);
//   }
// }
// class MemoryStorage extends Storage {
//   // TODO: constructor() // internal array
//   // TODO: save(data)
//   constructor() {
//     super();
//     this.items = [];
//   }

//   save(data) {
//     this.items.push(data);
//     console.log("Saved to memory:", data);
//   }
// }
// class FileStorage extends Storage {
//   // TODO: save(data)
//   save(data) {
//     console.log("Saved to file:", data);
//   }
// }

// // TODO: demo: mixed storages saving "hello"
// const storages = [new MemoryStorage(), new FileStorage(), new MemoryStorage()];

// for (let s of storages) {
//   s.save("hello");
// }


// E2) Media Playlist (Polymorphism + Inheritance)
// E2: Media Playlist
class Media {
  // TODO: constructor(title)
  constructor(title){
    this.title = title;
  }
  // TODO: play()
  play(){
   console.log(`Playing Media :${this.title}`);
  }
}
class Song extends Media {
  // TODO: constructor(title)
  constructor(title){
    super(title);
  }
  // TODO: play()
  play(){
    console.log(`Playing Song :${this.title}`);
  }
}
class Video extends Media {
  // TODO: constructor(title)
  constructor(title){
    super(title);
  }
  // TODO: play()
  play(){
    console.log(`Playing Video :${this.title}`);
  }
}

// TODO: demo: playlist array → loop → play()
const playlist = [
  new Song("Shape of You"),
  new Video("Funny Cats"),
  new Song("Believer")
];

for (let item of playlist) {
  item.play(); 
}
