# #Lógica - A7 - 27/07

##### Aluno: Pedro Ciccone

### Exercícios aula - While

**1.** Faça um programa que imprima a taboada do número 5.
```javascript=
let x = 1;

while (x <= 10) {
  console.log(x * 5);
  x++;
};
```
**2.** Faça um programa que imprima todos os elementos de um vetor.
```javascript=
const vetor = ["a", "b", "c", "d"];

let indice = 0;

while (indice < vetor.length) {
  console.log(vetor[indice]);
  indice++;
};
```
**3.** Faça um programa que imprima todos os números pares entre 1 e 50.
```javascript=
let x = 2;

while (x < 50) {
  console.log(x);
  x += 2;
};
```
**4.** Faça um programa que busque pelo nome "João" numa lista e imprima na tela o índice em que ele se encontra.
```javascript=
let lista = ["Rafaela", "Matheus", "João", "Gabriela"];

let indice = 0;

while (indice <= lista.length) {
  if (lista[indice] === "João") {
    console.log(`A posição de ${lista[indice]} é ${indice}.`)
  };
  indice++;
};
```
**5.** Faça um programa que filtre os elementos de uma lista, criando uma nova lista apenas com os nomes que começam com a letra J.
```javascript=
const lista = ["Rafaela", "Matheus", "João", "Gabriela", "José", "Juliana"];

let indice = 0;

let listaJ = [];

while (indice < lista.length) {

  if (lista[indice][0] === "J") {
  
    listaJ.push(lista[indice]);
    indice++;
  
  } else {
  
    indice++;
  
  };
};

console.log(listaJ);
```

### Exercícios aula - For

**1.** Faça um programa que imprima todos os elementos de um vetor.
```javascript=
const vetor = ["a", "b", "c", "d"];

for(let i = 0; i < vetor.length; i++) {
  console.log(vetor[i]);
};
```
**2.** Faça um programa que conte de 10 até 0.
```javascript=
for(let i = 10; i >= 0; i--) {
  console.log(i);
};
```
**3.** Faça um programa que imprima todos os múltiplos de 3 até 50.
```javascript=
for (let i = 0; i <= 50; i += 3) {
  console.log(i);
};
```
**4.** Faça um programa que localize e imprima na tela o maior número numa lista.
```javascript=
const lista = [2, 50, 32, 1292, 8];

let maiorNumero = lista[0];

for (let i = 0; i < lista.length; i++) {
  if (lista[i] <= maiorNumero) {
    continue;
  } else {
    maiorNumero = lista[i];
  };
};

console.log(`${maiorNumero} é o maior número da lista.`);
```
### Exercícios casa

**1.** Faça um programa que imprima os 100 primeiros números ímpares.
```javascript=
let x = 1;

while (x < 100) {
  console.log(x);
  x += 2;
};
```
**2.** Faça um programa que imprima a taboada do 4.
```javascript=
let x = 0;

while (x <= 10) {
  console.log(x * 4);
  x++;
};
```
**3.** Faça um programa que filtre uma lista, criando uma nova, em que permanecem apenas as palavras terminadas com a letra A.
```javascript=
const palavras = ["Casa", "Cabelo", "Anjo", "Menina", "Saia", "Humano"];

let palavrasA = [];

for (let i = 0; i < palavras.length; i++) {
  
  let palavra = palavras[i];
  if (palavra[(palavra.length - 1)] === 'a') {
    
    palavrasA.push(palavras[i]);

  };

};

console.log(palavrasA);
```
**4.** Faça um programa que identifique o menor item de uma lista numérica.
```javascript=
const numeros = [-3, 4, 11, -9, 7, -15, 21];

let menorNumero = numeros[0];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] >= menorNumero) {
    continue;
  } else {
    menorNumero = numeros[i];
  };
};

console.log(`${menorNumero} é o menor número da lista.`);
```
**5.** Os divisores de um número X são os números que dividem X sem deixar resto. Faça um programa que calcula os divisores de um número.
```javascript=
const x = 8

for (let i = 0; i <= x; i++) {
  if (x % i === 0) {
    console.log(i);
  } else {
    continue;
  };
};
```
**6.** Um número primo é aquele que tem apenas dois divisores: ele mesmo e um. Faça um programa que diga se um determinado número é primo.
Faça o programa que testa apenas um número, e rode o programa uma vez para cada uma das opcoes abaixo:
```javascript=
const x = 1;

let teste = 0;

for (let i = 1; i <= x; i++) {
  if (x % i === 0) {
    teste++
  };
};

if (teste === 2) {
  console.log(`${x} é um número primo.`)
} else {
  console.log(`${x} não é um número primo.`)
};
```
**7. EXTRA.** Faça um programa que calcule os 20 primeiros números primos.
```javascript=

```
**8. EXTRA.** Faça um programa que coloque os números de uma lista em ordem crescente.
```javascript=

```