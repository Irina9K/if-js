// Работа с переменными
let user = 'John Doe';
console.log(user);

let student = 'Irina Kulai';
console.log(student);

user = student;
// Irina Kulai
console.log(user);

// Работа с примитивами

let test = 1;
++test;
let result1 = test + '1';
// 21
console.log(result1);

let result2 = test - 1;
// 1
console.log(result2);

let testBool = Boolean(test);
// true
console.log(testBool);

// Задача с массивом 1
let arr1 = [2, 3, 5, 8];
let result = 1;
for (let i = 0; i < arr1.length; i++) {
  console.log((result *= arr1[i]));
}

// Задача с массивом 2
let arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 5 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
}

// Задача с массивом 3
let arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 === 0) {
    console.log(arr3[i]);
  }
}
