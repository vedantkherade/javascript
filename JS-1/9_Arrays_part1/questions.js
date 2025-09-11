//1. sum of all array

// function sumElems(arr){
//   let sum = 0;
//   for(let i=0; i<arr.length; i++){
//      sum += arr[i];
//   }
// return sum;
// }

// let arr = [1, 2, 3, 4];
// let ans = sumElems(arr);
// console.log(ans);


//2. find maximum element

// function findMax(arr){
//   let max = arr[0];
//   for(let i=0; i<arr.length; i++){
//      if(arr[i] > max){
//         max = arr[i]
//      }
//   }
// return max;
// }

// let arr = [10, 22, 5, 7];
// let res = findMax(arr);
// console.log(res);


//3. count even numbers

// function countEvenno(arr){
//     let count = 0;
//     for(let elem of arr){
//      if(elem % 2 == 0){
//         count++;
//      }
//     }
//     return count;
// }

// let arr = [1, 4, 6, 7, 8];
// let res = countEvenno(arr);
// console.log(res);


//4.reverse an array

// function reverseArr(arr){
//     let reversed = [];
//     for(let i= arr.length-1; i>=0; i--){
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }

// let arr = [1, 2, 3, 4, 5];
// let res = reverseArr(arr);
// console.log(res);


//5. check if array contains element 

// function checkForElem(arr, elem){
//     for(let item of arr){
//         if(item === elem){
//             return true;
//         }
//     }
//     return false;
// }

// let arr = [5, 10, 15];
// let elem = 10;
// let res = checkForElem(arr, elem);
// console.log(res);


//7. get first elem in array

// function getFirstElem(arr){
//     return arr[0];
// }

// let arr = [11, 2, 3, 4, 5];
// let res = getFirstElem(arr);
// console.log(res);



//8. get the last elem in array

// function getLastElement(arr){
//     return arr[arr.length - 1];
// }

// let arr = [1, 2, 3, 4, 5];
// let res = getLastElement(arr);
// console.log(res);


//9. find numbers greater than 5

// function greaterThanFive(arr){
//     let result = [];
//     for(let elem of arr){
//         if(elem > 5){
//             result.push(elem);
//         }
//     }
//     return result;
// }

// let arr = [2, 6, 8, 3];
// let x = greaterThanFive(arr);
// console.log(x);



//10. Double each elem in array

//  function doubleElems(arr){
//     let result = [];
//     for(let elem of arr){
//         result.push(elem*2);
//     }
//     return result;
// }

// let arr = [1, 2, 3];
// let x = doubleElems(arr);
// console.log(x);

//---------------------------------------------------------------------

//1. print all elements using forEach

// function printElems(arr){
//     arr.forEach((elem, index) => {
//     console.log(elem, index);
// })
// }

// let arr = [10, 20, 30];
// printElems(arr);


//2. double each element using map

// function doubleEachElem(arr){
//    let newArr = arr.map((elem) =>{
//     return elem * 2;
// });
// return newArr;
// }
// let arr = [10, 20, 30];
// console.log(doubleEachElem(arr));


//3. get only even numbers using filter

// function getEvennos(arr){
//     let filteredArr = arr.filter((elem) => {
//     return elem % 2 == 0;
// });
// return filteredArr;
// }

// let arr = [1, 2, 3, 4, 5, 6 ];
// console.log(getEvennos(arr));


//4. add "Hi" before each name using map

// function addName(arr){
//    let newArr = arr.map((elem) =>{
//     return "Hi " + elem ;
// });
// return newArr;
// }
// let arr = ["Alice", "Bob"];
// console.log(addName(arr));


//5. count positive numbers using forEach

// function countPostiveNums(arr){
//     let count = 0;
//     arr.forEach((elem) => {
//        if(elem > 0){
//         count++;
//        }
// });
// return count;
// }

// let arr = [-2, 5, 3, -1, 0]
// console.log(countPostiveNums(arr));


//6. convert all strings to uppercase using map

// function allstrToUppercase(arr){
//     let newArr = arr.map((elem) =>{
//      return elem.toUpperCase();
// });
// return newArr;
// }

// let arr = ["apple", "banana", "cherry"]
// console.log(allstrToUppercase(arr));


//7. find all numbers greater than 50 using filter

// function numGreaterthan(arr){
//      let filteredArr = arr.filter((elem) => {
//        return elem > 50;
//   });
//   return filteredArr;
// }

// let arr = [10, 60, 45, 80, 30]
// console.log(numGreaterthan(arr));


//8. print each elem with its index using forEach

// function printElemsWithIndex(arr){
//     arr.forEach((elem, index) => {
//     console.log(`Index ${index}: ${elem}`);
// })
// }

// let arr = ["x", "y", "z"];
// printElemsWithIndex(arr);


//9. add 10 to each number using map

// function addtenToEachNum(arr){
//      let newArr = arr.map((elem) =>{
//         return elem + 10;
// })
// return newArr;
// }

// let arr = [5, 10, 15];
// console.log(addtenToEachNum(arr));