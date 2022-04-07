 const isAdmin: boolean = true
 const user: string = "Nacho"
 let bienvenido: string;

 if (isAdmin){
    bienvenido = `Hello ${user}`
 } else {
    bienvenido = `${user} is not a admin`
 }


 console.log(bienvenido)
 /* Arrays Typescript */
/* two ways specifyng types of arrays */
/* Una forma */
const numbers: number[] =[0,1,2,3,4]
numbers.push(50)
/* Otra forma */
const numeros: Array<number> = [4,5,6]

/* Un array con varios tipos de datos */

const mezcladetiposdedatos: (string|number)[] = [1,"dddd", 5, "ddddeeeee"]
const otramezcladetiposdedatos : Array<string|number> = ["hola", 25]
mezcladetiposdedatos.push("hola")
mezcladetiposdedatos.push(66)

/* Data types TUPLES */
/* Es un tipo de array donde el tipo de datos de los elementos es conocido */

let mix: [string, number]
mix = ["Nacho", 56]

console.log(mix[0].toLocaleLowerCase(), mix[1].toFixed())

/* Data types Enum */
/* give a more frendly way to give names to a set of numerical values */

enum Cardtype { Hearts = 1, Diamonds, Spades, Clubs }

let myCard: Cardtype = Cardtype.Hearts

let cardName: string = Cardtype[2]

/* This outputs Diamonds because Hearts i set to index 1 */
console.log (cardName)

/* Data types Any */
/* when you are not shure of the data you are going to get ... */

const data: any = 4
const datos: any = "4"
const mezcla: any[] = [1, "Hola", true]
/* Type */
type User = {
   name: string
   age: number
}

const myUser: User = {
   name: "Nacho",
   age: 40
}

/* type assertions */
/* the way you tell the compiler that you are a 100% shure about the type of a variable */
/* si creamos un objeto vacío */
const myUsuario = {}
/* He intentamos asignarle un valor a un atributo de este, typeScript generará un error */
myUsuario.age = 35
/* para solucionarlo, se puede hacer un type assertion */
/* Existen dos formas de hacer type assertions */
/* UNA: */
(myUsuario as User).age = 35
/* y la OTRA */
(<User>myUser).age = 35

/* Objects in typeScript */
const person = {
   name: "Nacho",
   age: 23
}
person.age = 33

/* Array of objects */
const users: {name: string, age: number}[] = [
   {
      name: "Nacho",
      age: 35
   },
   {
      name: "Vane",
      age: 25
   }
]

/* Interfaces */
/* Proveen una forma para indicar que una entidad debe cumplir una definición */
/* Casos típicos de entidades: una persona, una orden de compra, una factura, una localización, una dirección */
/* Y con la interface, tenemos una forma de especificar estas propiedades para las entidades */
/* podemos decir que un usuario en particular debe tener una propiedad nombre y una propiedad edad*/
/* y, además, en Typescript podemos especificar los tipos de estas propiedades */
/* Las interfaces, en cierta forma, sirven para asegurarnos de que los objetos que creamos cumplen ciertas reglas */
/* Una convención para dar nombre a las interfaces que creemos es que la primera letra sea una 'I' */
interface IUser {
   name: string,
   age: number
}

/* La forma para decir que un objeto debe cumplir una interface es esta: */
let myUsuarioSegundo: IUser = {
   name: "Andrés",
   age: 45
}

let miUsuario1: IUser = {
   name: "Julio",
   age: 56,
   address: "dddddddd - palma"
}
/* Las interfaces, también permiten especificar propiedades opcionales, 
esto se hace añadiendo el símbolo '?' al final del nombre de la propiedad */

interface IUserConOpciones {
   name: string,
   age: number,
   address?: string
}

let miUsuario2: IUserConOpciones = {
   name: 'juan',
   age: 25,
   address: "calle uno, 25"
}

/* Las interfaces, también permiten especificar propiedades opcionales de solo lectura */
interface IUserConOpcionesLectura {
   name: string,
   readonly age: number,
   address?: string
}

let miUsuario3: IUserConOpcionesLectura = {
   name: "juan pedro",
   age: 45,
   address: "Son Castelló"
}
miUsuario3.age = 36

/* Las interfaces, también sirven para describir como las funciones deben 'semejarse o parecerse' */
/* Por ejemplo, para especificar sus parámetros y el tipo de dato que debe devolver*/
interface IGreet {
   (name: string, language: string): string
}

let hello: IGreet

hello = function( nombre: string, language: string ) {
   if (language === "en") {
      return `Hello ${nombre}`
   } else {
      return `Hola ${nombre}`
   }
}

hello("Andrés", "es")