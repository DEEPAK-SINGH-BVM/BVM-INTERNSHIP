

// push for Add End of Array
// pop  for Remove End of Array
// shift for Remove From Front
// unsift for Add Front of Array

// splice Delete , replace , add

// const friends = ["A","C","D","E"];
// friends.splice(1,0,"B")
// console.log(friends);

// const worksDuration = [
//   {
//     'name': 'Write tutorials',
//     'duration': 120
//   },
//   {
//     'name': 'Running',
//     'duration': 60
//   },
//   {
//     'name': 'Proccess',
//     'duration': 240
//   }
// ];

// 1) QUESTION
// worksDuration.push({name:"Study JavaScript",duration:"90"})
// console.log(worksDuration);

// 2) QUESTION
// worksDuration.unshift({ name: "Sports", duration: "210" })
// console.log(worksDuration);

// Q3 QUESTION
// console.log(worksDuration.length);

// 4) QUESTION
// worksDuration.pop();
// console.log(worksDuration.length);

// 5) QUESTION
// for (let i = 0; i < worksDuration.length; i++) {
//   console.log(worksDuration[i]);
// }

// 6) QUESTION
// const ArrayOfString = worksDuration.map((work)=>` ${work.name} = ${work.duration}` )
// console.log(ArrayOfString);

// 7) QUESTION
// console.log(worksDuration.sort((a,b)=>a.duration - b.duration));

/*
  1. Add another element to the end of the worksDuration list.
  2. Add another element to the beginning of the worksDuration list.
  3. Print the length of the worksDuration to the console.
  4. Remove the last element from the end of list, and then print the length of the array to the console one more time.
  5. Write a for loop to iterate through every element in the array and print each element value with element index to the console.
  6. Transform array of objects into array of strings with help of map.
  7. Sort the worksDuration by duration and print.
*/