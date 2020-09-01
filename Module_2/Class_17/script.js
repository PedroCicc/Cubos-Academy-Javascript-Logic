// forEach();
const nomes = ["José", "João", "Pedro"];

nomes.forEach(item => console.log(item));

// map(); - Ex. 1
const array = [1, 2, 3, 4, 5];

const novoArray = array.map(x => x * 4);

console.log(novoArray);

// map(); - Ex. 2
const expressoes = ["opa", "epa", "iiiisa"];

const novasExpressoes = expressoes.map(x =>
    x.toUpperCase() + "!"
);

console.log(novasExpressoes);

// map(); - Ex. 3
const novasExpressoes2 = expressoes.map((x, i) => {
    if (i > 0) {
        return x.toUpperCase() + "!"
    } else {
        return x;
    };
});

console.log(novasExpressoes2);

// filter(); - Ex. 1
const numeros = [1, 4, 655, 23, 65, 243, 56, 8];

const novaLista = numeros.filter((x) => {
    if (x > 10) {
        return true;
    } else {
        return false;
    };
});

console.log(novaLista);

// filter(); - Ex. 1 simplificado
const novaLista2 = numeros.filter(x => x > 10);

console.log(novaLista2);

// filter(); - Ex. 2
const pessoas = [
    {
        nome: "José",
        idade: 29
    },
    {
        nome: "Nicolas",
        idade: 28
    },
    {
        nome: "Mini Nick",
        idade: 1
    }
];

const menores = pessoas.filter(x => x.idade < 18);

console.log(menores);

// reduce(); Ex. 1

const listaDeNumeros = [1, 2, 3, 4, 5];

const result = listaDeNumeros.reduce((acc, x, i) => {
    console.log(`acc: ${acc} x (item atual): ${x} i (indice): ${i}`);
    return acc + x;
}, 0);

console.log(`soma: ${result}`);

// reduce(); Ex. 1 simplificado

const result2 = listaDeNumeros.reduce((acc, x) => acc + x);

console.log(`soma: ${result2}`);

// reduce(); Ex. 2

const result3 = listaDeNumeros.reduce((acc, x, i) => {
    console.log(`acc: ${acc}, x: ${x}, i: ${i}`)
    return acc + x;
});

console.log(`soma: ${result3}`);