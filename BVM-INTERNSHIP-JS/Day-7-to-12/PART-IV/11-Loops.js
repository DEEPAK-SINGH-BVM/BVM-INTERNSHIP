/*

(i) for loop
(ii) while loop
(iii) do... while loop
(iv) for in loop
(v) for of loop

1) Print 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

2) Print Even 1 to 20 
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

3) Print Sum of First Natural Number
let table = 5;
for (i = 1; i <= 10; i++) {
  console.log(`${table} X ${i} = ${table * i}`);
}

4) Print Multiple Table of 5 

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);
5) Print Number from 10 to 1 
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

(2 ) while loop

let i = 0;
while (i < 10) {
  i++;
  console.log(i);
}

let i = 1;
while (i < 20) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}

let i = 0;
let table = 7;
while (i <=10) {
    console.log(`${table} X ${i} = ${table * i}`);
    i++
}

let i = 50;
while (i >= 40) {
  console.log(i);
  i--;
}
  
let i = 1;
let sum = 0;
while (i<=10) {
  sum = sum + i;
  i++;
}
console.log(sum);

//3) DO WHILE LOOP
let i = 0;
do {
  i++;
  console.log(i);
} while (i < 10);

let i = 0;
do {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
} while (i <= 20);


let i = 1;
let table = 7;
do {
  console.log(`${table} X ${i} = ${table * i}`);
  i++;
} while (i <= 10);

let i = 1;
let sum = 0;
do {
    sum = sum + i
    i++;
    console.log(sum);
} while (i <= 10);

// FOR IN LOOP [Object ]  0, 1, 2, 3, 
let details = {
  firstName: "Vijay",
  lastName: "kumar",
  age: 18,
  country: "india",
};

for (let i in details) {
  console.log(i + ":" + details[i]);
}

let details = {
  firstName: "Vijay",
  lastName: "kumar",
  age: 18,
  country: "india",
};
let i = 1;
let sum = 0;
for (let i in details) {
  sum++;
}
console.log(sum);

FOR OF LOOP [Array & String] HTML , CSS , JS , PYTHON
let skills = ["HTML", "CSS", "JAVASCRIPT", "PYTHON"];
for (let skill of skills) {
  console.log(skill);
}

let language = "Javascript";

for (let char of language) {
  console.log(char);
} 
// Output J a v a s c r i p t 
*/
