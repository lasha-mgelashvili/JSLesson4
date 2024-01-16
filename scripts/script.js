// 1

let array2 = [14, 150, "css", null, "javascript", 25];

let newArray2 = array2.map((item2) =>
  typeof item2 == "number"
    ? item2 ** 2
    : typeof item2 == "string"
    ? item2.toUpperCase()
    : item2
);
console.log(newArray2);

// 2

let info = "good day";

let takedInfo = info.split(" ").slice(1);

console.log(takedInfo);

// 3

function strLenght(string) {
  return string.length;
}

let stringLenght = "jupiter";

let result1 = strLenght(stringLenght);

console.log("string lenght is: " + result1);

// 4

let answer = prompt("which is Georgia's capital city?");

let correctAnswer = "tbilisi";

if (answer.toLowerCase() == correctAnswer) {
  alert("correct");
} else {
  alert("incorrect");
}

// 5

let fruits = ["apple", "mango", "avocado", "kiwi"];

fruits.splice(-1, 1, "strawberry");

console.log(fruits);

// 6

let newArray6 = [5, 25, 89, 120, 36];
newArray6.push("javascript", "python");
newArray6.unshift("html", "css");
console.log(newArray6.length);

// 7

let array7 = ["orange", "kiwi", "banana"];
//  console.log(array7.length);
array7.push("apple", "pineapple");
array7.unshift("wattermelon");
// console.log(array7.length);
array7.splice(2, 0, "mango");
array7.pop();
array7.shift();
console.log("there are " + array7.length + " elements in the array");

// 8    ?????? this is not in the homeworks.

// 9

let array3 = [1, 2, 3, 4, 5];
array3.splice(3, 0, "a", "b", "c");
console.log(array3);

// 10

let array5 = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray5 = array5.map((item5) => item5 / 3);

console.log(newArray5);

// 11

let array11 = [15, 100, 25, 10, 36];

array11.splice(3, 1);

console.log(array11);

// 12

let array8 = [1, 2, 3, 4, 5];

array8.splice(2, 1, "three");
console.log(array8);
