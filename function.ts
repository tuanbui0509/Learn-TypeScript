// FUNCTION

const square = (side: number) => side * side;
console.log(square(3));

let greet: Function
greet = () => console.log('Hello EveryOne');
greet()

const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b);
    console.log(c);
}

add(5, 6, 7)
add(5, 6, 'Tuan')
add(5, 6)

const addDefault = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b);
    console.log(c);
}

addDefault(5, 5, 'Ngoc Tuan');
addDefault(5, 5);

const minus = (a: number, b: number): number => a + b;

console.log(minus(5, 5))
