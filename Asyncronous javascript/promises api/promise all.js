

// Promise.all()
// Promise.any()




// Promise.all()

// function orderPizza(name, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${name} arrived`);
//         }, time)
//     })
// }

// let p1 = orderPizza("Dominos", 2000);
// let p2 = orderPizza("Pizza Hut", 3000);
// let p3 = orderPizza("Mojo", 1500);

// Promise.all([p1, p2, p3])
// .then((results) => {
//     console.log(results);
//     console.log("All pizza arrived");
// })
// .catch((err) => {
//     console.log(err);
// })





// const p1 = Promise.resolve("Success 1");
// const p2 = Promise.reject("Failed 2");
// const p3 = Promise.resolve("Success 3");
// const p4 = Promise.reject("Failed 4");

// Promise.all([p1, p2, p3, p4])
// .then((results) => {
//     console.log(results);
// })
// .catch((err) => {
//     console.log(err);
// })


// const userData = fetch("https://jsonplaceholder.typicode.com/users/1");
// const postData = fetch("https://jsonplaceholder.typicode.com/posts/1");
// const commentData = fetch("https://jsonplaceholder.typicode.com/comments/1");

// Promise.all([userData, postData, commentData])
//     .then((responses) => {
//         return Promise.all(responses.map((res) => {
//             return res.json()
//         }))
//     })
//     .then((data) => {
//         console.log("User: ", data[0])
//         console.log("POst: ", data[1]);
//         console.log("Comment: ", data[2]);
//     })
//     .catch((err) => {
//         console.log(err);
//     })



// parallel
function fakeAPI(name, delay) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(name + " completed");
      resolve(name);
    }, delay);
  });
}

Promise.all([
  fakeAPI("Task 1", 2000),
  fakeAPI("Task 2", 3000),
  fakeAPI("Task 3", 1000)
])
.then(function() {
  console.log("✅ All done (Parallel)");
});


//sequential
// function fakeAPI(name, delay) {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       console.log(name + " completed");
//       resolve(name);
//     }, delay);
//   });
// }

// fakeAPI("Task 1", 2000)
//   .then(() => fakeAPI("Task 2", 3000))
//   .then(() => fakeAPI("Task 3", 1000))
//   .then(() => {
//     console.log("✅ All done (Sequential)");
//   })