// Assignment 1 — Hello Async/Await

// async function getToDo() {
//     try{
//        let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//        let data = await res.json();
//        console.log(data.title);
//     }catch(err){
//        console.log(err.message);
//     } 
// }
// getToDo();



// Assignment 2 — Convert .then() to async/await (Keep behavior SAME)

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(r => r.json())
//   .then(p => fetch(`https://jsonplaceholder.typicode.com/users/${p.userId}`))
//   .then(r => r.json())
//   .then(u => console.log("Author:", u.name))
//   .catch(e => console.error("Error:", e.message));

// async function getData() {
//     try{
//        let postRes = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//        let post = await postRes.json();
//        let userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
//        let user = await userRes.json();
//        console.log("Author:", user.name);
//     }catch(err){
//        console.log("Error:", err.message);
//     } 
// }
// getData();