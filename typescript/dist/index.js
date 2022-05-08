"use strict";
let id = 5;
console.log(`id : ${id}`);
let person = [1, 'Ivan', true];
// union
let pid = '22';
pid = 22;
//enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
})(Direction || (Direction = {}));
console.log(Direction.Up);
var DirectionFancy;
(function (DirectionFancy) {
    DirectionFancy["Up"] = "Up";
})(DirectionFancy || (DirectionFancy = {}));
console.log(DirectionFancy.Up);
const user = {
    id: 22,
    name: 'Ivan'
};
const user1 = {
    id: 22,
    name: 'IVAN'
};
// type assertion
let cid = 1;
let customerId = cid;
let customerIdAs = cid;
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
let horse = {
    id: 1,
    animal: 'horse'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const ivan = new Person(1, 'Ivan');
console.log(ivan, ivan.register());
class Employee extends Person {
    constructor(id, name, job) {
        super(id, name);
        this.job = job;
    }
}
const employee = new Employee(3, 'Shawn', "software");
console.log(employee);
// generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
console.log(numArray);
