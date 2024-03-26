// Index Signatures
// useful when creating an object but you dont know the exact name of the object keys
//but you know the shape of the object and can declare the type of the keys and type of the values

//another reason is because typescript requires index signature if you attempt to 
//access object property dynamically

//interface used as template when you define Class or Objects



interface TransactionObj {
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number
}

//readonly doesnt let you reassign

// //declaring a index signature for this interface
// interface TransactionObj{
//     readonly [index: string]: number // synatx almost like a property but uses bracket
//     // index or key after that all of the keys in this object in this key value pair
//     //are strings and all values will be numbers. remember you can use union types to have mutiple datatypes
//     //keys are usually strings. cannot be booleans
// }

const todaysTransactions: TransactionObj ={
    Pizza: -10, //property name and then value something its a method
    Books: -5,
    Job: 50
}

//could come a time when you dont know names when creating a interface in advance

console.log(todaysTransactions.Pizza) //dot notation
console.log(todaysTransactions['Pizza']) //bracket notation

// accessing method or property dynamically
let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

//or

const todayNet = (transactions: TransactionObj):
number => {
    let total = 0
    for (const transaction in transactions){
        total += transactions[transaction]
    }
    return total
}
//works in vaniall javascript but type script gives us an error same as above
console.log(todayNet(todaysTransactions))


console.log(todaysTransactions['Dave'])

///////////////////////////////////////////////////////
// interface Student {
//     name: string,
//     GPA: number,
//     classes?: number[],
// }

// const student: Student = {
//     name: "Doug",
//     GPA: 3.5,
//     classes: [100,200]

// }

//strict interface above

// console.log(student.test);

interface Student {
    //[key: string]: string | number| number[] | undefined
    name: string,
    GPA: number,
    classes?: number[],
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100,200]

}

// console.log(student.test);

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
    //keyof creates a union type of the specific string literals in the student interface.
    //lets you loop through the object. This using the assertion to turn it into type of 
    //key in student
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
    // if you dont know the type of the student object / interface of the student object is
    //we dont know we can use typeof and list the object itself.
})

const logStudentKey = (student: Student, key: keyof Student): void =>{
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, "name")



///////////////////////////////////////

// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle' // Union type of string literals

type Incomes = Record<Streams, number | string> // utility type Record
// this syntax is smaller and lets us use string literals as the different types
// lets you be more vague instead of strictly defining each property
// can be in type in streams and value can be eithe number or string 

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes]);
}
// still need to use keyof when using the utility type