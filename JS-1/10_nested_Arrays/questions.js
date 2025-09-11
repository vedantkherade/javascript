//1 print 40
// let data = [[10, 20], [30, 40], [50, 60]];

// console.log(data[1][1]);


//2 change a value 
// let marks = [[70, 80], [90, 100]];
// marks[1][0] = 95;
// console.log(marks);



//3 print all values(row by row)
// let grid = [[1, 2], [3, 4], [5, 6]];

// for(let i=0; i<grid.length; i++){
//     for(let j=0; j<grid[i].length; j++){
//         console.log(grid[i][j]);
//     }
// }



// 4 count total elem
// let items = [[1, 2, 3], [4, 5], [6]];
// let count = 0;
// for(let i=0; i<items.length; i++){
//     for(let j=0; j<items[i].length; j++){
//        items[i];
//        count ++;
//     }
// }
// console.log(count);

// let count = 0;
// for(let i=0; i<items.length; i++){
//     count += items[i].length;
// }
// console.log("Total elements:",count);



// //5 sum of all elems
// let matrix = [[2, 4], [6, 8], [10, 12]];
// let sum = 0;
// for(let i=0; i<matrix.length; i++){
//     for(let j=0; j<matrix[i].length; j++){
//         sum += matrix[i][j];
//     }
   
//  }
//  console.log(sum);



//6 flatten the nested array
// let nested = [[1, 2], [3, 4], [5, 6]];

// let flat = [];
// for(let i=0; i<nested.length; i++){
//     for(let j=0; j<nested[i].length; j++){
//         flat.push(nested[i][j]);
//     }
// }
// console.log(flat);

//using flat() method
// console.log(nested.flat());


//7 get first elem of each inner array
// let arr = [[10, 20], [30, 40], [50, 60]];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i][0]);
// }


//8 replace all even num with 0
// let data = [[1, 2], [3, 4], [5, 6]];

// for(let i=0; i<data.length; i++){
//     for(let j=0; j<data[i].length; j++){
//         if(data[i][j] %2 === 0){
//             data[i][j] = 0;
//         }
//     }        
// }
// console.log(data);


//9 count how many odd nums are there
// let nums = [[2, 5], [7, 8], [9, 12]];

// let count = 0;

// for(let i=0; i<nums.length; i++){
//     for(let j=0; j<nums[i].length; j++){
//         if(nums[i][j] %2 !== 0){
//             count++;
//         }
//     }        
// }
// console.log("Odd num count:",count);


//10 add a new inner array
// let students = [["Amit", "Neha"], ["Jay", "Riya"]];

// students.push(["Pooja", "Simran"]);
// console.log(students);



//11 reverse each inner array
// let scores = [[1, 2], [3, 4], [5, 6]];

// for(let i=0; i<scores.length; i++){
//     scores[i].reverse();
// }
// console.log(scores);



//-------------------------------------------------------------------------------------------
//1
// let board = [

//               [1,5,7],

//               [8, 2, 9],

//               [11, 54,-9]

//             ];

// let sum = 0;
// for(let i=0; i<board.length; i++){
//     for(let j=0; j<board[i].length; j++){
//         sum += board[i][j];
//     }
   
//  }
//  console.log(sum);


//2 count even num
// let matrix = [ [4, 7, 2], [9, 6, 1], [8, 3, 5] ];

// let count = 0;
// for(let i=0; i<matrix.length; i++){
//     for(let j=0; j<matrix[i].length; j++){
//         if(matrix[i][j] % 2 === 0){
//             count++;
//         }
//     }
   
//  }
//  console.log(count);


//3 transpose of matrix
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// let rows = matrix.length;
// let cols = matrix[0].length;

// let transpose = [];

// for (let i = 0; i < cols; i++) {
//   transpose[i] = [];

//   for (let j = 0; j < rows; j++) {
//     transpose[i][j] = matrix[j][i];
//   }
// }

// console.log(transpose);



//4 find the row with maximum sum 
// let matrix = [ [1, 2, 3],
//                [4, 5, 6],
//                [0, 1, 0]
//              ];

// let maxSum = 0;
// let maxRow = 0;

// for (let i = 0; i < matrix.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < matrix[i].length; j++) {
//     sum = sum + matrix[i][j];
//   }

//   if (sum > maxSum) {
//     maxSum = sum;
//     maxRow = i;
//   }
// }

// console.log("Row with max sum is:", maxRow);
// console.log("Row is:", matrix[maxRow]);


//sir's method
// let matrix = [
//   [1, 2, 3],

//   [4, 5, 6],

//   [7, 8, 9],
// ];

// let maxSum = -Infinity;

// let rowIndex = -1;

// for (let i = 0; i < matrix.length; i++) {
//   let sum = 0;

//   for (let j = 0; j < matrix[i].length; j++) {
//     sum += matrix[i][j];
//   }

//   if (sum > maxSum) {
//     maxSum = sum;

//     rowIndex = i;
//   }
// }

// console.log(rowIndex);




//5 printing element in continuous manner
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for (let i = 0; i < matrix.length; i++) {
//   if (i % 2 === 0) {
//     // Even row: left to right
//     for (let j = 0; j < matrix[i].length; j++) {
//       process.stdout.write(matrix[i][j] + " ");
//     }
//   } else {
//     // Odd row: right to left
//     for (let j = matrix[i].length - 1; j >= 0; j--) {
//       process.stdout.write(matrix[i][j] + " ");
//     }
//   }
// }

//sir's method
// let matrix = [
//   [1, 2, 3],

//   [4, 5, 6],

//   [7, 8, 9],
// ];

// let result = [];
// for (let i = 0; i < matrix.length; i++) {
//   if (i % 2 == 0) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       result.push(matrix[i][j]);
//     }
//   } else {
//     for (let j = matrix[i].length - 1; j >= 0; j--) {
//       result.push(matrix[i][j]);
//     }
//   }
// }

// console.log(result.join(" "));