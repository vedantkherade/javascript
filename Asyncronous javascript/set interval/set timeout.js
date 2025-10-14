let timeElem = document.getElementById("time");

setInterval(() => {
    let x = new Date();
    timeElem.textContent = x.toLocaleTimeString();
}, 1000);