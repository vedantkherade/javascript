//1. check if string contains "hello"

// let text = "say hello to everyone";
// let pattern =  /hello/;
// console.log(pattern.test(text));


//2. Replace all occurences of "cat" with "dog"

// let text = "cat is a cat";
// let updated = text.replace(/cat/g, "dog");
// console.log(updated);


//3. match any digit in a string

// let text = "user123";
// let pattern =/\d/;
// console.log(pattern.test(text));


//4. match a word that starts with "h"

// let text = "hello world";
// let pattern = /^hello/;
// console.log(pattern.test(text));


//5. split a string into an array

// let text = "red, green, blue";
// console.log(text.split(/,/));


//6. case-insensitive  match for "hello";

// let text = "HELLO";
// let pattern = /hello/i
// console.log(pattern.test(text));


// 7. match if a string ends with "world";

// let text = "hello world";
// let pattern = /world$/;
// console.log(pattern.test(text));


//8. find all occurences of the letter "a"

// let text = "banana";
// let result = text.match(/a/g);
// console.log(result);


//9. match any character between "c" and "t";

// let text = "cat";
// let pattern = /c[aeiou]t/;
// console.log(pattern.test(text));


//10. match any single character using dot

// let text = "cat";
// let pattern = /c.t/;
// console.log(pattern.test(text));


//11. check if string contains only digits

// let text = "12345";
// let pattern = /\d+$/;
// console.log(pattern.test(text));


//12. check if a word has exactly 3 a's

// let text = "aaa";
// let pattern =/a{3}/;
// console.log(pattern.test(text));


//13. use exec() to find multiple "h" characters

// let text = "hhaha";
// let pattern = /h/g;

// console.log(pattern.exec(text));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));


//14. match word boundary for "the";

// let text = "the end";
// let pattern = /\bthe\b/;
// console.log(pattern.test(text));


//15. match lowercase letters a-z

// let text = "A1b2";
// let pattern = /[a-z]/;
// console.log(pattern.test(text));

//----------------------------------------------------------------------------------------

//1. basic email validation

//write a regex to validate a simple email format : username@gmail.com

// let text = "username@gmail.com"

// function isValidEmail(email){
//     let patten = /^\w+@\w+\.\w+$/;
//     return patten.test(email);
// }

// console.log(isValidEmail("john@example.com"));
// console.log(isValidEmail("john@.com"));


//2. Basic phone number validation

// function isValidPhone(phone){
//    let pattern = /^\d{10}$/;
//    return pattern.test(phone);
// }

// console.log(isValidPhone("9874563211"));
// console.log(isValidPhone("12345"));


//3. Basic password validation

// function isValidPassword(password){
//     let pattern = /\d/;
//     return pattern.test(password);
// }

// console.log(isValidPassword("vedant1"));
// console.log(isValidPassword("vedant"));



//4. count the vowels in string

// let text = "acciojob";
// let vowels = (text.match(/[aeiou]/gi) || []).length;
// console.log(vowels);



//5. replace multiple spaces with a single space

// let text = "I     am   learning  javascript ";
// let neat = text.replace(/ {2,}/g, " ");
// console.log(neat);



//6. check if a string starts with a capital letter

// function startsWithCapital(str) {
//   return /^[A-Z]/.test(str);
// }

// console.log(startsWithCapital("JavaScript")); // true
// console.log(startsWithCapital("python"));     // false


// 7
// function isTitleCase(str){
//     const pattern = /^([A-Z][a-z]*\s?)+$/;
//     return pattern.test(str);
// }

// console.log(isTitleCase("Hello World"));
// console.log(isTitleCase("Hello world"));