function sumArray(arr) {
    if (arr.every(el => typeof el === 'number')) {
        const sum = arr.reduce((a, b) => a + b, 0);
        console.log('Масив чисел:', arr, '=', sum);
        return sum;
    }

    else if (arr.every(el => typeof el === 'string')) {
        const concat = arr.join(' ');
        console.log('Масив рядків:', arr, '=', concat);
        return concat;
    }
}
const numbers = [1, 2, 3, 50, 100, 10000000];
const strings = ['Yevgen', 'QA', 'liles', 'JS code', 'too much'];

const resultNumbers = sumArray(numbers);
const resultStrings = sumArray(strings);

console.log('Array numbers:', resultNumbers);
console.log('Array strings:', resultStrings);