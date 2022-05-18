// Working with variables
let user = 'John Doe';
console.log(user);

const student = 'Irina Kulai';
console.log(student);

user = student;
console.log(user); // Irina Kulai

// Working with primitives
let test = 1;
test += 1;
const result1 = `${test}1`;
console.log(result1); // 21

const result2 = test - 1;
console.log(result2); // 1

const testBool = Boolean(test);
console.log(testBool); // true

// Array task 1
const arr1 = [2, 3, 5, 8];
let result = 1;
for (let i = 0; i < arr1.length; i += 1) {
  console.log((result *= arr1[i]));
}

// Array task 2
const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i += 1) {
  if (arr2[i] > 5 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
}

// Array task 3
const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr3.length; i += 1) {
  if (arr3[i] % 2 === 0) {
    console.log(arr3[i]);
  }
}

// Functions - part 1
// Palindrome function
console.log('function palindrome');

function palindrome(word) {
  const arrWord = word.split('');
  const lengthWord = arrWord.length;
  const halfLengthWord = Math.floor(lengthWord / 2);

  for (let i = 0; i < halfLengthWord; i += 1) {
    if (arrWord[i] !== arrWord[lengthWord - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome('шалаш'));

// function min(a, b)
console.log('function min(a, b)');

function min1(a, b) {
  if (a < b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
min1(15, 6);

// function min2(a, b) {
//   a < b ? console.log(a) : console.log(b);
// }
// min2(15, 6);

// function max(a, b)
console.log('function max(a, b)');

function max1(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
max1(15, 6);

// function max2(a, b) {
//   a > b ? console.log(a) : console.log(b);
// }
// max2(15, 6);

// Replacing array elements

function replacingElements(elements) {
  for (let i = 0; i < elements.length; i += 1) {
    if (elements[i] === 0) {
      console.log('zero');
    } else if (elements[i] % 100 === 0) {
      console.log(`${elements[i] / 100}zerozero`);
    } else if (elements[i] % 10 === 0 && elements[i] / 10 < 10) {
      console.log(`${elements[i] / 10}zero`);
    } else {
      console.log(elements[i]);
    }
  }
}

console.log('Generated array');

const elements = [];

for (let i = 0; i < 10; i += 1) {
  elements[i] = Math.floor(Math.random() * 101);
  console.log(elements[i]);
}

console.log('Converted array');

replacingElements(elements);

console.log('Generated array');

// Functions - part 2

console.log('The function returns the sum');

function sum(a) {
  return function arg(b) {
    return a + b;
  };
}

console.log(sum(5)(2));

module.exports = sum;
