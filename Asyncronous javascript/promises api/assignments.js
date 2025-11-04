// Assignment 1

// function task(name, ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`${name} done in ${ms} ms`);
//     }, ms);
//   });
// }

// let p1 = task("A", 1200);
// let p2 = task("B", 800);
// let p3 = task("C", 1500);

// Promise.all([p1, p2, p3])
// .then((results) => {
//   console.log(results); 
//   console.log("All tasks finished");
// })
// .catch((err) => {
//   console.log("Error:", err);
// });


// Assignment 2

// function task(name, ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`${name} done in ${ms} ms`);
//     }, ms);
//   });
// }

// let p1 = task("T1", 200);
// let p2 = task("T2", 1200);
// let p3 = task("T3", 600);

// Promise.all([p1, p2, p3])
// .then((results) => {
//   console.log(results); 
//   console.log(`First result is: ${results[0]}`);
// })
// .catch((err) => {
//   console.log("Error:", err);
// });


// Assignment 3

// function convert(n, ms){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(n * 2);
//         }, ms)
//     })
// }

// const nums = [3, 5, 9, 10];

// Promise.all(nums.map(num => convert(num, 300)))
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.log();
//   })


// Assignment 4

function okAfter(ms){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`OK after ${ms}`);
        }, ms)
    })
}

function failAfter(ms){
    return new Promise((_,reject) => {
        setTimeout(() => {
            reject(`Fail after ${ms}`);
        }, ms)
    })
}

Promise.all([okAfter(500), failAfter(800), okAfter(400)])
    .then((result) => {
       console.log("✅ Success:", result);
    })
    .catch((err) => {
       console.log("❌ Error:", err);
    });