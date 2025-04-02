class Person {

    static population = 0
    static averageLifeExpectancy = 74

    static increaseLifeExpectancy(years){
        Person.averageLifeExpectancy += years //Static method is in the Person class so has to be called at this level.
    }

    constructor(name, age, employer){
        this.name = name
        this.age = age
        this.employer = employer
        Person.population += 1
    }

    introduce() {
        console.log(`Hi! My name is ${this.name}. I am ${this.age} years old and I work for ${this.employer}`)
    }

    eat(food) {
        console.log(`${this.name} is eating a ${food}`)
    }
}

const personOne = new Person("Shayann", 27, "LaFosse")
const personTwo = new Person("Sharif", 28, "Goldman Sachs")

class Doctor extends Person {
    constructor(name, age, specialisation){
        super(name, age, "NHS")
        this.specialisation = specialisation
    }

    givePrescription(drug, amount) {
        console.log(`${this.name} administers ${amount} of ${drug}`)
    }

    discoverMedicine(medicine, years) {
        Person.averageLifeExpectancy += years
        console.log(`${this.name} has discovered a new medicine ${medicine}. The average life expectancy is now ${Person.averageLifeExpectancy}`)
    }
}

const ramin = new Doctor("Ramin", 28, "Surgeon")

class LaFosseTrainer extends Person {
    constructor(name, age, jobTitle) {
        super(name, age, "LaFosse") //Super passes inputs up the to parent class (Person)
        this.jobTitle = jobTitle
    }

    teach(cohort) {
        console.log(`${this.name} is teaching the ${cohort} cohort`)
    }
}

const emile = new LaFosseTrainer("Emile Sherrott", 33, "Senior Engineering Trainer")
const monia = new LaFosseTrainer("Monia Favaro", 30, "Engineering Trainer Manager")
const simon = new LaFosseTrainer("Simon Clemson", 42, "Training Lead")

console.log(Person.population)
console.log(Person.averageLifeExpectancy)

Person.increaseLifeExpectancy(6)
console.log(`Average life expectancy: ${Person.averageLifeExpectancy}`)

ramin.discoverMedicine("random drug", 8)


// const person = {
//     name: "Mark",
//     age: 34,
//     // introduce: function() {
//     introduce(){
//         console.log(`Hi! My name is ${this.name}`)
//     }
// }

// const personTwo = {
//     name: "Helena",
//     age: 28,
//     introduce() {
//         console.log(`Hi! My name is ${this.name}`)
//     }
// }

// const personThree = {
//     name: "Miriam",
//     age: 42,
//     introduce() {
//         console.log(`Hi! My name is ${this.name}`)
//     }
// }
