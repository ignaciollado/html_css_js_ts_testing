const person = {
    name: 'Nacho',
    age: 34,
    hobbies: ['cycling', 'sleeping']

}
/* nombre = person.name
hobis = person.hobbies[1] */
/* Usando deestructuring asigment */

const {name: firstName, hobbies} = person
/* console.log(hobbies[1], firstName) */

const numbers = [0, 1, 3, 4]
const [a] = numbers
/* console.log(a) */

const response = {
    count: 10,
    data: [{
        name: 'Luke SkyWalker',
        films: ['Empire Strikes Back', 'The Force Awakens']
    },
    {
        name: 'Han Solo',
        films: ['A new hope', 'The Force Awakens cap IV']
    }]
}

const {count, data: [{name, films}]} = response
/* console.log (count)
console.log (name)
console.log (films) */

response.data.forEach(r => {
    let {name, films} = r
    console.log (name, `${films[0]} y ${films[1]}` )
})

function nameMe(name) {
    return {
        [name.toLowerCase()]: {
            masssage: `Mi nombre es ${name}`
        }
    }
}
console.log(nameMe('Nacho'))

function add() {
    return Array.prototype.slice.call(arguments).reduce(function(acc, number) {
        return acc + number;
    })
}

console.log(add(3,4,6))

/*Usando la sintaxis de los ... */
function addMas(...argumentos) {
    return argumentos.reduce((acc, number) => 
         acc + number
    )
}

console.log(addMas(6,8,12))

/* Una aplicación del spread operator */

const frutas = ['naranja', 'limón', 'plátano']
const masFrutas = ['pera', 'manzana', 'fresa']
const todasLasFrutas = [...frutas, ...masFrutas]
console.log(todasLasFrutas)


/* Clases en javaScript */

class Car {
    constructor(make, colour, speed) {
        this.make = make
        this.colour = colour
        this.speed = speed
    }


getMaxSpeed() {
    return `Maximum speed is ${this.speed} km/h`
}
}
const miCoche = new Car ('FIAT', 'Naranja', 120)
console.log(miCoche.getMaxSpeed())

class Truck extends Car {
/*     getMaxSpeed() {
        return `Maximum truck speed is ${this.speed} km/h.`
    } */
    getMaxSpeed() {
        return super.getMaxSpeed()
    }
    getMake() {
        return `This truck was made by ${this.make}`
    }
}

const miTruck = new Truck ('BMW', 'Rojo', 360)
console.log( miTruck.getMake(), miTruck.getMaxSpeed(), miTruck.colour)

class Person {
    constructor(name) {
        this.name = name
    }
    introduce() {
        return `Hello ${this.name}`
    }
}

class SuperHero extends Person {
    constructor(name, power) {
        super(name)
        this.power = power
    }
    introduce() {
        return `${super.introduce()}. Your superpower is: ${this.power}`
    }
}

const nacho = new SuperHero('Hulk', 'Super mass')

console.log(nacho.introduce(), nacho.name, nacho.power)


/*Modularized code*/


