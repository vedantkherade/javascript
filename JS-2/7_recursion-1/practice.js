//recursion
//function calls itself until it reaches to a base case/condition

//1. print decreasing numbers

// function pd(n){
//     if(n == 0){
//         return;
//     }
//     console.log(n);
//     pd(n-1);
// }
// pd(5);


//2. print increasing numbers

// function pi(n){
//     if(n == 0){
//         return;
//     }
//     pi(n-1);
//     console.log(n); 
// }
// pi(5);

//3. print decreasing and increasing numbers
// function pdpi(n){
//     if(n == 0){
//         return
//     }
//     console.log(n);
//     pdpi(n-1);
//     console.log(n);
// }
// pdpi(5);


//Note : 
// ==> Wnen some code is written before recursive function call, it gets executed going upward in the stack.
// ==> When some code is written after recursive function call, it gets executed going downward in the stack.


//4. factorial of number

// function factorial(n){
//     if(n == 1){
//         return 1;
//     }
//     let a = factorial(n-1);
//     let b = n * a;
//     return b;
// }
// console.log(factorial(5));



//5. power of x raised to n

// function power(x, n){
//     if(n == 0){
//         return 1;
//     }
//     let a = power(x, n-1);
//     let b = x * a;
//     return b;
// }
// console.log(power(2, 3));


//6. print array elements

// function printArr(arr, i){
//     if(i == arr.length){
//         return;
//     }
//     console.log(arr[i]);
//     printArr(arr, i+1);
// }
// let arr = [2, 4, 6, 8];
// printArr(arr, 0);


//7. max elem in array

// function findMax(arr, i){
    // if(i == arr.length){
    //     return arr[0];
    // }
    // let max = findMax(arr, i+1);
    // if(arr[i] > max){
    //     return arr[i];
    // }
//     return max;
// }
// let arr = [5, 3, 9, 7, 8];
// let res = findMax(arr, 0);
// console.log(res);
