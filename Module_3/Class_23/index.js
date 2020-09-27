/* Spread */

// Exercício resolvido 1

const arr1 = [1, 2, 3];
const arr2 = [5, 6];
const arr3 = [...arr1, 4, ...arr2];

console.log(arr3);

// Exercício resolvido 2

const arr4 = [0, ...arr1, 4, ...arr2, 7];

console.log(arr4);

// Exercício resolvido 3

const arr5 = [1, 2, 3, 4, 5];

const [primeiro, segundo, ...resto] = arr5;

console.log(resto);

// Exercício resolvido 4

const dados = {
    nome: "André",
    idade: 23,
    profissao: "Desenvolvedor",
    altura: 176,
    peso: 70
}

const trabalho = {
    empresa: "Cubos",
    nivel: "Desenvolvedor Junior",
    cargaHoraria: "40h/semana"
}

const {altura, peso, ...rDados} = dados;
const dadosCompletos = {...rDados, ...trabalho};

console.log(dadosCompletos);