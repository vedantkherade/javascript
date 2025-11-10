// Promise.allSettled()

// example - 1
// const p1 = Promise.resolve("✅ User loaded");
// const p2 = Promise.reject("❌ Posts failed");
// const p3 = Promise.resolve("✅ Comments loaded");


// Promise.allSettled([p1, p2, p3])
// .then((results) => {
//     // console.log(results);
//     results.forEach((result) => {
//         if(result.status === "fulfilled") {
//             console.log(result.value);
//         } else {
//             console.log(result.reason);
//         }
//     })
// })





// example - 2
const orderPizza = (name, time, shouldFail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            shouldFail ? reject(`${name} failed ❌`) : resolve(`${name} arrived 🍕`);
        }, time);
    });
};

const dominos = orderPizza("Dominos", 2000, false);
const pizzaHut = orderPizza("Pizza Hut", 1500, true);
const mojo = orderPizza("Mojo", 1000, false);

Promise.allSettled([dominos, pizzaHut, mojo])
.then((results) => {
    let arrived = results.filter((result) => {
        return result.status === "fulfilled"
    })
    .map((result) => {
        return result.value
    })

    let failed = results.filter((result) => {
        return result.status === "rejected"
    })
    .map((result) => {
        return result.reason
    })

    console.log("Arrived", arrived);
    console.log("Failed", failed);
})

// arrived : [Dominos arrived, Mojo arrived]
// not-arrived : [Pizza Hut Failed]