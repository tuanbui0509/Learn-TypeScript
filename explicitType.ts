// EXPLICIT TYPE
let myName: string = 'Tuan'
let age: number
let isAuthenticated: boolean

myName = 'Duong';

//array
let students: string[] = ['nam', 'dung']

students.push('duong')
console.log(students);

//union
let mixed: (string | number | boolean)[] = []
mixed.push('aaa')
mixed.push(false)
mixed.push(123)
console.log(mixed);

let id: string | number
id = '123'
id = 123

let hobbies: 'book' | 'cook'
// hobbies = 'swim'

// object

let person: object
person = { name: 'Tuan', age: 22 }
person = []

let student: {
    name: string
    age: number
    isGood: boolean
}

student = {
    name: 'tuan',
    age: 21,
    isGood: true,
}