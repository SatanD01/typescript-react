"use strict";
// обычная Функция
function sum(a, b) {
    return a + b;
}
// Стрелочная Функция
const sum2 = (a, b) => {
    return a + b;
};
// Функция в переменной
const sum3 = function (a, b) {
    return a + b;
};
// Вызов функции
sum(1, 2);
// Функция String с не обязательным передоваемым параметром и функция ничего не возвращаед
function log(name, userId) {
    console.log('hello', name, 'with Id', userId || 'anonym');
}
log('Sam', '12');
// Функция которая никогда не закончит свое выполнение при ошибке
function crash() {
    throw new Error('crash');
}
// Функция с массивным типом передаваемого параметра
function average(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
