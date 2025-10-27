// What is a Promise?
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation.

// It acts as a placeholder for a future value — like when you order food online 🍕:
// - You place the order (the request starts),
// - The restaurant is preparing it (operation in progress), -> pending
// - Finally, it gets delivered (operation finished). -> fulfil
// -> reject

// Promise Constructor
// let fileUpload = new Promise((resolve, reject) => {
//     let uploadSpeed = 30;   //mbps

//     console.log("Uploading a file");
//     setTimeout(() => {
//         if(uploadSpeed > 50) {
//             resolve("File uploaded successfully ✅")
//         } else {
//             reject("File upload failed due to slow internet! ❌")
//         }
//     }, 2000)
// });

// fileUpload
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("File upload process finished!");
//     })

// let transaction = new Promise((resolve, reject) => {
//     let balance = 5000;
//     let amount = 3000;

//     console.log("Transaction being processed...");
//     setTimeout(() => {
//         if(balance >= amount) {
//             resolve("Transaction sucessful ✅")
//         } else {
//             reject("Insufficinet balance ❌")
//         }
//     }, 2000);
// });

// transaction
//      .then((msg) => {
//         console.log(msg);
//      })
//      .catch((err) => {
//         console.log(err);
//      })
//      .finally(() => {
//         console.log("Transaction completed!");
//      })

// // promise chaining

// // login
// // fetch user detail
// // render dashboard
// new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("step 1: user logged in 👤")
//     }, 1500)
// })
// .then((msg) => {
//     console.log(msg);
//     return "step 2: fetched user detail 📦"
// })
// .then((msg) => {
//     console.log(msg);
//     // throw new Error("error message...");
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("step 3: rendered user dashboard 🖥️")
//         }, 1000);
//     })
// })
// .then((msg) => {
//     console.log(msg);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log("rendering dashboard process completed!");
// })



// // callback hell
// loginUser("jay@example.com", "1234", function (user) {
//   console.log("1️⃣ User logged in:", user);

//   getUserProfile(user.id, function (profile) {
//     console.log("2️⃣ User profile loaded:", profile);

//     getUserOrders(profile.id, function (orders) {
//       console.log("3️⃣ Orders fetched:", orders);

//       showDashboard(orders, function () {
//         console.log("4️⃣ Dashboard shown!");
//       });
//     });
//   });
// });



// // promises
// function loginUser(email, password) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 1, email });
//     }, 1000);
//   });
// }

// function getUserProfile(userId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: userId, name: "Jay", age: 26 });
//     }, 1000);
//   });
// }

// function getUserOrders(profileId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(["Order-101", "Order-102", "Order-103"]);
//     }, 1000);
//   });
// }

// function showDashboard(orders) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Dashboard displaying orders:", orders);
//       resolve("Dashboard Ready ✅");
//     }, 1000);
//   });
// }



// //step 2 - chaining them
// loginUser("jay@example.com", "1234")
//   .then((user) => {
//     console.log("1️⃣ User logged in:", user);
//     return getUserProfile(user.id);
//   })
//   .then((profile) => {
//     console.log("2️⃣ User profile loaded:", profile);
//     return getUserOrders(profile.id);
//   })
//   .then((orders) => {
//     console.log("3️⃣ Orders fetched:", orders);
//     return showDashboard(profile.id);
//   })
//   .then((dashboardMsg) => {
//     console.log("4️⃣", dashboardMsg);
//   })
//   .catch((error) => {
//     console.error("❌ Error:", error);
//   })
//   .finally(() => {
//     console.log("All done✅");
//   });


// example 2 - callback hell to promise chain
// setTimeout(() => {
//   console.log("1️⃣ Step 1 done");
//   setTimeout(() => {
//     console.log("2️⃣ Step 2 done");
//     setTimeout(() => {
//       console.log("3️⃣ Step 3 done");
//     }, 1000);
//   }, 1000);
// }, 1000);


// promise version
// function step(msg){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//           console.log(msg);
//           resolve();
//         },1000)
//     })
// }

// step("1️⃣ step 1 done")
//    .then(() => step("2️⃣ step 2 done"))
//    .then(() => step("3️⃣ step 3 done"))
//    .then(() => console.log("✅ All steps completed"));