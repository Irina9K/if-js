// Working with variables
let user = 'John Doe';
console.log(user);

let student = 'Irina Kulai';
console.log(student);

user = student;
console.log(user); // Irina Kulai

// Working with primitives
let test = 1;
++test;
let result1 = test + '1';
console.log(result1); // 21

let result2 = test - 1;
console.log(result2); // 1

let testBool = Boolean(test);
console.log(testBool); // true

// Array task 1
let arr1 = [2, 3, 5, 8];
let result = 1;
for (let i = 0; i < arr1.length; i++) {
  console.log((result *= arr1[i]));
}

// Array task 2
let arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 5 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
}

// Array task 3
let arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 === 0) {
    console.log(arr3[i]);
  }
}

// Functions - part 1
// Palindrome function

function palindrome(word) {
  let arrWord = word.split('');
  for (let i = 0; i < arrWord.length; i++) {
    if (arrWord[i] === arrWord[arrWord.length - ++i]) {
      console.log(true);
    } else console.log(false);
  }
}
palindrome('шалаш');

// function min(a, b)
function min1(a, b) {
  if (a < b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
min1(15, 6);

function min2(a, b) {
  a < b ? console.log(a) : console.log(b);
}
min2(15, 6);

// function max(a, b)
function max1(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
max1(15, 6);

function max2(a, b) {
  a > b ? console.log(a) : console.log(b);
}
max2(15, 6);

// Replacing array elements
let elements = [10, 45, 20, 35, 30, 25, 40, 15, 50, 100];

function replacingElements() {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] % 10 === 0 && elements[i] / 10 < 10) {
      console.log(elements[i] / 10 + 'zero');
    } else if (elements[i] % 100 === 0) {
      console.log(elements[i] / 100 + 'zero' + 'zero');
    } else {
      console.log(elements[i]);
    }
  }
}
replacingElements(elements);
