/* Class*/
export class Employee {
    // public name: string
    // private age: number
    // readonly male: boolean

    // constructor(n: string, a: number, m: boolean) {
    //     this.name = n
    //     this.age = a
    //     this.male = m
    // }


    constructor(
        public name: string,
        private age: number,
        readonly male: boolean
    ) { }
    print() {
        return `Name is ${this.name} with age ${this.age} and gender is ${this.male ? 'Male' : 'Female'}`
    }
}

const tun = new Employee('Neon Tun', 22, true)
// console.log(tun.print());

const bob = new Employee('Bob', 45, true)
let employees: Employee[]=[]

employees.push(tun)
employees.push(bob)
employees.forEach(employee => console.log(employee.print()))