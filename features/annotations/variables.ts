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
