"use strict";
const numbers = [1, 2, 3, 4];
const strs = [];
const strs2 = [];
strs.push('1');
const cars = [];
cars.push({ brand: 'Audi', wheels: 3, type: '' });
const arrOfArr = [];
arrOfArr.push(['', '']);
function printArr(arr) {
    arr.forEach((el, index, array) => {
        console.log(el, index);
    });
}
