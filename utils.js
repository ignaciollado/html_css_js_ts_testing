export const pi = 3.1415927;
export const n = 1.68;
/** export class MathModule {} , para que no se genere un error al importarlo desde otro módulo hay que poner el nombre de la clase entre {}
 * si se quiere importar sin tener que usar {} se añade la palabra clave default
*/
export default class MathModule {
    calculate(n, m) {
        return n * m;
    }
}
