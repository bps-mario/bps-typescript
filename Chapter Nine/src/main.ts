// Utility Types

//many utilites for common type transformations

//first type partial

interface Assignment{
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean, //optional
}

//partial means not all the props only the ones we want to update
// we can specify only some of the props.
// only the props we pass in 
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

console.log(updateAssignment(assign1, {grade: 95}))
const assignGraded: Assignment = updateAssignment(assign1, {grade: 95})


// Required and Readonly
// when putting required utility type all properties of type are required regardless if they are optional 
// in the type
const recordAssignment = (assign: Required<Assignment>): Assignment =>{
    //send to database, etc.
    return assign
}

//Readonly does not let you modify props
const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
}

recordAssignment({...assignGraded, verified: true})


//most popular utility type
// record type

const hexColorMap: Record<string , string> = {
    red: "FF000",
    green: "00FF00",
    blue: "0000FF",
}

type Students = 'Sara' | 'Kelly'
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> ={
    Sara: "B",
    Kelly: "U"
}

interface Grades{
    assign1: number,
    assign2: number,
}

const gradeData: Record <Students, Grades> = {
    Sara: { assign1: 85, assign2: 93},
    Kelly: {assign1: 76 , assign2: 15}
}

// useful types that go hand and hand

type AssignResult = Pick<Assignment, "studentId" | "grade" >
const score: AssignResult = {
    studentId:"k123",
    grade: 85
}

type AssignPreview = Omit<Assignment, "grade" | "verified">
const preview: AssignPreview = {
    studentId: "k123",
    title: "Final PR"

}

// these utilites are being applied with an interface types 
// Exclude and Extract 
// these types dont work with interface they only work with string literal union types

type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A" | "B">

// Nonnullable

type AllPossibleGrades = "Dave" | "John" | null | undefined

type NamesOnly = NonNullable<AllPossibleGrades>

// ReturnType 

//type newAssign = {title: string, points: number}

const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

type newAssign = ReturnType<typeof createNewAssign>

const tsAssign: newAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)

// Parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: newAssign = createNewAssign(...assignArgs)

console.log(tsAssign2)

// final utilty type and most new utility
// Awaited = helps us with the ReturnType of a Promise

interface User{
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if(err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))