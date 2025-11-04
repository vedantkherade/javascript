
// Promise.race()

// example - 1
// const p1 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 1"), 2000));
// const p2 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 2"), 1000));
// const p3 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 3"), 3000));

// Promise.race([p1, p2, p3])
// .then((result) => {
//     console.log("First resolved", result);
// })
// .catch((err) => {
//     console.log(err);
// })




// example - 2
// const p1 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 1"), 2000));
// const p2 = new Promise((resolve, reject) => setTimeout(() => reject("🏆 Promise 2 failed"), 1000));
// const p3 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 3"), 3000));

// Promise.race([p1, p2, p3])
// .then((result) => {
//     console.log("First completed", result);
// })
// .catch((err) => {
//     console.log(err);
// })



// example - 3
// const pizzaDelivery = (name, time, shouldFail) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             shouldFail
//                 ? reject(`${name} failed ❌`)
//                 : resolve(`${name} delivered in ${time / 1000}s 🍕`);
//         }, time);
//     });
// };

// const dominos = pizzaDelivery("Dominos", 3000, false);
// const pizzaHut = pizzaDelivery("Pizza Hut", 2000, false);
// const mojo = pizzaDelivery("Mojo", 1000, false);

// Promise.race([dominos, pizzaHut, mojo])
//   .then((result) => {
//     console.log("First arrived:", result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })




// API Timeout

// // Timeout promise
// const timeout = (ms) => new Promise((resolve, reject) => {
//     setTimeout(() => reject("⏰ Request timed out!"), ms);
// });

// // Fake API request
// const fakeAPI = new Promise(resolve => {
//     setTimeout(() => resolve("✅ Data received successfully"), 2000);
// });

// // Run race between API & timeout
// Promise.race([fakeAPI, timeout(1000)])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })




// predict output - 1
// const fast = new Promise(resolve => setTimeout(() => resolve("🚀 Fast"), 1000));
// const medium = new Promise(resolve => setTimeout(() => resolve("🚗 Medium"), 2000));
// const slow = new Promise(resolve => setTimeout(() => resolve("🐢 Slow"), 3000));

// Promise.race([fast, medium, slow])
//   .then(res => console.log("Winner:", res));





// predict output - 2
// const p1 = new Promise(resolve => setTimeout(() => resolve("✅ Success"), 3000));
// const p2 = new Promise((_, reject) => setTimeout(() => reject("❌ Error"), 1000));

// Promise.race([p1, p2])
//     .then(result => console.log("Result:", result))
//     .catch(error => console.log("Caught:", error));
