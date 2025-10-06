

// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("three");
// }, 3000);
// console.log("four");
// 200 lines (sync)


// output
// -------------
// one
// two
// four
// three

// let arr = [2, 4, 6];

// arr.forEach((elem) => {
//     console.log(elem);
// });





// callback
// function fetchData(url, callback) {
//     setTimeout(() => {
//         let data = {message: "here is data required"};
//         callback(data);
//     }, 2000);
// }

// function handleData(data) {
//     console.log(data);
// }

// fetchData("example.com/data", handleData);



// promise
// function fetchData(url) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let data = {message: "here is data required"};
//             if(data) {
//                 resolve(data);
//             } else {
//                 reject(new Error("Error fetching the data"));
//             }
//         }, 2000);
//     });
// }

// then and catch
// fetchData("example.com.data")
// .then((data) => {
//     console.log(data.message);
// })
// .catch((error) => {
//     console.log(error);
// })

// async await
// async function printData() {
//     try {
//         let data = await fetchData("example.com/data");
//         console.log(data.message);
//     } catch(error) {
//         console.log(error);
//     }
// }

// printData();


// fetch
// then and catch for fetch
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => {
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })
 
// async await for fetch


// async function getData() {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     console.log(data);
// }
// getData();