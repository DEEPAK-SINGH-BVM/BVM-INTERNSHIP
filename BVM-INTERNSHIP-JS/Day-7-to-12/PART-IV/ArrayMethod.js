/*
// Array Method 

(1) at()
=> at Method was provide value form array according to index
             0 1 2 3 4 5
const array = [1,2,3,4,5,6];
            -6 -5 -4 -3 -2 -1
   let index = 2;
   console.log(array.at(index));
    
   let index =-5;
    console.log(array.at(index));

(2) concat()
=> concat method is use to merge two or more array it give new array
let array1 = ["A", "B", "C", "D"];
let array2 = ["E", "F", "G"];
let array3 = ["H", "I"];
console.log(array1.concat(array2,array3));

(3) entires()
=>entires give index and value 
const array = ['a','b','c'];
let iterate = array.entries()

console.log(iterate.next().value);
console.log(iterate.next().value);

(4) every() it's return boolean value
=> every is use to compare it give ans in boolean true / false
const compare = (currentValue) => currentValue > 40;
const array1 = [10, 20, 30, 40, 50];
console.log(array1.every(compare));
true
(5) fill()
=> fill is use for fill value as describe in this (0(initialize),2(starting),3(ending)) 
const array = [1,2,3,4,5,6,7];
console.log(array.fill(0,2));
[1, 2, 0, 0,0, 0, 0]

(6) filter()
=> filter method not changes in original array it filter according to given condition
const words = ['hi','hello','how','here'];
const filter = words.filter((word)=>word.length > 2)
console.log(filter);

(7) find()
=> it work as filter but it only give one satisfied value after they stop but filter check whole array also provide all vale that satisfied
    
let array = [10,20,30,40];
const find = array.find((finds)=> finds > 10)
console.log(find);

(8) findIndex()
=> it provide index that value has satisfied but it also provide only one index

const array = [1,2,3,4,5];
let index = array.findIndex((element)=> element > 2) ;
console.log(index);

(9) findLastIndex()
=> It give satisfied vale of Last index 
let array = [1,2,3,4,5,6,7];
let findlast = array.findLastIndex((index)=> index >2)
console.log(findlast);

(10) flat()
=> from nested array it will remove a single array 
const array = [1,2,3,4,[5,6]];
let flat = array.flat()
console.log(flat);

// also we can describe how many nested array remove find(2) , (infinity)

const array = [1,2,3,4,[[[[[5,6]]]]]];
let flat = array.flat(Infinity)
console.log(flat);

(11) flatmap()
=>that combines the functionality of map() and flat() in a single operation, 
It first applies a mapping function to each element of an array, similar to map(), and then flattens the resulting array up to a depth of 1
const array = [1,2,3,4];
console.log(array.flatMap((num)=>num ==2 ?[2,2]:1));

(12) foreach()
let array = [1,2,3,4,5];
array.forEach((element)=> console.log(element));

(13) includes()
=>  by using includes method we can find from array that particular value exists or not 
it give true / false
let array = [1,2,3,4,5]
console.log(array.includes(2));

(14) indexOf()
=> FIND INDEX NUMBER USING  
const findIndex = ['a','b','c','d'];
console.log(findIndex.indexOf('a'));

(15) join()
(i) a,b,c output = > a,b,c

const text = ['a','b','c'];
console.log(text.join());

(16) keys()
=> it give keys 
const array = ['a','b','c'];
let iterator = array.keys()

for(const key of iterator){
    console.log(key);
}

(17) lastIndexOf()

const animals = ['Dodo', 'Tiger' , 'Penguin' , 'Dodo']
console.log(animals.lastIndexOf('Dodo'));

(18) map()

const array = [1,4,9,16];
console.log(array.map((x)=>x*2));

(19) pop()
remove end of array
const text = ["a", "b", "c", "d"];
console.log(text.pop());
console.log(text);

(20) push()

const animals = ['a','b','c','d'];
console.log(animals.push('e'));
console.log(animals);

(21) reverse()
let array = [1,2,3,4,5];
console.log(array.reverse());

(22) shift() 
=> it remove first elements also that changes the method of array
const array = [1,2,3];
console.log(array.shift());
console.log(array);

(23) slice() 
=> it selected from start to end (end not include) slice(1,3)
let text = ['a','b','c','d','e'];
console.log(text.slice(1,3));

(24) some() 
=> it test at least one element in the array passes the test implemented by provided
function it return true if any single element match or False 
const array = [1,2,3,1,5];
const even = (element)=>element % 2==0;
console.log(array.some(even));


(25) sort()
=> sort method is use to sort in both ascending(by default )  or descending
    
const month = [3,4,2,1];
console.log(month.sort((a,b)=> b - a));

(26) splice()
=> splice method we have pass three parameter(1(place),0(remove),'feb'(data))
const months = ["jan", "march", "april", "may", "june"];
months.splice(1,0,'feb')
console.log(months);

(27) toString()
=> tostring() method return array element into string format 
let array = ['a','b','c','d'];
console.log(array.toString());

(28) unshift()

=> unshift() method is use to add beginnings of array and return the new length
let array = [3,4,5,6];
console.log(array.unshift(1,2));
console.log(array);

(29) values()
=>  it give value
const array = ['a','b','c','d'];
let iterate = array.values()

for(const value of iterate){
    console.log(value);
}

(30) spreads()
=> it expands value from array also it can combined two array
const array1 = [1,2,3];
const array2 = [4,5,6];
console.log(...array1 , ...array2);

(31) reduce()
=> the final result of running the reducer across all elements of the array in single value 
let array1 = [1, 2, 3, 4, 5];
let initialize = 0;
const sum = array1.reduce((a, b) => a + b, initialize);
console.log(sum);

(32) split()
=> the split method of string value takes divide this 
into string into an order list of substring by searching for the pattern 
puts these substring into an array & return the array

const str = "The Quick brown fox jumps over the lazy dog.";
const words = str.split(" ");
console.log(words[3]);
*/

