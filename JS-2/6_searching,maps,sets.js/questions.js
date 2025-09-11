// 1. count unique elements in an array

// let arr = [1, 2, 3, 3, 5, 6, 2, 5];

// let set = new Set();

// for(let value of arr){
//     set.add(value);
// }
// console.log(set.size);



//2. check for duplicates

// let arr = [1, 2, 3, 3, 5, 6, 2, 5];


// function containsDuplicate(arr){
//    let set = new Set(arr);

//    if(arr.length == set.size){
//       return false;
//    }else{
//       return true;
//    }
// }
// console.log(containsDuplicate(arr));


// let arr = [1, 2, 3, 3, 5, 6, 2, 5];

// function containsDuplicate(arr){
//     let seen = new Set();

    // for(let i=0; i<arr.length; i++){
    //     if(seen.has(arr[i])){
    //         return true;    //Duplicate found
    //     }
    //     seen.add(arr[i]);
    // }
    // return false;
// }

// console.log(containsDuplicate(arr));


//3. character frequency using map
// let str = "hello";

// function characterFreq(str){
//     let freqMap = new Map();

//     for(let i=0; i<str.length; i++){
//         let char = str[i];
//         if(freqMap.has(char)){
//             freqMap.set(char, freqMap.get(char) + 1);
//         }else{
//             freqMap.set(char, 1);
//         }
//     }
//     return freqMap;
// }
// console.log(characterFreq(str));


//4. find the first repeating element


// let arr = [1, 2, 3, 2, 3, 4];

// function firstRepeating(arr){
//     let seen = new Set();
  
//     for(let i=0; i<arr.length; i++){
//         if(seen.has(arr[i])){
//             return arr[i];    //First repeat found
//         }
//         seen.add(arr[i]);
//     }
//     return null;
// }
// console.log(firstRepeating(arr));

