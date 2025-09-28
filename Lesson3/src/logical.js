const a = 12;
const b = '55';
const c = true;

console.log('logical AND');
console.log(a > b && b > 5 && c == 1);
console.log(a > c && b > 5 && c >= 1);
console.log('');

console.log('logical OR');
console.log(a > b || b >= 10 || c < a);
console.log(a > c || b > 10 || c > b);
console.log('');

console.log('logical NOT');
console.log(!(a > b < c));
console.log(!(a > c == 1 > b));
console.log('');
