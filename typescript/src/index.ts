let id: number = 5;

console.log(`id : ${id}`)

let person: [number, string, boolean] = [1, 'Ivan', true]

// union
let pid: string | number = '22'
pid = 22;

//enum
enum Direction {
    Up
}
console.log(Direction.Up);

enum DirectionFancy {
    Up = 'Up'
}

console.log(DirectionFancy.Up)


type User = {
    id: number,
    name: string
}

const user: {
    id: number,
    name: string
} = {
    id: 22,
    name: 'Ivan'
}
const user1: User = {
    id: 22,
    name: 'IVAN'
}

// type assertion
let cid: any = 1
let customerId = <number>cid
let customerIdAs = cid as number

function addNum(x: number, y: number): number {
    return x + y;
}
console.log(addNum(1, 2))

function log(message: string | number): void {
    console.log(message);
}

// interface
interface Animal {
    readonly id: number,
    animal: string,
    age?: number
}

let horse = {
    id: 1,
    animal: 'horse'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number) => x + y;
const sub: MathFunc = (x: number, y: number) => x - y;


// interface
interface Human {
    name: string
    register(): string
}
// classes
class Person implements Human {
    private id: number
    name: string


    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is registered`;
    }
}

const ivan = new Person(1, 'Ivan')
console.log(ivan, ivan.register())

class Employee extends Person {
    job: string

    constructor(id: number, name: string, job: string) {
        super(id, name)
        this.job = job;
    }
}

const employee = new Employee(3, 'Shawn', "software")

console.log(employee)

// generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4])
console.log(numArray)