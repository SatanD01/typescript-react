"use strict";
// Enum это такой же тип как и Union только более универсальней
// Внем передается переменная а уже через знак присвоение его значение
// Как по мне она лучше чем Union тип, так как даже если мы изменим знаение переменной
// Код не сломается
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 1] = "Circle";
    ShapeKind[ShapeKind["Square"] = 2] = "Square";
})(ShapeKind || (ShapeKind = {}));
const myShape = ShapeKind.Circle;
const circle1 = {
    radius: 2,
    kind: ShapeKind.Circle
};
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ERROR"] = 500] = "ERROR";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["NOT_AUTH"] = 403] = "NOT_AUTH";
})(StatusCode || (StatusCode = {}));
var Grades;
(function (Grades) {
    Grades["Junior"] = "junior";
    Grades["Middle"] = "middle";
    Grades["Senior"] = "senior";
})(Grades || (Grades = {}));
const dev2 = {
    level: Grades.Junior,
    login: 'mish',
    skills: ['Js', 'React']
};
function upGrade(user) {
    if (user.level === Grades.Junior) {
        user.level = Grades.Middle;
    }
    else if (user.level === Grades.Middle) {
        user.level = Grades.Senior;
    }
}
