"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function example1(x) {
    if (typeof x === "number") {
        x.toFixed();
    }
    else if (typeof x === "string") {
        x.toUpperCase();
    }
    else if (x === undefined) {
        console.log('no value');
    }
    else {
        x;
    }
}
function example2(strs) {
    // if (typeof strs === "object"){}
    if (strs && typeof strs === "object") {
        strs.push();
    }
    else if (typeof strs === "string") {
        strs.toUpperCase();
    }
}
// если надо сузить тип 2 объектов то мы используем instanceof в условии
function example3(x) {
    if (x instanceof Date) {
        x.getFullYear();
    }
    else {
        x.concat();
    }
}
function move(animal) {
    if ('swim' in animal) {
        return animal.swim();
    }
    return animal.fly();
}
