// 📝 Assignment 1 – Queue Simulation

// let customers = 3;

// for (let i = 1; i <= customers; i++) {
//   console.log("Serving Customer " + i);
// }

// console.log("All tickets sold!");



// 📝 Assignment 2 – Blocking Example

// function longTask(){
//     for(let i=0; i<2e9; i++){

//     }
//     console.log("task finished");
// }

// console.log("start");
// longTask();
// console.log("done");


// 📝 Assignment 3 – Async Fix

// function longTask() {
//   setTimeout(() => {
//     for (let i = 0; i < 2e9; i++) {}
//     console.log("task finished");
//   },0);
// } 

// console.log("start");
// longTask();
// console.log("done");


// 🧩 Assignment 4 – Countdown Timer

// let count = 5;

// function countDown(){
//         console.log(count);
//         count--;

//         if(count > 0){
//             setTimeout(countDown, 1000);
//         }else{
//             setTimeout(() =>{
//                 console.log("Go!!");
//             }, 1000)
//         }
// }

// countDown();



// 🧩 Assignment 5 – Event Loop Order

// console.log("Start");

// setTimeout(() => console.log("A"), 1000);
// setTimeout(() => console.log("B"), 0);

// console.log("End");



// 🧩 Assignment 6 – Cancel the Plan

// let meeting = setTimeout(() => {
//     console.log("Meeting starts now!!");
// },3000);

// let cancelBtn = document.getElementById("cancelBtn");
// cancelBtn.addEventListener("click", () => {
//     clearTimeout(meeting);
//     console.log("Meeting cancelled!!")
// })


// 🧩 Assignment 8 – Digital Clock

// let timeElem = document.getElementById("time");

// setInterval(() => {
//     let x = new Date();
//     timeElem.textContent = x.toLocaleTimeString();
// }, 1000);


// 🧩 Assignment 9 – Stop After 10 Seconds

// let count = 0;

// let timer = setInterval(() => {
//     count++;
//     console.log("Tick...");

//     if(count == 10){
//         clearInterval(timer);
//         console.log("Time Stopped after 10 sec!!");
//     }

// }, 1000);