// the below code is for demonstration purposes. Normally, type annotations won't be used when both the variable and value are initiaized on the same line - that's where we want to rely on inference

// when to use type annotations:
// 1. when we declare a variable on one line then initialize it later
// 2. when we want a variable to have a type that can't be inferred
// 3. when a function returns the 'any' type and we need to clarify the value

let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Arrays
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use type annotations:
// 1. when we declare a variable on one line then initialize it later
const json = '{"x":10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // JSON.parse returns any, because the resulting javascript that it returns can be any type. We therefore have to define the type of coordinates
console.log(coordinates.y); // {x: 10, y: 20}

// 2. when we want a variable to have a type that can't be inferred
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3. variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
