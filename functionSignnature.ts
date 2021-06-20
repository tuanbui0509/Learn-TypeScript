// FUNCTION SIGNATURE

let greet: Function
greet = () => {
    console.log('Hello World');
}
greet()

let sayHi: (a: String, b: string) => void

sayHi = (name: string, sta: string) =>
    console.log(`My name is ${name} and ${sta}`);

sayHi('Ngoc Tuan', 'nice to meet you')

let calculator: (a: number, b: number, c: string) => number
calculator = (numOne: number, numTwo: number, action: string) =>
    action === 'add' ? numOne + numTwo : null
console.log(calculator(2, 8, ''));

type Student = {
    name: string;
    age: number;
}
let printStudent: (student: Student) => void

printStudent = (myStudent: Student) => {
    console.log(`My name is ${myStudent.name} and ${myStudent.age}`);
}

printStudent({ name: 'Tuan', age: 21 })



// Function signature là bạn chỉ khai báo function đó tên gì, nhận vào biến kiểu gì, trả về giá trị KIỂU gì.
// Còn Function thì bạn hẳn hoi là bên trong {} của hàm đó bạn LÀM cái gì, sao cho nó trả về giá trị đúng
// cái KIỂU bạn khai báo bên trên trong Function Signature.