"use strict";
//convert
let a = 'hello';
let b = a; // assigned to a less specific type
let c = a; // assigned to a more specific type
// using angle brackets
let d = 'world';
let e = 'world';
//angle brackets cant be used in jsx files which are in react
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be Careful! TS sees no problem but a string is returned
let myNextVal = addOrConcat(2, 2, 'concat');
// althought typescript will still check asserstions when it can
// 10 as string
//forced casting or double casting unknow is kinda like any but you cant use unknown type anywhere unless you use it like belowj
10;
//The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
