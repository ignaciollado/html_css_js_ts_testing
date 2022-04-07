const isAdmin = true;
const user = "Nacho";
let bienvenido;
if (isAdmin) {
    bienvenido = `Hello ${user}`;
}
else {
    bienvenido = `${user} is not a admin`;
}
console.log(bienvenido);
/* Arrays Typescript */
/* two ways specifyng types of arrays */
/* Una forma */
const numbers = [0, 1, 2, 3, 4];
numbers.push(50);
/* Otra forma */
const numeros = [4, 5, 6];
/* Un array con varios tipos de datos */
const mezcladetiposdedatos = [1, "dddd", 5, "ddddeeeee"];
const otramezcladetiposdedatos = ["hola", 25];
mezcladetiposdedatos.push("hola");
mezcladetiposdedatos.push(66);

/* Data types TUPLES */
/* Es un tipo de array donde el tipo de datos de los elementos es conocido */
let mix;
mix = ["Nacho", 56];
console.log(mix[0].toLocaleLowerCase(), mix[1].toFixed());



