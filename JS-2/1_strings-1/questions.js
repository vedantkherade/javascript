//1. count vowels in str

// function countVowels(str){
//     let count = 0;

//     for(let ch of str){
//         if(ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" ){
//             count++;
//         }
//     }
//     return count;
// }

// let str = "acciojob";
// let result = countVowels(str);
// console.log(result);



// function countVowels(str){
//     let count = 0;
//     let vowels = ["a", "e", "i", "o", "u"];

//     for(let i=0; i< str.length; i++){
//         if(vowels.includes(str[i])){
//             count++;
//         }
//     }
//     return count;
// }

// let str = "acciojob";
// let result = countVowels(str);
// console.log(result);


//2. reverse a string

// function reverseString(str){
//     let reversed = " ";
//     for(i = str.length-1; i>=0; i--){
//          reversed += str[i];
//     }
//     return reversed;
// }

// let str = "acciojob";
// let result = reverseString(str);
// console.log(result);



// function revrseStr(str){
//     return str.split("").reverse().join("");
// }

// let str = "acciojob";
// let result = revrseStr(str);
// console.log(result);


//3. check if a string is palindrone

// function palindromeStr(str){
//     let original = str;

//     let reverse = str.split("").reverse().join("");

//     if(original === reverse){
//         return true;
//     }else{
//         return false;
//     }
// }

// let str = "madam";
// let result = palindromeStr(str);
// console.log(result);


//4. replace all spaces with dash

// let str = "name vedant kherade";
// console.log(str.replaceAll(" ", "-"));


//5. count words in a sentence

// function countWords(sentence){
//    let words = sentence.trim().split(" ");
//      return words.length;
// }
// let sentence = "I am a boy";
// console.log(countWords(sentence));



