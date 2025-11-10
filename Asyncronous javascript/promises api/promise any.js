// Promise.any()
const cab = (name, time, willArrive) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            willArrive
                ? resolve(`${name} confirmed 🚕`)
                : reject(`${name} canceled ❌`);
        }, time);
    });

let p1 = cab("Ola", 2000, false);
let p2 = cab("Uber", 1500, true);
let p3 = cab("rapido", 1800, true);

Promise.any([p1, p2, p3])
.then((result) => {
    console.log("First confirmed:", result);
})
.catch((err) => {
    console.log(err);
})