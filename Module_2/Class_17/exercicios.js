// Questão 1
const array = [1, 2, 3, 4, 5];

array.forEach((item) => {
    console.log(item);
});

// Questão 2
const novoArray = array.map(x => x * 5);

console.log(novoArray);

// Questão 3
const cores = ["Azul", "Amarelo", "Verde", "Vermelho"];

const coresAlterados = cores.map(x => x.slice(0, -1) + x.slice(-1).toUpperCase());

console.log(coresAlterados);

// Questão 4
const numeros = [1, 2, 3, -5, -10, 7, 10];

const numerosPositivos = numeros.filter(x => x > 0);

console.log(numerosPositivos);

// Questão 5
const numerosPares = numeros.filter(x => x % 2 === 0);

console.log(numerosPares);

// Questão 6
const verduras = ["alface", "tomate", "Abóbora", "batata"];

const verdurasComA = verduras.filter((x, i) => {
    for (let i = 0; i < x.length; i++) {
        if (x[0] === "a" || x[0] === "A") {
            return true;
        } else {
            return false;
        };
    };
});

console.log(verdurasComA);

// Questão 7
const soma = array.reduce((acc, x) => acc + x);

console.log(soma);

// Questão 8
const stringsSeparados = verduras.reduce((acc, x) => {
    return acc + ", " + x;
});

console.log(stringsSeparados);

// Questão 9
const maiorValor = array.reduce((acc, x, i) => {
    let maiorNumero = array[0];

    if (array[i] > maiorNumero) {
        maiorNumero = array[i];
    };

    return maiorNumero;;
});

console.log(maiorValor);

// Questão 10
const maiorString = verduras.reduce((acc, x) => {
    if (x.length > acc.length) {
        acc = x;
    };

    return acc;
});

console.log(maiorString);