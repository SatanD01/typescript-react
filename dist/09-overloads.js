"use strict";
function add(a, b) {
    return a + b;
}
add('1', '2');
add(1, 2);
function AsyncSum(a, b, cb) {
    const result = a + b;
    if (cb) {
        return cb(result);
    }
    return Promise.resolve(result);
}
AsyncSum(1, 2);
