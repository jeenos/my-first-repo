const anyArray = [1, true, 'string', {name : 'Yevgen'} ];
anyArray.forEach( (item, index)  => {
    console.log(` anyArray[${index}] = ${item} `);
});
const updateAny = anyArray.map(obj => typeof obj);
console.log(updateAny);
console.log('');

const stringArray = ['Yevgen', 'learn', 'javascript'];
stringArray.forEach((item, index) => {
    console.log(` stringArray[${index}] : ${item} `);
});
const upperString = stringArray.map( str => str.toUpperCase());
console.log(upperString);
console.log('');

const booleanArray = [true, false, false, true];
booleanArray.forEach ((value, index) => {
    console.log(` booleanArray[${index}] is ${value} `);
});
const newBoolean = booleanArray.map(bool => bool ? "Tak" : "Hi");
console.log(newBoolean);
console.log('');

const intArray = [1, 100, 10000000000000000009090909090n, 0o1];
intArray.forEach((value, index) => {
    console.log( `intArray[${index}] equels ${value}`);
});
const newInt = intArray.map(int => int ++);
console.log(newInt);

