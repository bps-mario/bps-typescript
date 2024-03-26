//type assertion or type casting
type One = string
type Two = string | number
type Three = 'hello'

//convert
let a: One = 'hello'
let b = a as Two // assigned to a less specific type
let c = a as Three // assigned to a more specific type

// using angle brackets
let d = <One> 'world'
let e = <string | number> 'world'
//angle brackets cant be used in jsx files which are in react


const addOrConcat = (a: number, b: number, c: 'add' | "concat"): number | string => {
    if( c === 'add') return a + b
    return '' + a + b

}

let myVal: string = addOrConcat(2,2,'concat') as string;

// Be Careful! TS sees no problem but a string is returned
let myNextVal: number = addOrConcat(2,2,'concat') as number;

// althought typescript will still check asserstions when it can
// 10 as string

//forced casting or double casting unknow is kinda like any but you cant use unknown type anywhere unless you use it like belowj
(10 as unknown) as string

//The DOM
const img = document.querySelector('img')!
const myImg = document.getElementById('#img')! as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')

img.src
myImg.src