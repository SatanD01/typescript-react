"use strict";
function printPoint(point) {
    console.log(`Coordinates of the point is x: ${point.x} and y: ${point.y}`);
}
// В функциональных объектах если будем передавать в них объекты то не важно сколько будет в них объектов
// главное применить указанные объекты x и y
// Ниже пример:
const obj1 = {
    x: '1',
    y: '2'
};
printPoint(obj1);
const obj2 = {
    x: '1',
    y: '2',
    z: '3'
};
printPoint(obj2);
// Когда мы передаем не известные параметр в функциональном объекте то надо написать условие что бы докозать существование переменной
function printName(user) {
    console.log(`Hello, ${user.firstName.toUpperCase()}`);
    if (user.lastName) {
        console.log(`Nice to meet you Mr.${user.lastName.toUpperCase()}`);
    }
}
printName({ firstName: 'James' });
printName({ firstName: 'James', lastName: 'Hooks' });
