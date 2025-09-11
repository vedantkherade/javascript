
//object
//key-value pair

// let person = {
//    name:"vedant",
//    age: 22,
//    place: "pune",
//    1: 1000
//    greet: function(){
//     return "Hello"
//    }
// }


// console.log(person);
// console.log(person.name);  //vedant
// console.log(person.age);   //22
// console.log(person["place"]);  //pune

// console.log(person[1]);  //1000

// let p = "place";
// console.log(person[p]);  //pune

// person.name = "Raj";
// console.log(person);  //updated name in object

// person.email = "raj@123";
// console.log(person);    //to add a key

// let x = person.greet();
// console.log(x);      //accessing a function in object




// console.log(Object.keys(person));   //to get the keys
// console.log(Object.values(person));   //to get the values
// console.log(Object.entries(person));    //to get the entries


//for in loop for accessing elements
// for(let key in person){
//     console.log(person[key]);
// }









//another way to define the object
// let obj = new Object();
// obj.name = "Raj";
// obj.age = 26;




//dot notation => for exact properties names

//[] notation => for literals and variables


//destructuring

//array destructuring
// let arr = [100, 200, 300, 400];
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
// let four = arr[3];

// let [one, two, three, four, five=500] = arr;
// console.log(one, two, three, four, five);



//object destructuring
// let person = {
//     name: "Ankit",
//     age: 26,
//     //place: "Pune"
// }

// let name = person.name;
// let age = person.age;
// let place = person.place;

// let {name, age, place} = person
// console.log(name,age,place);

// let {name:myName, place="Mumbai"} = person;
// console.log(myName, place);



//spread operator (...)
// let arr1 = [2, 4, 6];
// let a = [1, 2, 2];
// //let arr2 = arr1;
// let arr2 = [...arr1, ...a];
// arr1[0] = 100;
// console.log(arr1);
// console.log(arr2);



//rest operator (...)
// function sum(...numbers){

// }

// console.log(sum(3, 2, 5, 3, 7));

// let obj1 = {a: 1, b: 2};
// let obj2 = {b: 3, c: 4};
// let merged = {...obj1, ...obj2};
// console.log(merged);    //{ a: 1, b: 3, c: 4 }


// let [first, ...rest] = [1, 2, 3, 4];
// console.log(first)  //1
// console.log(rest)   //[2, 3, 4]

// let user = {name: "Alice", age:25, city: "Mumbai"};
// let{name, ...rest} = user;
// console.log(name);  //Alice
// console.log(rest);  //{ age: 25, city: 'Mumbai' }



// //map
// let m1 = new Map();
// m1.set("name", "Raj");
// m1.set("age", 26);
// m1.set("place", "pune");
// console.log(m1);
// console.log(m1.get("age"));

// console.log(m1.has("email"));


//traversing
// for(let [key, value] of m1){
//     console.log(key, value);
// }


// m1.forEach((value, key) => {
//     console.log(key, value);
// })

// keys();
// values();
// entries();



//json
// let user = {
//     name: "Harsh",
//     age: 26,
//     city: "pune"

// }

// let x = JSON.stringify(user);
// console.log(x);

// let y = JSON.parse(x);
// console.log(y);