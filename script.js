    const myArray = [1, 2, 3, 4, 5, 5, 1]
    const mySet = new Set(myArray)

    console.log (myArray)
    console.log (mySet)

    const uniqueValuesArray = [ ...mySet ]

    mySet.add("hello")
    mySet.add ({'telefono 1' : 'Samsung Galaxy'})

    console.log(uniqueValuesArray)
    console.log(mySet)

    /** */
    console.log(mySet.has("hello"))

    const myMap = new Map([['name', 'nacho'],['surname', 'mi Apellido']])

    console.log(myMap['surname'])

    myMap.set('secondSurname','mi segundo apellido')

    console.log(myMap)

    let array1 = [1, 2, 3, 4]
    let array2 = [6]

    //array2.push(array1)
    //console.log(array2)

    array2.push(...array1)
    console.log(array2)

    const lista1 = [1, 2, 3]
    const lista2 = [ 6, 7, 8, 9]
    const lista1Copia = lista1

    console.log(lista1Copia)

    console.log([...lista1, ...lista2, 'a', 'b', 'c'])

    function myFun (a, b, ...manyMoreArgs) {
        console.log("a", a)
        console.log("b", b)
        console.log("manyMoreArgs", manyMoreArgs)
    }

    myFun("one", "two", "three", "four", "five", "six")

    function getUser(name){
        fetch(`https://api.github.com/users/${name}`)
        .then(function(response) {
        return response.json();
        })}
            
        getUser("nachollv@uoc.edu");