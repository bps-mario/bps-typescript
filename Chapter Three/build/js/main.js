"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'john';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
let test = [];
let bands = [];
bands.push("Van Halen");
bands.push;
// Tuple specific length and specic data type for each element.
let myTuple = ["Dave", 42, true];
let mixed = ["John", 1, false];
myTuple[2] = true;
myTuple[1] = 1;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {}; // my object is equal to a object ({})
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = "John";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", 'IV']
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
};
console.log(greetGuitarist(evh));
// Enums
// "Unlike most TypeScript features, Enums are not a type-level 
//addition to JavaScript but something added to the language and runtime. "
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
