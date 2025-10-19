function sumArray(arr: number[] | string[]): number | string | undefined {
    if (arr.every(el => typeof el === 'number')) {
        const sum = (arr as number[]).reduce((a, b) => a + b, 0);
        console.log('Масив чисел:', arr, '=', sum);
        return sum;
    }

    else if (arr.every(el => typeof el === 'string')) {
        const concat = (arr as string[]).join(' ');
        console.log('Масив рядків:', arr, '=', concat);
        return concat;
    }

    return undefined;
}

const numbers: number[] = [1, 2, 3, 50, 100, 10000000];
const strings: string[] = ['Yevgen', 'QA', 'liles', 'JS code', 'too much'];

const resultNumbers = sumArray(numbers);
const resultStrings = sumArray(strings);

console.log('Array numbers:', resultNumbers);
console.log('Array strings:', resultStrings);
