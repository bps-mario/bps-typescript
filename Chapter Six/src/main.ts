// // Classes

// class Coder {
//     //properites and methods are called members
//     //need property in class

//     //and need to be named in constructor
//     constructor(public readonly name: string, public music: string, private age: number, protected lang: string) {
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang

//     }
//     // this stuff above is really redundant there is something that can do to avoid this using visibility modifers or visiblity members
// }

class Coder {

    secondLang!: string // means you know what your doing and that your not gonna intalize right away using a assertion

    //constructor
    constructor(public readonly name: string, public music: string, private age: number, protected lang: string  = "Typescript") {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
        //assignment in the body of the constructor are not required here. but its okay if you do.

    }

    //method
    public getAge() {
        // template literal
        return `Hello, I'm ${this.age}`

    }
}
// protected can be accesesd inside of the class but can also be accesed inside of a derived class like a subclass
// but you would not be able to access private in a subclass but can only be accessed inside of this class

const Dave = new Coder('Dave','rock', 42)
console.log(Dave.getAge())
// console.log(Dave.age)
// console.log(Dave.lang)


class WebDev extends Coder{
    constructor(public computer: string, name: string, music: string, age: number)
    {
        super(name, music, age) //needs super that recieves everything your getting from parent class coder
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Mac','Sara', "lofi", 25)
console.log(Sara.getLang())
// console.log(Sara.age)
// console.log(Sara.lang)
//////////////////////////////////
//applying interface to class or implementing interface to class

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician{
    name: string
    instrument: string

    constructor(name: string, instrument: string){
        this.name = name
        this.instrument = instrument
    }

    play(action: string){
        return ` ${this.name} ${action} the ${this.instrument}` //template literal
    }
}

const Page = new Guitarist("jimmy","guitar")
console.log(Page.play("flicks"))

//////////////////////////////////////////


class Peeps {
    static count: number = 0 // what static keyword does is that count does not apply to any 
    //instantiation of the class it applies to class directly itself.

    //applies to the class directly 
    static getCount(): number{
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {

        this.name = name;
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Peeps')

console.log(John.id)
console.log(Amy.id)
console.log(Steve.id)
console.log(Peeps.count)
////////////////////////////////////////////

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []

    }

    public get data(): string[]{ // special get keyword to get our data where its a private 
        return this.dataState;
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')){
            this.dataState = value
            return 

        } else throw new Error('Param is not an array of strings')
    }

}

const MyBands = new Bands()
MyBands.data = ['Neil young', 'Led Zep']
console.log(MyBands.data)
MyBands.data = [...MyBands.data,'ZZ Top']
console.log(MyBands.data)
