"use strict";
// Array<string> - generic
// string[] - standard
// Promise<number>
function toArray(...arg) {
    return arg;
}
toArray(1, 2, 3);
toArray('ad', 'as');
function head(value) {
    return value[0];
}
head(['asd', 'asd']);
const head1 = (value) => value[0];
const obj = {
    title: 'asd',
    value: 12
};
// obj.value = true
const obj2 = {
    title: "1123d",
    value: [21312]
};
