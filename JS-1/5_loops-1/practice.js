//for loop

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);//lengthy process

// for(initialization; condition; incre/decre){
//     body
// }


// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }


//while loop
// let i = 1;
// while(i <= 5){
//     console.log(i)
//     i++;
// }

//do while loop

// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);





//2
// for(let i = 1; i<= 10; i++){
//     console.log(`Square of ${i} is ${i*i}`);
// }


//3
// let sum = 0;
// for(let i = 2; i <= 50; i=i+2){
//     sum = sum + i;  
// }
// console.log(sum);


//4
// let level = 10;
// while(level <= 100){
//     console.log(`Battery at ${level}%`);
//     level += 10;
// }


//6
// let count = 10;
// while (count > 0){
//     console.log(count);
//     count--;
// }
// console.log("Time's up!");



//1
// let n = 7;
// for(let i = 1; i <= 10; i++){
//     console.log(`${n} x ${i} = ${n * i}`);
// }


//3 sum of digits
// let num = 1234;
// let sum = 0;

// while(num != 0){
//     let rem = num % 10;
//     sum = sum + rem;
//     num = Math.floor(num / 10);
// }
// console.log(sum);



//4 print all characters in string one by one
// let string = "HELLO";

// for(i = 0; i < string.length; i++){
//     console.log(string[i]);
// }


//5 factorial of a number
// let num = 5;
// let fact = 1;

// for(let i = 1; i <= num; i++){
//     fact = fact * i;
// }
// console.log(fact);


//7 count how many numbers betn 1to50 are divisible by 7
// let count = 0;
// for(i = 1; i <= 50; i++){
//  if(i % 7 == 0){
//     count += 1;
//  }
// }
// console.log(count);


//1 Reverse a given number and check whether it is a palindrome
// let n = 121;
// let original = n;
// let reverse = 0,rem;

// while(n != 0){
//    rem = n % 10;
//    reverse = reverse * 10 + rem;
//    n = Math.floor(n / 10);
// }
// console.log("Reversed Num: ",reverse);

// if(original == reverse){
//    console.log("Palindrome");
// }else{
//    console.log("Not a Palindrome");
// }

