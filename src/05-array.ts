const numbers = [1, 2, 3, 4];

const strs:string[] = [];
const strs2:Array<string> = [];

strs.push('1');


const cars: Car[] = [];

cars.push({brand: 'Audi', wheels: 3, type: ''});


const arrOfArr: string[][] = [];
arrOfArr.push(['', '']);

function printArr(arr: unknown[]):void {
    arr.forEach((el, index, array) => {
        console.log(el, index)
    })
}