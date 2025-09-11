// 1. What is regex?
// a pattern used to match characters in strings
// search
// match
// manipulate
// validation



//2. how to create?
// Literal syntax
// let pattern = new RegExp("hello");


// 3. common methods
// test()
// let text = "hello world";
// let pattern = /hello/;
// console.log(pattern.test(text));    //true


// let text = "Learning acciojob course";
// let pattern = /accio/;
// console.log(pattern.test(text));


//match() & exec()
// let text = "hello hello";
// let pattern = /hello/g;
// console.log(text.match(pattern));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));



//replace()
// let text = "hello hello world";
// console.log(text.replace(/hello/g, "hi"));


//search()
// let text = "hello world";
// console.log(text.search(/world/));


//split()
// let text = "apple,orange,grapes";
// console.log(text.split(/,/));


//exec()
// let text = "hellohh";
// let pattern = /h/g;
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));
// console.log(text.match(pattern));


//flags
//g - global, to match all occurences


//i - case insensitive, to ignore the cases
// let text = "HELLO";
// console.log(/hello/i.test(text));


// let text = "ACCIO";
// console.log(/accio/i.test(text));


//m - multiline, checks for multiline character
// let text = "hello\nworld";
// console.log(/^world/m.test(text));


//anchors
//^ - charat sign

// let text = "hello world";
// let pattern = /^hello/;
// console.log(pattern.test(text));


// $
// let text = "hello world";
// let pattern = /world$/;
// console.log(pattern.test(text));


// \b (word boundary)
// let text = "hello there";
// let pattern = /\bhello\b/;
// console.log(pattern.test(text));


// \B (non-word boundary)
// let text = "hello";
// let pattern = /\Bo/;
// console.log(pattern.test(text));



// quantifiers
// * : matches 0 or more items
// + : matches 1 or more items
// ? : 0 or more item


// let text = "aaab";
// let pattern = /a*/;
// let pattern = /a+/;
// let text = "aab";
// let pattern = /a?/g;
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));


// {n} : matches exactly n times
// let text = "aaab";
// let pattern = /a{2}/;
// console.log(pattern.exec(text));



// {n,} : matches n or more times 
// {n, m} : matches between n and m times 
//give examples of these quantifiers


//set and ranges

//set
// character set [abc]
// let text = "cat";
// let pattern = /c[aeiou]t/;
// console.log(pattern.test(text));


//negative character set [^abc]
// let text = "cbt";
// let pattern = /c[^aeiou]t/;
// console.log(pattern.test(text));


//ranges
// [a-z]
// let text = "g";
// console.log(/[a-z]/.test(text));

// [0-9]

//predefined characters classes
// \d : any digit
// \w : any word character (Letter, digit, underscore)
// \s : any whitespace character


// let text = "123abc";
// console.log(/\d/.test(text));
// console.log(/\d+/.exec(text));


// dot character
// matches any character except newline(\n)
// let text = "cat";
// console.log(/c.t/.test(text));

