const array = [1, 2, 3, 4, 5, 23, 0, -3, 5, 98, -77];

// 1. Filtrar apenas os ímpares.

const filtrado = array.filter(x => x % 2 !== 0 ? true : false);

console.log(`Resultado 1: ${filtrado}.`);

// 2. Filtrar os ímpares negativos.

const filtrado2 = array.filter(x => x % 2 === 1 ? true : false);

console.log(`Resultado 2: ${filtrado2}.`);