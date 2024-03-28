// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[]

type Guitarists = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray,
};

type UserId = stringOrNumber


//here where there is a difference between type and interface. 
// you CANT use type alias inside of a interface
// you CAN put alias inside of aliases

// doesnt work here: interface PostId = stringOrNumber
// think of interface as more as objects and classes

//type is more like alias or type script type you can assign

type userId = stringOrNumber

// literal types
let myName: 'Dave';


let userName: 'Dave' | "John" | 'Amy'
userName = 'Amy'

//keeps code DRY: Do Not Repeat Yourself

// functions

const add = (a: number, b: number): number => {
    return a + b;
}

const logMsg = (message: any): void =>{
    console.log(message);
}

logMsg("Hello!")
logMsg(add(2,3))

let subtract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//      (a: number, b: number): number 
//     }
//interface is more classes and when you need to extend those
//aliases for functions and basic types


let mutiply: mathFunction = function(c,d) {
    return c * d
}

logMsg(mutiply(2,2))

// optional parameters
const addAll = (a: number, b: number, c?: number): number =>{
    //type guard
    if(typeof c !== 'undefined'){
        
        return a + b + c;
    }
    return a + b ;
}

// another way to make a optional parameter implicitly is by using default parameter.
const sumAll = (a: number = 10, b: number, c: number = 2): number =>{
    //type guard
    return a + b + c ;
}

logMsg(addAll(1,3,2))
logMsg(addAll(2,3))
logMsg(sumAll(2,3))
logMsg(sumAll(undefined,3))


// Rest Parameters kind of means like the rest of the paramters if you have two parameters where the first one goes in
//and the rest go into the second parameter and they get represented as an array. turns rest of elements
// into array in the parameter

const total = (a: number, ...nums: number[]): number =>{
    return a + nums.reduce((prev,curr) => prev + curr)

}

logMsg(total(1,2,3,4));

// never type for functions that explicitly throw errors or has infinite loop inside
const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

// const infinite = () => {
//     let i: number = 1
//     while (true){
//         i ++ 
//         if (i > 100){
//             break
//         }
//     }
// }


// custom type guard
const isNumber = (value: any): boolean =>{
    return typeof value === 'number' ? true : false
}

// use of the never type
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
}

/*
aws certified dev asscoiate course

*/