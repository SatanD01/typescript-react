"use strict";
let word = null;
const num = 1;
if (num > 5) {
    word = 'abc';
}
console.log(word.toUpperCase());
function printName(name) {
    const fullName = name;
}
function printName2(person) {
    console.log(person.name);
}
const people = [
    {
        name: 'Gran',
        age: 70,
        sex: 'male'
    },
    {
        name: 'Twin',
        age: 10,
        sex: 'female'
    },
    {
        name: 'Lucy',
        age: 21,
        sex: 'female'
    },
    {
        name: 'David',
        age: 19,
        sex: 'male'
    },
];
const femalePeople = people.find(person => person.sex === 'female');
// Восклицательный знак используется для конкретизации возврощаемого элемента. Что она точно есть и она не undefined
