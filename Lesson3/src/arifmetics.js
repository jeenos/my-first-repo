const int1 = 12;
const int2 = 64;

const str1 = '777';
const str2 = 'string';

const bool1 = true;
const bool2 = false;

console.log('sum');
console.log(int1 + int2 + bool1);
console.log(int1 + str1);
console.log('');

console.log('difference');
console.log(String(int2 - int1));
console.log(String(int2 - str1));
console.log(Number(bool1) - Number(str1));
console.log('');

console.log('devide');
console.log(str1 / str2);
console.log(String(bool2) / str2);
console.log(bool2 / str1);
console.log(bool1 / bool2);
console.log('');

console.log('devide%');
console.log(int2 % Number(bool1));
console.log(int1 % Number(str1) % bool2);
console.log('');

console.log('multy-multy');
console.log(int1 ** int2);
console.log(int1 ** str1);
console.log(int1 ** bool1 ** Number(str1));
console.log('');

console.log('multyply');
console.log(int1 * int2);
console.log(int1 * str1 * bool1);
console.log(int2 * bool2 * Number(str2));

