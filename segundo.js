/// El segundo
/// Dado un listado de numeros encuentra el segundo más grande

const numbers = [3, 5, 6, 7, 43, 2, 34, 56, 6, 94, 3, 22, 44, 13, 67, 22];

const response = numbers.sort((a, b) => a - b)[numbers.length - 2];
console.log(response);
