const array = [1, 2, 3, 4, 5];

// 1. Calcular o dobro de todos os elementos.

const resultado = array.map((x, i, a) => {
    return x * 2;
});

console.log(`Resultado 1: ${resultado}`);

// 2. Multiplicar por 2, apenas os 2 primeiros elementos.

const resultado2 = array.map((x, i) => {
    // If/else simplificado (ternário)
    return i < 2 ? (x * 2) : (x);

    // Acima, o if/else simplificado (ternário)
    // if (i < 2) {
    //     return x * 2;
    // } else {
    //     return x;
    // };
});

console.log(`Resultado 2: ${resultado2}`);

// 3. Mesmo que o ponto 2, com outro método simplificado de if/else.

const resultado3 = array.map((x, i) => i < 2 ? (x * 2) : (x));

console.log(`Resultado 3: ${resultado3}`);

// 4. Ternário em string para lidar com singular/plural.

const pessoas = 1;

console.log(`Aqui tem ${pessoas} pessoa${pessoas === 1 ? "" : "s"}.`);
