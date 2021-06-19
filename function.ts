// FUNCTION

const square = (side: number) => side * side;

console.log(square(3));

let greet : function 
greet =()=> console.log('Hello EveryOne');
greet()

const add = (a: number, b: number, c?: number|string) =>{
    console.log(a+b);
    console.log(c);
}

console.log(add(5,6,7));
console.log(add(5,6,'Tuan'));

const addDefault = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b);
    console.log(c);
}

addDefault(5, 5, 'Ngoc Tuan');

const minus = (a: number, b: number):number => a + b;

console.log(minus(5, 5))
