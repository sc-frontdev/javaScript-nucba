// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.



// function parOImpar(n){

//     return(n % 2 === 0) ? 'número par' : 'número impar'
// }

// console.log(parOImpar())




// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.


// function cualEsMayor( a, b ){
//     if(a === b ){
//         return('los números son iguales')

//     }
//     return( a > b ) ? a : b

// }
// console.log(cualEsMayor(4, 1))


// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

// function multiploDe5(x){

//     if(x % 5 === 5){
//         return('el número es multiplo de 5')
//     }if (x % 5 === 0) {
//         return('el número es multiplo de 5')
//     } else {
//         return('el número no es multiplo de 5')
//     }
// }

// console.log(multiploDe5(45))

// function multiploDeCinco(numero){
// const respuesta =    numero % 5 == 0 || numero % 5 == 5 ? 'multiplo de 5' : 'no es multiplo de 5'  
// console.log(respuesta)

// }
// multiploDeCinco(45)




// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.


// function todoslosNumeros(numero) {
//     for (let i = 0; i <= numero; i++) {
//         console.log(i)
//     }
// }
// todoslosNumeros(10)


// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.




// function contarPalabras( palabra, numero) {

// return (
//     palabra.repeat(numero)
// )
// }
// console.log(contarPalabras('seba', 8))


// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

// const frutas = ['manzana', 'pera', 'banana','granada']

// function contarArray(frutas) {
//      frutas.forEach(fruta => {
//         console.log(fruta)
//     });
// }
// console.log(contarArray(frutas))



// 7- Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".


// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function mostrarNumeros(numeros){
//     numeros.forEach(numero => {
//         if(numero !== numeros[5]){
//             console.log(numero)
//         }
//     });
// }
// mostrarNumeros(numeros)


// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function multiplicarValor(numeros, n){
//      numeros.forEach(numero => {
//         console.log(numero * n)
//     });
// }
// multiplicarValor(numeros, 3)