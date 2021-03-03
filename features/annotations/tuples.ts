const drunk = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ['brown', true, 40];

pepsi[0] = 'newColor';

// tubles are arrays where the items have to be in a specific order. E.g. pepsi[0] can must be a string

type Drink = [string, boolean, number]; // this is not an array, but a type

//const pepsi: Drink = ['brown', true, 40]; // this is the same as the above pepsi variable
const sprite: Drink = ['yellow', true, 30];
const tea: Drink = ['brown', false, 0];

// difference between tuble and object. shows how difficult the values of tubles are to understand. In objects the values are mapped to keys
const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsePower: 400,
  weight: 3354,
};
