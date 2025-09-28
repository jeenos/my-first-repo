const a = 30;
const b = 60;
const c = 90;

if (a >= b && a >= c) {
    console.log('max = a');
} else if (b >= a && b >= c) {
    console.log('max = b');
} else {
    console.log('max = c');
}

console.log('---виконнання конструкцій---');
const max = (a >= b && a >= c)
    ? a : (b >= a && b >= c)
        ? b : c;
console.log("max =", max);
