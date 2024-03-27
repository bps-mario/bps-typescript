let myName = 'Dave' // implicitly shown that it is string variable

let myName2: string = "Dave" // explicitly shown that it is a string 

let myName3: string ; //doesnt need to initalize value

let meaningOfLife: number;
let isLoading: boolean;
let album;

myName = 'John'
meaningOfLife = 42
isLoading = true
album = 5150

const sum = (a: number, b: string) =>{
    return a + b;
}

let postId: string | number;
let isActive: number | boolean | string; // not limited to only two data types

let re: RegExp = /\w+/g

