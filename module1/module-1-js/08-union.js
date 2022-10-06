"use strict";
// В Union типах используется ограниценное количество переменных и их уточнение в дальнейшем в функциях
const staticX = "loading";
const arr = [];
function printId(id) {
    // Так приводится уточнение типа переменной
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
function welcome(person) {
    // Так уточняется если переменная массив из 2 переменных
    if (Array.isArray(person)) {
        console.log('hello', person.join(' '));
        return 1;
    }
    else {
        console.log('hello', person);
        return person;
    }
}
