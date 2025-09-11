//sorting

//selection sort

// function selectionSort(){
//     for(let i=0; i<=n-2; i++){
//         let min = i;
//         for(let j=i; j<=n-1; j++){
//            if(arr[j] < arr[min]){
//             min = j;
//            }
//         }
//         let temp = arr[min];
//         arr[min] = arr[i];
//         arr[i] = temp;
//    }
// }
   

// let arr = [7, 5, 9, 2, 8];
// let n = arr.length;
// selectionSort();
// console.log(arr);



//bubble sort

// function bubbleSort(){
//     for(let i=n-1; i>=1; i--){
//         for(let j=0; j<=i-1; j++){
//             if(arr[j] > arr[j+1]){
//                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];  //swap
//             }
//         }
//     }
// }

// let arr = [7, 5, 9, 2, 8];
// let n = arr.length;
// bubbleSort();
// console.log(arr);




//bubble sort if the array is sorted

// function bubbleSort(){
//     for(let i=n-1; i>=1; i--){
//         let isSwapped = false;
//         for(let j=0; j<=i-1; j++){
//             if(arr[j] > arr[j+1]){
//                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; 
//                isSwapped = true;     //swap
//             }
//         }
//         if(isSwapped == false){
//             break;
//         }
//         console.log("running");
//     }
// }

// let arr = [7, 5, 9, 2, 8];
// let n = arr.length;
// bubbleSort();
// console.log(arr);


// insertion sort

// function insertionSort(){
//    for(let i=0; i<=n-1; i++){
//     let j = i ;
//     while(j>0 && arr[j-1] > arr[j]){
//         let temp = arr[j];
//         arr[j] = arr[j-1];
//         arr[j-1] = temp;
//         j--;
//     }
//    }
// }

// let arr = [12, 43, 21, 53, 17, 8];
// let n = arr.length;
// insertionSort();
// console.log(arr);



//merge sort

// function mergeSort(arr){
//     //base case
//     if(arr.length <= 1){
//         return arr;
//     }

//     //step-1 : divide
//     let mid = Math.floor(arr.length / 2);
//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid);

//      //step-2 : sort and merge
//     return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right){
//     let result = [];
//     let i = 0;
//     let j = 0;

//     while(i< left.length && j < right.length){
//         if(left[i] < right[j]){
//             result.push(left[i]);
//             i++;
//         }else{
//             result.push(right[j]);
//             j++;
//         }
//     }

    // while(i < left.length){
    //     result.push(left[i]);
    //     i++;
    // }

    //  while(j < right.length){
    //     result.push(right[j]);
    //     j++;
    // }

//     return result;
// }

// let arr = [38, 27, 43, 3, 9, 82, 10];
// let n = arr.length;
// let res = mergeSort(arr);
// console.log(res);



//quick sort

// function quickSort(arr){
//     //base case
    // if(arr.length <= 1){
    //     return arr;
    // }

    // let pivot = arr[arr.length - 1];
    // let left = [];
    // let right = [];

    // for(let i=0; i<arr.length-1; i++){
    //     if(arr[i] < pivot){
    //         left.push(arr[i]);
    //     }else{
    //         right.push(arr[i]);
    //     }
    // }

    // return [...quickSort(left), pivot, ...quickSort(right)];
// }

// let arr = [38, 27, 43, 3, 9, 82, 10];
// let n = arr.length;
// let res = quickSort(arr);
// console.log(res);


