// Так мы ограничиваем входной параметр для функции через keyof

function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
    return obj[key];
}

const obj1 = {a: 1, b: 2, c: 3}

prop('a', obj1);
// невозможно передать ключь несуществующего объекта
// prop('d', obj1);


// interface Laptop {
//     brand: string,
// }
//
// type F = Laptop["brand"]