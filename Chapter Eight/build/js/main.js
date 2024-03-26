"use strict";
// Finally Generics
//what are Generics and why do we need them?
// Idea of typescript is to define strict types for type safe developer exprience must be detailed as possible
// however Typescript allows for generics because sometimes we dont know what types might be passed into function interface, type alias , class / all of the above
// provides a placeholder, a type variable kinda
//
const stringEcho = (arg) => arg;
//this function is fine but it is dedicated to a string/
//only works with string type 
// what if we wanted some generic function and abstract the string out so it works with any function
const echo = (arg) => arg;
// uses type parameter/ type variable
// most commonly used is T for type or typescript
//made generic works with any type passed in
//useful for utility functions where you arent sure what type your going to pass in.
//maybe check if its a certain type
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
// null and array show up as object when using typeof
console.log(isObj(true));
console.log(isObj('john'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'john' }));
console.log(isObj(null));
//another example of a utility function
//one good sign or indication you need generic is when your function needs to some logic
//or thinking about what it needs to return 
// type variable place holder <T>
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Dave'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
//narrowing the generic type so now the type needs to have a id property.
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: 'Dave' }));
//console.log(processUser({ name: 'Dave'}))
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
const myState = new StateObject([15]);
myState.state = (['Dave', 42, true]);
console.log(myState.state);
//questions to think about
// when compling typescript to javascript how to get javascript to not get uploaded to github
//what is difference between object and array
//
