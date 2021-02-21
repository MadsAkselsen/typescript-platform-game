// the below code is for demonstration purposes. Normally, type annotations won't be used when both the variable and value are initiaized on the same line - that's where we want to rely on inference
// when to use type annotations:
// 1. when we declare a variable on one line then initialize it later
// 2. when we want a variable to have a type that can't be inferred
// 3. when a function returns the 'any' type and we need to clarify the value
var apples = 5;
var speed = 'fast';
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
// built in objects
var now = new Date();
// Arrays
var colors = ['red', 'green', 'blue'];
var myNumbers = [1, 2, 3];
var truths = [true, true, false];
// Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// Object literal
var point = {
    x: 10,
    y: 20
};
// Function
var logNumber = function (i) {
    console.log(i);
};
// when to use type annotations:
// 1. when we declare a variable on one line then initialize it later
var json = '{"x",10, "y": 20}';
var coordinates = JSON.parse(json);
console.log(coordinates.y); // {x: 10, y: 20}
