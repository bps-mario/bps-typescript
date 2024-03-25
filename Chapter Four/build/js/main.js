"use strict";
// literal types
let myName;
let userName;
userName = 'Amy';
//keeps code DRY: Do Not Repeat Yourself
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//      (a: number, b: number): number 
//     }
//interface is more classes and when you need to extend those
//aliases for functions and basic types
let mutiply = function (c, d) {
    return c * d;
};
logMsg(mutiply(2, 2));
// optional parameters
const addAll = (a, b, c) => {
    //type guard
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// another way to make a optional parameter implicitly is by using default parameter.
const sumAll = (a = 10, b, c = 2) => {
    //type guard
    return a + b + c;
};
logMsg(addAll(1, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
