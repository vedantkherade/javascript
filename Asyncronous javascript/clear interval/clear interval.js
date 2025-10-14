// let count = 0;

// let time = setInterval(() => {
//    count++;
//    console.log(`Count: ${count}`);

//    if(count == 5){
//     clearInterval(time);
//     console.log("Time Stopped!!");
//    }
// }, 1000);




let count = 0;

function repeat(){
   count++;
   console.log(`Count: ${count}`);

   setTimeout(repeat, 1000);
}

repeat();