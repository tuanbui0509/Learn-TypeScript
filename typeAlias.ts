// TYPE ALIAS

type StringOrNumber = string | number
type Student = {
    name: string;
    id: StringOrNumber
}

const studentDetails = (id: StringOrNumber, studentName: string) => {
    console.log(`Student ${studentName} has id: ${id}`);
}

studentDetails('1', 'Tuan')
studentDetails(2, 'Duong')

const greet = (user: Student) => {
    console.log(`${user.name} with id ${user.id} say Hello`);
}

greet({name:'Tuan',id: 123})