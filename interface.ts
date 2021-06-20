/* interface */
interface Person {
    name: string
    age: number
    speak(lang: string): void
    spend(amount: number): number
}

const henry: Person = {
    name: 'Henry Poster',
    age: 19,
    speak(lang: string): void {
        console.log(lang);
    },

    spend(amt: number): number {
        return amt
    }
}

const helloPerson = (onePerson:Person)=> 
console.log(`Hello ${onePerson.name} and ${onePerson.spend(123)}`);


helloPerson(henry);
