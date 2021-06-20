"use strict";
exports.__esModule = true;
exports.Employee = void 0;
/* Class*/
var Employee = /** @class */ (function () {
    // public name: string
    // private age: number
    // readonly male: boolean
    // constructor(n: string, a: number, m: boolean) {
    //     this.name = n
    //     this.age = a
    //     this.male = m
    // }
    function Employee(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Employee.prototype.print = function () {
        return "Name is " + this.name + " with age " + this.age + " and gender is " + (this.male ? 'Male' : 'Female');
    };
    return Employee;
}());
exports.Employee = Employee;
var tun = new Employee('Neon Tun', 22, true);
// console.log(tun.print());
var bob = new Employee('Bob', 45, true);
var employees = [];
employees.push(tun);
employees.push(bob);
employees.forEach(function (employee) { return console.log(employee.print()); });
