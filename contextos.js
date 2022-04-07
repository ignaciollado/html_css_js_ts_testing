var nombre = "Juan";

const objeto = {
    nombre: "Andrés",
    saludar() {
        setTimeout (function() {console.log(this.nombre) }, 1000) // esta llamada a this.nombre ocurre en el ámbito de setTimeout que está dentro del ámbito global, el de window
    }
}

// objeto.saludar()

var nombre1 = "Juan";

const objeto1 = {
    nombre1: "Andrés",
    saludar1() {
        const _this = this // es una forma 'burda' de recoger el ámbito de la función objeto1 en vez del ámbito global
        setTimeout (function() {console.log(_this.nombre1) }, 1000)
    }
}

// objeto1.saludar1()

/**
 * otra forma de hacerlo es mediante el uso de funciones flecha
 * no tienen contexto propio de this si no que las heredan del contexto superior (en este caso de saludar2())
 */ 

var nombre2 = "Juan";

const objeto2 = {
    nombre2: "Andrés",
    saludar2() {
        
        setTimeout (() => {console.log(this.nombre2) }, 1000)
    }
}
// objeto2.saludar2()

/**
 * Otra forma más, para el caso de tener una función declarada, 
 * es haciendo uso de bind(). Esta función permite pasar un contexto de this
 * 
 */

 var nombre4 = "Juan";

 const objeto4 = {
     nombre4: "Andrés",
     saludar4() {
         setTimeout (function() {console.log(this.nombre4) }.bind(this), 1500)
     }
 }
 
 //objeto4.saludar4()
 const saludar44 = objeto4.saludar4
 // saludar44()

 //Fuente: https://www.youtube.com/c/LaCocinadelC%C3%B3digo (la cocina del código: 15. THIS EN JAVASCRIPT (bind, call, apply y más) https://www.youtube.com/watch?v=bS71_W_BDFE)
 //Default binding (enlazamiento por invocación directa) sin invocar el modo estricto

 function quienSoy() {
     console.log(`Hola, yo soy: `, this)
 }
 //quienSoy() // invocará al objeto global que en los navegadores es windows y en node.js es el objeto global

  //Default binding (enlazamiento por invocación directa) invocando el modo estricto
'use strict'
  function quienSoyStrict() {
    console.log(`Hola, yo soy: `, this)
}
// quienSoyStrict() // devolvera undefined

const sacha = {
    nombre: 'Sacha',
    twitter: '@sachalifts',
    saludar: function () {
        const seguimeEnTwitter = () => {
            console.log(`Seguime en Twitter: ${this.twitter}`)
        }

        console.log(`Hola me llamo ${this.nombre}!`)
        seguimeEnTwitter()
    }
}

//sacha.saludar()

const object = {
    message: "Hello World!",
    getMessage() {
        const message = "Hello, Earth!"
        return this.message
    }
}
// console.log(object.getMessage())
// console.log(globalThis)
/***************************************** */
'use strict'
function foo() {
    this.a = 2;
  }
  
  foo();
  // console.log(a); // 2

/******************************************* */
  function foo() {
    this.a = 2;
  }
  
  const obj = {
    foo: foo
  };
  
  obj.foo(); //Aquí 'foo', es llamado en el conexto del objeto 'obj'
  // console.log(obj.a); //a

/********************************************** */
const Gato = function(nombre, sonido) {
    this.nombre = nombre;
    this.sonido = sonido;
    this.hacerSonido = function() {
      console.log( this.nombre + ' decir: ' + this.sonido );
    };

    this.molestar = function() {
        let count = 0, max = 10;
        const t = setInterval(() => {
          this.hacerSonido(); // <-- esta línea falla con `this.hacerSonido no es una función` 
          count++;
          if (count === max) {
            clearTimeout(t);
          }
        }, 500);
      };    

  }
  
  const gatito = new Gato('Papá Gordo', 'Mrrooowww');
  //gatito.hacerSonido(); // Papá Gordo dice: Mrrooowww
/*********************************************************** */

function decirNombre() {
    let nombreName = 'algunNombre';
    console.log('El nombre es, ', this.nombreName);
   }
//decirNombre()

let usuario = {
    nombre: '---Tapas----',
    direccion: 'freecodecamp',
    getName: function() {
        console.log(this.nombre); // En este caso 'this' está vinculado al objeto usuario (por la vinculación implícita)
    }
};

//usuario.getName(); //Vinculación implícita, para identificar el contexto 'this', se tiene en cuenta lo que está a la izda del operador (.) adyacente a una función en el momento de la invocación


function multiplyBy10(array) {
  // your code here
  return array.map(number => number * 10);
}
//console.log (multiplyBy10([45, 1, -10, 11, 250]))

function shiftRight(arr) {
  return arr.map( (_, index, arr) => arr[(index + arr.length - 1) % arr.length] );
}
//console.log (shiftRight([{ name: "" }, 10, "left-side"]))


function onlyVowels(array) {
  let visitsCountMap = [];

  array.map((item, index) => {
    const word = [...item];
    let vowelsWord = ""
    word.map((letter) => {
      if(/[aeiouyAEIOUY]/.test(letter) === true){
        vowelsWord +=letter
      }
    });
    visitsCountMap[index] = vowelsWord
  })

  return visitsCountMap

}

const input = ["average", "exceptional", "amazing"];
//console.log( onlyVowels(input) ) 

function doubleMatrix(array) {

  return array.map(number => number.map(item => item * 2));

}

const inputA = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
/* console.log (doubleMatrix(inputA)) */

function onlyEven(array) {
  return array.filter( number => number%2 == 0 )
}

const inputC = [10, 15, 20, 25, 30, 35];
/* console.log(onlyEven(inputC)) */

function onlyOneWord(array) {
  return array.filter( word => !/\s/.test(word) )
}
const inputD = ["return", "phrases", "with one word"];
/* console.log(onlyOneWord(inputD)) */

function positiveRowsOnly(array) {
 let negative = false
 return array.filter(row => {
      row.filter(item => {if (item < 0) {negative = true}} )
      if (!negative) {
       return row
            }
            negative = false
    });
}

const inputE = [[1, 10, -100], [2, -20, 200], [3, 30, 300]];
/* console.log(positiveRowsOnly(inputE)) */

function allSameVowels(array) {
 
  return array.filter( item => {
    /* console.log(item) */
    const word = [...item];
    let sameVowels = true
    console.log (word)
    word.filter((letter, index) => {console.log(index, word.indexOf(letter), letter, word) /* return index !== word.indexOf(letter) */});
  
  })
}

const inputF = ["racecar", "amalgam", "oligopoly", "zoom"];
/* console.log(allSameVowels(inputF)) */

function sum(array) {
  return array.reduce( (acc, cur) => acc + cur );
}
var inputG = [ 10, 15, 20, 25, 30, 35 ];
/* console.log(sum(inputG)) */

function productAll(array) {
  const flatArray = array.reduce((acc, cur) =>  acc.concat(cur) , []);
  return flatArray.reduce ((acc, cur) => acc * cur)
}

const inputH = [[ 1, 2, 3 ],
[ 4, 5 ],
[ 6 ]];
/* console.log(productAll(inputH)) */

function objectify(array) {
  return array.reduce( (acc, cur) => { 
    acc[cur[0]] = cur[1];
    return acc;
  } , {})
}
var inputI = [[ 'Thundercats', '80s' ],
[ 'The Powerpuff Girls', '90s' ],
[ 'Sealab 2021', '00s' ]];

/* var expected = { 'Thundercats': '80s', 'The Powerpuff Girls': '90s', 'Sealab 2021': '00s' }; */
/* console.log(objectify(inputI))  */

function luckyNumbers(array) {
  let counter = 0
  return array.reduce((acc, cur) => {
    if (counter === array.length - 1) {
      return `${acc}and ${cur}`;
    } else {
      counter += 1; 
      return acc + cur + ", ";
    }
  },'Your lucky numbers are: ')
}

var inputJ  = [ 30, 48, 11, 5, 32 ];
/* var expected = 'Your lucky numbers are: 30, 48, 11, 5, and 32'; */
/* console.log(luckyNumbers(inputJ)) */

function allEven(input) {
  input = input.every( (item) => item%2 === 0 )
  return input;
}
const goodInput = [2, 4, 10];
/* console.log(allEven(goodInput)) */

function allSameType(input) {
  input = input.every( (item, index) => {
    if (index === 0){
      return true;
    }
    else {
      return (typeof item === typeof input[index - 1]);
    }
  })
  return input;
}
const goodInputA =  [1, 2, 3];
const badInputA = [1, 2, 3, "4"];
/* console.log (allSameType(goodInputA)) */

function positiveMatrix(input) {
  input = input.every ( (row) => row.every(item => item >= 0))
  return input;
}
const goodInputB = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const badInputB = [[-1, 2, 3], [4, -5, 6], [7, 8, -9]];
/* console.log (positiveMatrix(badInputB)) */


// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  const allString = input.every( (item) => typeof item === 'string')
  if (allString) {
    input = input.every((words) => {
      let wordLetters = words.split('')
      let wordVowels = wordLetters.filter(word => /[aeiouyAEIOUY]/.test(word));
      console.log(wordLetters)
      const result = wordVowels.filter( vowel => vowel !== wordVowels[0])
      console.log(result, result.length)
      return result
      if (result.length > 0 ) {return true}
      else { return false}
    })
  }
  return input;
}
const goodInputC = ["amalgam", "zoom"];
const badInputC = ["zoom", "oligopoly"];
console.log (allSameVowels(goodInputC))

// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10 (input) {
  input = input.some((number) => number>10)
  return input;
};
const goodInputD = [8, 9, 10, 11];
const badInputD = [1, 2, 3, 4];
/* console.log(anyGreaterThan10(badInputD)) */

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
  input = input.some((string) => {
    if (string.length>10) {
      return true
    }
  })
  return input;
};
const goodInputE = ["democracy", "aristocracy"];
const badInputE = ["democracy", "republic"];
/* console.log(longWord(goodInputE)) */

function truePossibilities (input) {
  input = input.some( row =>  row.some( item => item) )
  return input;
};

const goodInputF = [
  [false, false, false],
  [false, false, false],
  [false, false, true]
];
const badInputF = [
  [false, false, false],
  [false, false, false],
  [false, false, false]
];
/* console.log(truePossibilities(goodInputF)) */

// Check to see if 'Lost' is in
// the phrase (using some).
function lostCarcosa (input) {

  input = input.some(row => row.split(' ').some( item => item ==="Lost"))
  return input;
};
const goodInputG = [
  "Strange is the night where black stars rise,",
  "And strange moons circle through the skies,",
  "But stranger still is",
  "Lost Carcosa."
];
const badInputG = [
  "Along the shore the cloud waves break,",
  "The twin suns sink behind the lake,",
  "The shadows lengthen",
  "In Carcosa."
];
/* console.log(lostCarcosa(badInputG)) */


function entryCalculator(entrants) {
  // your code here
  const data = require('./data');
  console.log(data.animals.map(console.log));
  let initialValue = 0;
  entrants = Object.values(entrants)
  
  //if (entrants) {
    return entrants.reduce((totalValue, currentValue) => { 
      return totalValue + currentValue  
    }, initialValue)
  //}
  return entrants
}
var entrants = { Adult: 2, Child: 3, Senior: 1 };
/* console.log(entryCalculator())
console.log(entryCalculator({})) */
/* console.log(entryCalculator(entrants)) */