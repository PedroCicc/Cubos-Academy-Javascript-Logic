# #Lógica - A3 - 13/07

###### Aluno: Pedro Ciccone

// Variáveis
```
const cidadeNatal = "Carmen de Patagones";
console.log(cidadeNatal);

let populacao = 35000;
console.log(populacao);

populacao = 40000;
console.log(populacao);

console.log("----------");
```

// Vetores
```
const paises = ["Filipinas", "India", "Irã", "Malásia", "Japão"];

paises.push("China");
console.log(paises);

paises.pop();
console.log(paises);

paises.unshift("Iraque");
console.log(paises);

paises.shift();
console.log(paises);

console.log(paises[paises.length-1]);
console.log(paises[1]);
console.log(paises[2]);

console.log("----------")
```

// Objetos

```
const cartaoDeConsumo = {
  nome: "Marcus",
  idade: 28,
  produtosConsumidos: [
    {
      nome: "Leite",
      preco: 200,
      qtdComprada: 2,
    },
        {
      nome: "Farinha",
      preco: 350,
      qtdComprada: 1,
    },
        {
      nome: "Feijão",
      preco: 300,
      qtdComprada: 1,
    },
  ]
};

console.log(cartaoDeConsumo);

console.log(cartaoDeConsumo.nome);

console.log(cartaoDeConsumo["idade"]);

cartaoDeConsumo["idade"] = 29;

console.log(cartaoDeConsumo["idade"]);

console.log(cartaoDeConsumo.produtosConsumidos[0].nome);

console.log(cartaoDeConsumo.produtosConsumidos[2].preco);

//Alternativa para a última linha de código:

console.log(cartaoDeConsumo.produtosConsumidos[cartaoDeConsumo.produtosConsumidos.length-1].preco);
```