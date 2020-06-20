
const person = {
    name: 'Joe'
}

// use spread operator to have a copy of the object
const person2 = { ...person }
person2.name = 'Petter'

console.log(person)
console.log(person2)
