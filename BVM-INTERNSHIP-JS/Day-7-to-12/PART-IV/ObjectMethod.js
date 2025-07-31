// Object Method
/*
(i) assign()
=> assign method copies all object from one or more & return modified object 
const target = { a: 1, b: 2 };
const source = { c: 3, d: 4 };
const third = { e: 5, f: 6 };
const merge = Object.assign(target, source ,third);
console.log(merge);
// output { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

(ii) create()
=>
const person = {
    firstName:"John",
    lastName:"Deo",
    language:"English"
}
const news = Object.create(person);
news.firstName = "steve"
console.log(news);
// output { firstName: 'steve' }

(iv) entires()
=> the object.entires static method returns an array of given object 
string - keywords property key-value pairs.

const object1 = {
  a: "Some String",
  b: 1,
};
for (let [key, value] of Object.entries(object1)) {
  console.log(key, value);
}
// output 
a Some String
b 1

//   (v) freeze
=> freeze is use to not changes value after apply freeze
const obj={
    number:1
}
Object.freeze(obj);
obj.number = 2
console.log(obj);
// output { number: 1 }


(vi) fromEntries()
=> object.fromEntires static method transforms a list key-value paris into an object.
const entires = new Map([
    ["no",1],
    ["name","john"]
])
const obj = Object.fromEntries(entires)
console.log(obj);
// output 
{ no: 1, name: 'john' }

(vii) groupBy()
=> it's show separate both false and true
const inventory = [
    {name:'banana' , type:'fruit' , quantity:1},
    {name:'apple' , type:'fruit' , quantity:2},
    {name:'graps' , type:'fruit' , quantity:3},
];

const result = Object.groupBy(inventory,({quantity})=>
    quantity > 2
)
console.log(result);

// output
[Object: null prototype] {
  false: [
    { name: 'banana', type: 'fruit', quantity: 1 },
    { name: 'apple', type: 'fruit', quantity: 2 }
  ],
  true: [ { name: 'graps', type: 'fruit', quantity: 3 } ]
}
(viii) hasOwn()
=> hasOwn identified in object there define key exists not
const object1 = {
    name:'John'
}
//                        ObjectNAME , keyNAME
console.log(Object.hasOwn(object1,"name"));
// output true

(ix)
=> it provide only keys from object

const Objects ={
    a:'a',
    b:'b',
    c:'c'
}
console.log(Object.keys(Objects));
// output [ 'a', 'b', 'c' ]

//   (x) seal()
=> seal you can change value but can not delete


(xi) values
=> it only provide values from objects
const Object1 = {
    name:'john',
    age:22,
    language:'English'
}
console.log(Object.values(Object1));

(xii) hasOwnProperty
=> it show in true false that property exits or not
const Object1 = {};
Object1.property = 42;
console.log(Object1.hasOwnProperty('property'));

(xiii) toString()
=>  
const map = new Map()
console.log(map.toString());
console.log(map);

// OUTPUT 
[object Map]
Map(0) {}

//    (xiv) valueOf()
=> valueOf method use to convert String Object into string
let text = new String('hello');
let result = text.valueOf();
console.log(result);

(xv) class Constructor
=> Constructor method is special method for creating & initializing object create within class
class Car {
  constructor(brand) {
    this.carName = brand;
  }
}
let First = new Car("Ford");
let Second = new Car('Tata')
console.log(First);
console.log(Second);
*/


const Objects ={
    a:'a',
    b:'b',
    c:'c'
}
console.log(Object.keys(Objects));
