"use strict";
const nums = [1, [1, 2, [2, 3, [2, 3]]]];
nums.push(1);
nums.push([2]);
nums.push([2, [2]]);
function isJSON(arg) { }
isJSON("hi");
isJSON(1);
isJSON({ a: [12], v: { x: 1 } });
isJSON([1, { x: '' }]);
// Рекурсивные типы, они как используются как универсальные типы. В них можно передать что угодно. Пример JSON но не так часто нам придется писать его самостоятельно