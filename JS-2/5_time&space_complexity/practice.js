// Linear search

// let arr = [8, 7, 2, 3, 5, 1, 6]
// let elem = 3;

// function linearSearch(arr, elem){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] == elem){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(linearSearch(arr,elem));


// Binary search

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let elem = 5;



// function binarySearch(arr, elem) {
//   let left = 0;
//   let right = arr.length - 1;


//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] == elem) {
//       return mid;
//     } else if (elem < arr[mid]) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch(arr, elem));





// //finding first occurence using binary search
// let arr = [1, 2, 4, 4, 4, 5, 6];
// let elem = 4;

// function binarySearch(arr, elem) {
//   let left = 0;
//   let right = arr.length - 1;
//   let result = -1;


//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] == elem) {
//       result = mid;
//       right = mid - 1;
//     } else if (elem < arr[mid]) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return result;
// }

// console.log(binarySearch(arr, elem));





// //finding last occurence using binary search
// let arr = [1, 2, 4, 4, 4, 5, 6];
// let elem = 4;

// function binarySearch(arr, elem) {
//     let left = 0;
//     let right = arr.length - 1;
//     let result = -1;                     //last occurence   


//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] == elem) {
//             result = mid;
//             left = mid + 1;
//         } else if (elem < arr[mid]) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return result;
// }

// console.log(binarySearch(arr, elem));   




