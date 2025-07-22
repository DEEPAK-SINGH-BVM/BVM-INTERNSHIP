// Task 1: Use fill() to replace all values in the array with "X"
// let arr1 = [1, 2, 3, 4, 5 ,2];
// console.log(arr1.fill('x'));
// output : [ 'x', 'x', 'x', 'x', 'x' ]

// Task 2: Use findIndex() to find the index of the first number greater than 10
// let nums = [4, 9, 16, 25, 29];
// console.log(nums.findIndex((num)=> num > 10));
// output : 2

// Task 3: Use forEach() to print each color
// let colors = ["red", "green", "blue"];
// colors.forEach((ele)=> console.log(ele))
// red
// green
// blue

// Task 4: Use includes() to check if "apple" is in the fruits array
// let fruits = ["banana", "apple", "grape", "mongo"];
// console.log(fruits.includes('apple'));
// output : true

// Task 5: Use indexOf() to get the index of "apple" in fruits
// console.log(fruits.indexOf('apple'));
// output : 1

// Task 6: Use join() to create a string from the elements of the colors array
// console.log(fruits.join(' '));
// output : banana apple grape

// Task 7: Use keys() to get iterator of array keys in arr1
// let iterator = arr1.keys()

// for(const key of iterator){
//     console.log(key);
// }
// output : 0,1,2,3,4,5

// Task 8: Use lastIndexOf() to find last occurrence of 2
// console.log(arr1.lastIndexOf(2));
// output : 5

// Task 9: Use reverse() to reverse the array
// console.log(arr1.reverse());
// output : [ 2, 5, 4, 3, 2, 1 ]

// Task 10: Use shift() to remove the first element from colors
// console.log(fruits.shift());
// output : banana remove

// Task 11: Use slice() to extract the first 2 items from fruits
// not change array length
// console.log(fruits.slice(1,3));
// output : [ 'apple', 'grape' ]

// Task 12: Use some() to check if any number is greater than 20
//  console.log(arr1.some((num)=> num > 20));
// output : false

// Task 13: Use sort() to sort an array of numbers in ascending order
// let unsorted = [5, 1, 3, 9, 2];
// console.log(unsorted.sort());
// output : [ 1, 2, 3, 5, 9 ]

// Task 14 : Calculate the sum of all elements using a single expression
// let nums3 = [10, 20, 30];
// console.log(nums3.reduce((a,b)=> a+b));
// Output : 60

// Task 14: Use splice() to remove 2 elements starting from index 1
// console.log(fruits.splice(0,2));
// output : [ 'banana', 'apple' ]

// Task 15: Use unshift() to add "orange" at the beginning of fruits
// console.log(fruits.unshift('orange'));
// output : [ 'orange', 'banana', 'apple', 'grape', 'mongo' ]

// Task 16: Use values() to get the iterator of the array values

// let iterator = fruits.values()

// for(const value of iterator){
//     console.log(value);
// }
// output :
// banana
// apple
// grape
// mongo

// Not in List
// Task 17: Use with() to create a new array with the value changed at index 1
// let arr2 = ["a", "b", "c"]
// console.log(arr2.with());

// Object //

// Task 18: Use Object.keys() to get all keys of student
// let student = { name: "Amit", age: 21 };
// console.log(Object.keys(student));
// output : [ 'name', 'age' ]

// Task 19: Use Object.values() to get all values from student
// console.log(Object.values(student));
// output : [ 'Amit', 21 ]

// Task 20: Use Object.entries() to convert the student to an array of key-value pairs
// console.log(Object.entries(student));

// Task 21: Use Object.assign() to merge obj1 and obj2
// let obj1 = { a: 1 }, obj2 = { b: 2 };
// console.log(Object.assign(obj1,obj2));
// output : { a: 1, b: 2 }

// Task 22: Use Object.freeze() to freeze config object
// let config = { mode: "dark" };
// Object.freeze(config)
// config.mode = 'light'
// console.log(config);
// Output : { mode: 'dark' }

// Task 23: Use Object.seal() to seal the person object
// let person = { name: "Karan" };
// Object.seal(person)

// Task 24: Use Object.hasOwn() to check if 'age' exists in the student
// console.log(Object.hasOwn(student,'age'));
// output : true

// Task 25: Use Object.is() to compare two values
// console.log(Object.is(1,1));

// ARRAY
// ✍️ Using JavaScript Variables, Strings, and Arrays
// Task1 : Declare and use variables of different data types (string, number, boolean).
/*
    
*/

//

//  false, "", null,undefined,0
//  3, true, "JHVH", [], {} , -1

// for (let i = 0; i <= store.length-1; i++) {
// //   let showType = Number(store[i]);
//   console.log(store[i].split(""));
//     // console.log(i);

// //   for (let j = 0; j <= store[i].length; j++) {
// //     console.log(j);

// //   }
// //   console.log(showType);
// }
// let number = 1;
// console.log(number);

// let string = 'String'
// console.log(string);

// let boolean = true;
// console.log(boolean);

// let num ;
// console.log(num);
// undefined

// let num = null;
// console.log(num);

// let BingInt = 78942384792347894589569n
// console.log(BingInt);

// let name = 'DEEPAK'
// let symbol = Symbol(name);
// console.log(typeof(symbol));

// Task2 : Concatenate two strings and display the result.
// let string1 = 'Hello';
// let string2 = 'World';
// console.log(string1,string2);

// Task3:Convert a number to a string and vice versa.
// let string = '10'
// let num = 10
// let stringStore = String(num);
// let NumberStore = Number(string);

// console.log(typeof(stringStore));
// console.log(typeof(NumberStore));

// Task4 : Extract a substring from a given string and display it.

// let text = "w57 t2v 5v e59";
// let store = text.split(" ");

// let onlyNumber = [];

// for (let i = 0; i <= store.length - 1; i++) {
//   let store2 = store[i].split("");
//   // console.log(store2);
  
//   let temp = "";
//   for (let j = 0; j <= store2.length - 1; j++) {
//     let number = Number(store2[j]);
//     // console.log(store2[j]);
    
//     if (number >= 0 && store2[j] !== "") {
//       temp += store2[j];
//       // console.log(store2[j]);
//     }
//   }
//   onlyNumber.push(temp);
// }
// console.log(onlyNumber);

// Task5 : Create a numeric array and calculate the sum of all elements.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.reduce((a,b)=> a+b));

// Task6 : Create a string array and sort it alphabetically.
// let string = ['b','c','d','a']
// console.log(string.sort());

// Task7 : Create and sort a numeric array in ascending order.
// let arr = [2,4,5,7,1,6];
// console.log(arr.sort());

// Task8 : Use arithmetic, comparison, and logical operators in simple expressions
/**
(i)    Arithmetic : + - * / %  ++ -- 
(ii)   Comparison : == , != , === , !== , > , < ,<=,>= 
(iii)    Logical : && , || 


*/
// __ + __
// function sum(num1,num2){
//    return num1+num2
// }
// console.log(sum(5,2));
// output : 7

// __ - __
// function sub(num1,num2){
//    return num1-num2
// }
// console.log(sub(5,2));
// output : 3

// __ * __
// function multiply(num1, num2) {
//   return num1 * num2;
// }
// console.log(multiply(5, 2));
// output : 10

// __ / __
// function div(num1,num2){
//    return num1/num2
// }
// console.log(div(5,2));
// output : 2.5

// __ % __
// function div(num1,num2){
//    return num1%num2
// }
// console.log(div(2,2));
// output : 0

// __ ++ __
//  Pre Increment
// let a = 2;
// console.log(++a);
// output : 3

// Post Increment
// let a = 2;
// console.log(a++);
// output : 2

// __ -- __
// Pre Decrement
// let a = 2;
// console.log(--a);
// output : 1

// Post Decrement
// let a = 2;
// console.log(a--);
// output : 2

//  Comparison

// __ == __
// let a = 2;
// let b = 2;
// if ((a == b)) {
//   console.log("SAME");
// } else {
//   console.log("Not SAME");
// }
// output : SAME

// __ != __
// let a = 2;
// let b = 3;
// if ((a != b)) {
//   console.log("Not SAME");
// } else {
//   console.log("SAME");
// }
// output : Not SAME

// __ === __
// let a = 2;
// let b = "2";
// if (a === b) {
//   console.log("SAME");
// } else {
//   console.log("Not SAME");
// }
// output : Not SAME

// __ !== __
// let a = 2;
// let b = '2';
// if ((a !== b)) {
//   console.log("Not SAME");
// } else {
//   console.log("SAME");
// }
// output : Not SAME

// let a = 2;
// let b = 3;

// let c = 10;
// let d = 10;

// __ > __
// if (a > b) {
//   console.log("A is Big");
// } else {
//   console.log("B is Big");
// }
// output : B is Big

// __ < __
// if (a < b) {
//   console.log("A is small");
// } else {
//   console.log("B is small");
// }
// output : B is Big

// __ >= __
// if (c >= d) {
//   console.log("SAME");
// } else {
//   console.log("Not SAME");
// }
// output : SAME

// __ <= __
// if (c <= d) {
//   console.log("SAME ");
// } else {
//   console.log("Not SAME");
// }
// output : SAME

// __ && __
// use for Both Condition Satisfied
// let e = "Hello";
// let f = "world";

// if (e !== "" && f !== "") {
//   console.log("Both Have Value ");
// } else {
//   console.log('Any One or Both Not Have Value');
// }
// output : Both have Value

// __ || __
// use for Any One Condition Has Satisfied
// let e = "Hello";
// let f = "world";

// if (e !== "" || f !== "") {
//   console.log("Any One or Both condition has Satisfied");
// } else {
//   console.log("Both Condition Not satisfied ");
// }
// output : Any One or Both condition has satisfied

// Function & Object
/*
✍️ Using JavaScript Functions and Objects
*/
// Task1 : Use a ternary operator to check if a number is even or odd.

// function square(num){
//    return num*num
// }
// console.log(square(2));
// Output : 4

// Task2 : Create a function that accepts two numbers and returns the larger one.
// function sum(num1,num2){
//    return num1+num2
// }
// console.log(sum(2,5));
// output : 7

// Task3 : Use the Math object to get:
//  a. The value of Pi
// console.log(Math.PI);
// Output : 3.141592653589793

//  b. The square root of 25
// console.log(Math.sqrt(25));
// Output : 5

//  c. The floor and ceil of a decimal number
// console.log(Math.floor(3.55));
// Output : 3

// Task4 : Use a ternary operator to check if a number is even or odd
// let num = 2;
// (num%2==0) ? console.log('Even'):console.log('Odd');;
// Output : Even

// Task5:Write a function using if and else to check if age ≥18 can vote
// let age = 18;
// if (age >= 18) {
//   console.log("You Can Vote !!");
// } else {
//   console.log("You Can't Vote");
// }
// Output : You Can Vote !!

// Task6: Use a switch statement to print the day of the week based on number 0–6
// let num = 7;
// switch (num) {
//   case 0:
//     console.log("Mon");
//     break;
//   case 1:
//     console.log("Tue");
//     break;

//   case 2:
//     console.log("Wed");
//     break;

//   case 3:
//     console.log("Thru");
//     break;

//   case 4:
//     console.log("Fri");
//     break;

//   case 5:
//     console.log("Sat");
//     break;

//   case 6:
//     console.log("Sun");
//     break;

//   default:
//     console.log("Range Between 0 - 6");

//     break;
// }

// Task7 : Use a for loop to print numbers from 1 to 10
// for(let i=1; i<=10; i++){
//     console.log(i);
// }
// output : 1,2,3,4,5,6,7,8,9,10

// Task8 : Use a while loop to print numbers from 10 to 1
// for(let i=10; i>=1; i--){
//     console.log(i);
// }
// output : 10 ,9,8,7,6,5,4,3,2,1

// Task9 : Use a do...while loop to print "Hello" 3 times.
// let i = 0;
// do {
//   i++;
//   console.log('Hello');
// } while (i < 3 );
// Output : Hello , Hello , Hello

// Task10 : Loop through an array and print all values using for loop
// let arr = [10,20,30,40,50];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// output : 10 20 30 40 50
