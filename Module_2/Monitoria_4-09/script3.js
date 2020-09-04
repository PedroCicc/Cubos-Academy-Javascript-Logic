const array = [1, 2, 3, 4, 5];

// 1. Reduce(); - Exercício 1.

array.reduce((acc, x, i) => {
    console.log(`Acumulador: ${acc} | Elemento atual: ${x} | Índice: ${i}`);
    acc = acc + x;
    return acc;
}); // valor inicial, não dep;

// 2. Reduce(); - Exercício 2.

const array2 = [1, 2, 3, 4, 5, 23, 0, -3, 5, 98, -77];

// Resolução com reduce();

const resultado = array2.reduce((maior, x) => x > maior ? x : maior, 0);

console.log(resultado);

// Resolução com for();

let maior = array2[0];

for (let i = 1; i < array2.length; i++) {
    const x = array2[i];
    console.log(`Analisando ${x}...`);
    if (x > maior) {
        console.log(`${x} é maior que ${maior}. Temos um novo maior!`);
        maior = x;
    };
};

console.log(`Maior: ${maior}.`);