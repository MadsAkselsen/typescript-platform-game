const carMakers: string[] = [];
const dates = [new Date(), new Date()];

let carsByMake: string[][];

carsByMake = [['f150', 'f234'], ['corolla'], ['camoro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
importantDates.push('2030-10.10');
importantDates.push(new Date());
