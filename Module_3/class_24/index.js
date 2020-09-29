// find();

const array = [1, 2, 3, 4];

const encontrado = array.find((x) => x > 3);

console.log(encontrado);

// Exercício resolvido 1

const palavras = ["abóbora", "abcdefghijklmn", "casa"];

const maisDeDezCaracteres = palavras.find((x) => x.length > 10);

console.log(maisDeDezCaracteres);

// Exercício resolvido 2

const texto = `Hoje eu escrevi esse texto
  que tava cheio
  de quebras
  de linha`;

const textoArray = texto.split("");
const indices = [];

let indexEncontrado = 0;

while (indexEncontrado !== -1) {
  indexEncontrado = textoArray.findIndex((x) => x === "\n");

  if (indexEncontrado !== -1) {
    textoArray.splice(indexEncontrado, 2);
    indices.push(indexEncontrado);
  }

  console.log(indices);
}

// Exercício resolvido 3

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const resultado = numeros.some((x) => x % 2 === 0);

console.log(resultado);

// Exercício resolvido 4

const ehQuadradoPerfeito = (num) => {
  for (let i = 1; i < num; i++) {
    if (num === i * i) {
      return true;
    }
  }
  return false;
};

console.log(numeros.some(ehQuadradoPerfeito));
