import React from "react";

const Problems = () => {
  // const students = ["Ahmed", "Bob", "Amr", "karma", "Abdo"];

  // const findStudent = (students, name) => {
  //   for (let i = 0; i < students.length; i++) {
  //     if (students[i] === name) {
  //       return console.log(true);
  //     }
  //   }

  //  return console.log(false);
  // };

  // findStudent(students, "Bob");

  //   const isEmpty = function (obj) {
  //     if (typeof obj === "object" && Object.keys(obj).length !== 0) {
  //       return false;
  //     } else if (Array.isArray(obj) && obj.length !== 0) {
  //       return false;
  //     } else return true;
  //   };

  //   console.log(isEmpty({ x: 5, y: 42 }));

  // const plianString = "Ali";

  // const emptyArray = [];

  // for (let i = 0; i < plianString.length; i++) {
  //   emptyArray.push(plianString[i]);
  // }

  // console.log(emptyArray.reverse().join(""));

  // const transfromString = (n) => {
  //   const plain = n.toString().split().reverse().join("");
  //   return parseInt(plain)
  // };

  // console.log(transfromString(321));

  // const fizzBuzz = (n) => {

  //   let plianstring = "";

  //   for (let i = 1; i <= n; i++) {
  //     plianstring += i;
  //   }

  //   if (n % 3 === 0 && n % 5 === 0) {
  //     return (plianstring = "FizzBuzz");
  //   } else if (n % 3 === 0) {
  //     return (plianstring = "Fizz");
  //   } else if (n % 5 === 0) {
  //     return (plianstring = "Buzz");
  //   }
  //   return plianstring;
  // };

  // console.log(fizzBuzz(15));

  // const minNum ()

  // const chunck = (array, size) => {

  //   const chunkedArray = [];

  //   for (let i = 0; i < array.length; i += size) {

  //     const chunky = array.slice(i, i + size);

  //     chunkedArray.push(chunky);
  //   }

  //   return chunkedArray;
  // };

  // console.log(chunck([1, 2, 3, 4, 5, 6, 7], 3));

  // not completed yet
  // const findtarget = (array, target) => {

  //   for (let i = 0; i < array.length; i++) {

  //     if (array[i] + array[i + 1] === target) {
  //       return [array[i], array[i + 1]];
  //     }

  //   }

  //   return [];
  // };

  // console.log(findtarget([1, 4, 3, 2, 5, 6], 6));

  // let giveNumber = 5;

  // switch (giveNumber) {
  //   case 1:
  //     giveNumber = "sunday";
  //     break;
  //   case 2:
  //     giveNumber = "monday";
  //     break;
  //   case 3:
  //     giveNumber = "Thursday";
  //     break;
  //   case 4:
  //     giveNumber = "wednesday";
  //     break;
  //   case 5:
  //     giveNumber = "tuesday";
  //     break;
  //   case 6:
  //     giveNumber = "friday";
  //     break;
  //   case 7:
  //     giveNumber = "saturday";
  //     break;

  //   default:
  //     giveNumber = "invalid number";
  // }

  // const string = "Hello World!";

  // function reverseString(str) {
  //   let array = [];

  //   for (const char of str) {
  //     array.unshift(char);
  //   }

  //   return array.join("");
  // }

  // let ons = 1;

  // const oneRun = () => {
  //   console.log("z,mcxvnzx");

  //   ons = null;
  // };

  // ons && oneRun();

  // const person = { name: "John", age: 30, city: "New York" };
  // const SkipTheFirst = (person) => {
  //   for (const key in person) {
  //     if (ons !== null) {
  //       console.log(`${key} : ${person[key]}`);
  //     }
  //     ons = 1;
  //   }
  // };

  // SkipTheFirst(person);

  // const mulText = "Hello my name name name is Abdo";

  // const wordCounter = (str) => {
  //   const obj = {};
  //   const lowerText = str.toLowerCase();
  //   const wordsList = lowerText.split(" ");

  //   for ( const word of wordsList ) {
  //     if (obj[word]) {
  //       obj[word]++;
  //     } else {
  //       obj[word] = 1;
  //     }
  //   }

  //   return obj;
  // };

  // console.log(wordCounter(mulText));

  // const target = 15;
  // const array = [5, 1, 11, 14];

  // const findTarget = (array, target) => {
  //   const numMap = {};

  //   for (let i = 0; i < array.length; i++) {
  //     const compliment = target - array[i];

  //     if (numMap.hasOwnProperty(compliment)) {
  //       return [numMap[compliment], i];
  //     }

  //     numMap[array[i]] = i;
  //   }

  //   return [];
  // };

  // console.log(findTarget(array, target));

  // let result = 1;
  // const recursivefunction = (n) => {
  //   if (n === 0) {
  //     return result
  //   }
  //   console.log(n);
  //   result *= n;

  //  return recursivefunction(n - 1);
  // };

  // console.log(recursivefunction(5));

  // const storeInventory = {
  //   apple: 10,
  //   banana: 5,
  //   orange: 0,
  //   pineapple: 7,
  // };

  // for (const [key, value] of Object.entries(storeInventory)) {
  //   if (value === 0) {
  //     console.log(`${key} is out of Stock`);
  //   } else {
  //     console.log(`${key} has ${value} left`);
  //   }
  // }

  // const arr = [
  //   ["key1", "value1"],
  //   ["key2", "value2"],
  //   ["key3", "value3"],
  // ];

  // const obj = Object.fromEntries(arr);

  // console.log(obj);

  // let fruits = ["apple", "banana", "mango"];

  // fruits.forEach((fruit) => {
  //   console.log(fruit);
  // });

  // Skit an element
  // let fruits = ["apple", "mango", "banana"];

  // fruits.forEach(function (fruit) {
  //   if (fruit === "banana") return;
  //   console.log(fruit);
  // });

  // const factorial = (number) => number === 0 ? 1 : number * factorial(number - 1);

  // const array = [5, 4, 1, 2, 7, 8, 3, 9, 6];
  // const sortArray = (array) => {
  // Bubble Sort
  //   for (let i = array.length - 1; i > 0; i--) {
  //     for (let j = 0; j < i; j++)
  //       if (array[j] > array[j + 1]) {
  //         let temp = array[j];
  //         array[j] = array[j + 1];
  //         array[j + 1] = temp;
  //       }
  //   }

  //   return array;
  // };

 function merge(left, right) {
   let i = 0;
   let j = 0;

   const result = [];

   // Compare elements from both arrays and merge them
   while (i < left.length && j < right.length) {
     if (left[i] < right[j]) {
       result.push(left[i]);
       i++;
     } else {
       result.push(right[j]);
       j++;
     }
   }

   // Append any remaining elements from the left array
   result.push(...left.slice(i));

   // Append any remaining elements from the right array
   result.push(...right.slice(j));

   return result;
 }

 const res = merge([3, 27, 38, 43], [9, 10, 17, 82]);

 console.log(res);


  return (
    <div className="text-center">
      <h1 className="text-center">Problem Solving</h1>;
    </div>
  );
};

export default Problems;
