//  Assignment 1

// function checkStock(product) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (product === "laptop" || product === "phone") {
//         resolve(`In stock: ${product}`);
//       } else {
//         reject(`Out of stock: ${product}`);
//       }
//     }, 1000);
//   });
// }

// // ✅ For laptop (success)
// checkStock("laptop")
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Stock check complete"));

// // ❌ For tablet (error)
// checkStock("tablet")
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Stock check complete"));


//   Assignment 2

// function createAccount() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Account created");
//       resolve(1); // userId
//     }, 1000);
//   });
// }

// function fetchUserProfile(userId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const profile = { id: userId, name: "Jay" };
//       console.log("Profile loaded for", profile.name);
//       resolve(profile);
//     }, 1000);
//   });
// }

// function showWelcomeScreen(profile) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const message = `Welcome ${profile.name}!`;
//       console.log(message);
//       resolve(message);
//     }, 1000);
//   });
// }

// // Chain them
// createAccount()
//   .then(fetchUserProfile)
//   .then(showWelcomeScreen)
//   .catch((err) => console.log("Error:", err))
//   .finally(() => console.log("Onboarding flow complete"));


//   Assignment 3
// function runStep(stepName) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(stepName);
//       resolve();
//     }, 1000);
//   });
// }

// runStep("Step 1: Preparing cart")
//   .then(() => runStep("Step 2: Processing payment"))
//   .then(() => runStep("Step 3: Generating invoice"))
//   .then(() => runStep("Step 4: Sending email receipt"))
//   .then(() => console.log("Order complete ✅"));



// Assignment 4
// Function definition
function submitFeedback(formData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!formData.message) {
        reject("Message is required");
      } else {
        resolve(`Thanks ${formData.name}, your feedback was submitted!`);
      }
    }, 1500);
  });
}

// ✅ Valid data
submitFeedback({ name: "Vedant", message: "Great website!" })
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .finally(() => console.log("Feedback request finished"));

// ❌ Invalid data (empty message)
submitFeedback({ name: "Vedant", message: "" })
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .finally(() => console.log("Feedback request finished"));
