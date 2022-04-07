/**
 * 
 * @param {*} list 
 * @param {*} param1 
 * @param {*} param2 
 */

const findOne = (list, { key, value }, {onSuccess, onError }) => {
    setTimeout(() => {
        const element = list.find(element => element[key] === value);
        element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
    }, 2000)
};

/**
 * 
 * @param {*} param0 
 * @returns 
 */

const onSuccess = ({ name }) => console.log(`user: ${name}`)

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const onError = ({ msg }) => console.log (msg)

/**
 * Un array de objetos literales JSON que contiene los datos y
 * en el que se hará la búsqueda
 */
const users = [
    {
        name: 'Carlos',
        rol: 'Teacher',
    },
    {
        name: 'Ana',
        rol: 'Boss',
    }
];

/**
 * Muestra en la consola la cadena 'findOne success'
 */
console.log('findOne success')

/**
 * Otra llamada a la función de búsqueda en el array 'users' a la que se le pasan los parámetros
 * el nombre de la lista donde debe realizar la búsqueda
 * la clave y el valor que debe buscar en la lista
 * las funciones de callback que se ejecutarán en función del resultado de la búsqueda
 * en este caso, se ejecutará la función onSuccess ya que el valor a buscar existe dentro de la lista
 */
findOne(users, {key: 'name', value: 'Carlos'}, { onSuccess, onError })

/**
 * Muestra en la consola la cadena 'findOne error'
 */
console.log ('findOne error')

/**
 * Otra llamada a la función de búsqueda en el array 'users' a la que se le pasan los parámetros
 * el nombre de la lista donde debe realizar la búsqueda
 * la clave y el valor que debe buscar en la lista
 * las funciones de callback que se ejecutarán en función del resultado de la búsqueda
 * en este caso, se ejecutará la función onError ya que el valor a buscar no existe dentro de la lista
 */
findOne (users, { key: 'name', value: 'Fermin'}, { onSuccess, onError })