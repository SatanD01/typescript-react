type NestedNumbers = number | NestedNumbers[];

const nums: NestedNumbers = [1, [1,2,[2,3,[2,3]]]];
nums.push(1)
nums.push([2])
nums.push([2,[2]])

// JSON
type JSONPrimitive = string | number | boolean | null
type JSONObject = { [k: string]: JSONValue }
type JSONArray = JSONValue[]
type JSONValue = JSONPrimitive | JSONObject | JSONArray;


function isJSON(arg: JSONValue) {}

isJSON("hi");
isJSON(1);
isJSON({a: [12], v: {x: 1}});
isJSON([1, {x: ''}]);

// Рекурсивные типы, они как используются как универсальные типы. В них можно передать что угодно. Пример JSON но не так часто нам придется писать его самостоятельно