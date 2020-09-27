/* Exercícios para casa */

// Questão 1

const arr1 = ['a', 'b', 'c']
const arr2 = ['d', 'e']

const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// Questão 2

const arr4 = [0, ...arr1, 1, ...arr2, 2];

// console.log(arr4);

// Questão 3

const carro = {
    modelo: "Gol",
    marca: "Volkswagen",
    cor: "Vermelho",
    potenciaCV: 80,
    preco: 3000000
}

const {preco, ...resto} = carro;
const carroSemPreco = {...resto};

// console.log(carroSemPreco);

// Questões 4, 5 e 6

const ordenar = (...args) => {

    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args.length - 1; j++) {
            if (args[i] < args[j]) {
                [args[i], args[j]] = [args[j], args[i]];
            };
        };
    };
    console.log(`Lista ordenada: ${args}`);
};

const array = [2, 4, 1, 3, -5, 600, 321321, 7];
ordenar(...array);