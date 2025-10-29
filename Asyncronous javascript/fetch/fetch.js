// fetch
// to make http request

// fetch("http://jsonplaceholder.typicode.com/users")
// .then((res) => {
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })



// fetch("http://jsonplaceholder.typicode.com/users")
// .then((res) => {
//     return res.json();
// })
// .then((data) => {
//       const userList = document.getElementById("userList");
//     data.forEach(user => {
//         let li = document.createElement("li");
//         li.textContent = `${user.id} - ${user.name} - ${user.email}`;
//         userList.appendChild(li);

//     })
// })
// .catch((err) => {
//     console.log(err);
// })



fetch("https://api.quotable.io/random")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
