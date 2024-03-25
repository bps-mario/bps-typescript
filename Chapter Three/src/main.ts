let stringArr = ['one', 'hey', 'Dave']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'john'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

let test = []
let bands: string[] = []
bands.push("Van Halen")
bands.push

// Tuple specific length and specic data type for each element.
let myTuple: [string, number, boolean] = ["Dave", 42, true]

let mixed = ["John", 1, false]

myTuple[2] = true 
myTuple[1] = 1 


// Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {} // my object is equal to a object ({})

const exampleObj = {
    prop1: "Dave",
    prop2: true,
}

exampleObj.prop1 = "John"

//type annotation for objects

// can also use interface instaed of type
//when to use interface or when to use type? interface when it something like a class
interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh:  Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp:  Guitarist = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", 'IV']
}

const greetGuitarist = (guitarist: Guitarist) =>{
    if (guitarist.name){
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
}

console.log(greetGuitarist(evh))


// Enums
// "Unlike most TypeScript features, Enums are not a type-level 
//addition to JavaScript but something added to the language and runtime. "

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,

}

console.log(Grade.U);