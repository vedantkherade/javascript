// Assignment 1 — All pizzas must arrive (Promise.all)

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

// Promise.all([dominos, pizzaHut, mojo])
//   .then((result) => {
//     console.log(result);
//     console.log("All pizza arrived");
//   })
//   .catch((err) => {
//     console.log(err);
//   })


// Assignment 2 — One failure cancels all (Promise.all)

// let p1 = Promise.resolve("OK 1");
// let p2 = Promise.reject("Fail 2");
// let p3 = Promise.resolve("OK 3");
// let p4 = Promise.reject("Fail 4");

// Promise.all([p1, p2, p3, p4])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("Caught:", err);
//   })


// Assignment 3 — Multiple fetch and JSON parse (Promise.all + map)

// const userData = fetch("https://jsonplaceholder.typicode.com/users/1");
// const postData = fetch("https://jsonplaceholder.typicode.com/posts/1");
// const commentData = fetch("https://jsonplaceholder.typicode.com/comments/1");

// Promise.all([userData, postData, commentData])
//     .then((responses) => {
//         return Promise.all(responses.map((r) => {
//             return r.json();
//         }))
//     })
//     .then((data) => {
//         console.log("User", data[0]);
//         console.log("Post", data[1]);
//         console.log("Comment", data[2]);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// Assignment 4 — Parallel vs Sequential (fakeAPI)

// function fakeAPI(name, delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(name + " completed");
//       resolve(name);
//     }, delay);
//   });
// }

// // parallel
// Promise.all([
//   fakeAPI("Task 1", 1500),
//   fakeAPI("Task 2", 1000),
//   fakeAPI("Task 3", 500)
// ])
// .then(() => {
//   console.log("✅ All done (Parallel)");
// });


// //sequential

// fakeAPI("Task 1", 1500)
//   .then(() => fakeAPI("Task 2", 1000))
//   .then(() => fakeAPI("Task 3", 500))
//   .then(() => {
//     console.log("✅ All done (Sequential)");
//   })


// Assignment 5 — Race: fastest success wins (Promise.race)

// function fakeAPI(name, time){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${name} resolved`);
//         }, time)
//     })
// }
// let p1 = fakeAPI("Promise 1", 2000);
// let p2 = fakeAPI("Promise 2", 700);
// let p3 = fakeAPI("Promise 3", 1200);

// Promise.race([p1, p2, p3])
//  .then((result) => {
//     console.log("First resolved :", result);
//  })
//  .catch((err) => {
//     console.log(err);
//  })


// Assignment 6 — Race with rejection (Promise.race)

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data OK");
//   }, 2500);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Network Error");
//   }, 900);
// });

// Promise.race([p1, p2])
//   .then((result) => {
//     console.log("Race resolved with:", result);
//   })
//   .catch((error) => {
//     console.log("Race rejected with:", error);
//   });


// Assignment 7 — API timeout using race (Promise.race)

// function timeout(ms){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           reject("Request timed out");
//         }, ms)
//     })
// }

// function fakeAPI(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//           resolve("Data received");
//         }, 1800)
//     })
// }

// Promise.race([timeout(1200), fakeAPI()])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err)=> {
//     console.log(err);
//   })


// Assignment 8 — Pizza arrivals report (Promise.allSettled)

const orderPizza = (name, time, shouldFail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            shouldFail
                ? reject(`${name} failed ❌`)
                : resolve(`${name} delivered in ${time / 1000}s 🍕`);
        }, time);
    });
};

const dominos = orderPizza("Dominos", 1400, false);
const pizzaHut = orderPizza("Pizza Hut", 900, true);
const mojo = orderPizza("Mojo", 600, false);

Promise.allSettled([dominos, pizzaHut, mojo])
.then((results) => {
    // console.log(result);
    let arrived = results.filter((result) => {
        return result.status == "fulfilled";
    })
    .map((result) => {
        return result.value;
    })

     let failed = results.filter((result) => {
        return result.status == "rejected";
    })
    .map((result) => {
        return result.reason;
    })

    console.log("Arrived",arrived);
    console.log("Failed",failed);
})
