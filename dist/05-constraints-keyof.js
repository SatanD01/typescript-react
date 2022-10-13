"use strict";
// Так мы ограничиваем входной параметр для функции через keyof
function prop(key, obj) {
    return obj[key];
}
const obj1 = { a: 1, b: 2, c: 3 };
prop('a', obj1);
// невозможно передать ключь несуществующего объекта
// prop('d', obj1);
// interface Laptop {
//     brand: string,
// }
//
// type F = Laptop["brand"]
