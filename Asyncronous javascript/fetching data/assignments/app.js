//3. print each element and find the total sum using forEach.

// const arr = [2, 4, 6, 8];
// TODO: Use forEach to print value + index
// TODO: Find and print total sum

// let sum = 0;
// arr.forEach((elem, index) => {
//    console.log(index, elem);
//    sum += elem;
// })
// console.log(sum);

//4. Build Your Own forEach (Callback Practice)
// Create applyToEach(arr, cb) that calls cb(value, index) for each item.

// function applyToEach(arr, cb) {
//   // TODO: Run cb for each element of arr
//   for(let i=0; i<arr.length; i++){
//     cb(arr[i], i);
//   }
// }

// applyToEach([10, 20, 30], (v, i) => {
//   console.log(i, v);
// });

//5. Callback Example
// Use a callback to simulate data fetching with setTimeout.

// function fetchData(url, callback) {
//   // TODO: After 800ms, call callback with { message: "hello world" }
//   setTimeout(() =>{
//     let data = {message: "hello world"};
//     callback(data);
//   },8000);
// }

// function handleData(data) {
//   // TODO: Print data.message in uppercase
//   console.log((data.message).toUpperCase());
// }

// fetchData("example.com", handleData);

//6. Create a Promise (Resolve / Reject)
// If id >= 1 → resolve {id, name}
// Else → reject with an error.

// function getUser(id) {
//   // TODO: Return a Promise with setTimeout(700ms)
//   return new Promise((resolve, reject) => {
//       setTimeout(() =>{
//         let data = {message: "here is data required"};
//         if(id >= 1){
//             resolve({id: id, name: "user" + id});
//         }else{
//             reject((new Error("Invalid user id")));
//         }
//       }, 2000);
//   })
// }

// getUser(1)
//   .then(u => console.log("OK:", u))
//   .catch(e => console.log("ERR:", e.message));

// getUser(0)
//   .then(u => console.log("OK:", u))
//   .catch(e => console.log("ERR:", e.message));

// 9. Fetch (then/catch)
// 👉 https://jsonplaceholder.typicode.com/users
// Then print only the user names.

// TODO: fetch -> res.json() -> get names using map()
// TODO: print names or handle error using .catch

// fetch("https://jsonplaceholder.typicode.com/users")

// .then((res) => {
//     return res.json();
// })

// .then(data => {
//     let names = data.map(user => user.name);
//     console.log("User Names:" , names)
// })

// .catch(error =>{
//     console.log("Error", error.message);
// });



//10. Fetch (async/await)

// Print the total count and the first user’s email.

// async function getInfo() {
//   // TODO: fetch -> await res.json()
//   // TODO: print count and first email

//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     console.log("Total users:", data.length);
//     console.log("first user email:", data[0].email);
//   } catch (error) {
//     console.log("Error", error.message);
//   }
// }
// getInfo();
