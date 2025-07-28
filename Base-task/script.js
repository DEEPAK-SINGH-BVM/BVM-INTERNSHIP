// let string2 = "24z6 1x23 y369 89a 900b";

// let parts = string2.split(" ");
// console.log("Parts:", parts);

// let numbers = parts.map(part => parseInt(part.replace(/\D/g, "")));
// console.log(numbers);

// let result = numbers[0] + numbers[1] - (numbers[2] * numbers[3] / numbers[4]);
// console.log("Result:", result);

// let text = "w57 t2v 5v e59";
// let store = text.split(" ");
// let onlyNumber = [];
// let allValues = [];

// // [57, 2, 5, 59]

// for (let i = 0; i <= store.length - 1; i++) {
//   let store2 = store[i].split("");
//   let temp = ""; // collect digits here

//   for (let j = 0; j <= store2.length - 1; j++) {
//     let number = Number(store2[j]);

//     if (number >= 0 && store2[j] !== " ") {
//       temp += store2[j]; // add digit as string
//     }
//   }

//   onlyNumber.push(Number(temp)); // convert full string number to Number
//   allValues.push(store[i]);
// }

// console.log(onlyNumber); // [57, 2, 5, 59]
// console.log(allValues);  // ["w57", "t2v", "5v", "e59"]