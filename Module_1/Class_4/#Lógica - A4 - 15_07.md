# #Lógica - A4 - 15/07

###### Aluno: Pedro Ciccone

### Exercícios LiveHelp

**Tipos, condicionais e operadores**
```
const variavel = null;

if (typeof variavel === "number") {
  console.log("Número");
} else if (typeof variavel === "string") {
  console.log("Texto");
} else if (typeof variavel === "boolean") {
  console.log("Booleano");
} else {
  console.log("Outro tipo");
};
```

```
switch (typeof variavel) {
  case "number":
    console.log("Número");
    break;
  case "string":
    console.log("Texto");
  break;
  case "boolean":
    console.log("Boolean");
  break;
  default:
    console.log("Outro tipo");
  break;
};
```

**Evento para maiores (exercício sem acompanhar o vídeo)**
Imprima se a pessoa vai pagar inteira, meia ou não pode comprar ingresso.

```
const pessoa = {
  nome: "Pedro",
  idade: 26,
  estudante: false
};

const inteira = 20;
const meia = 10;

if (pessoa.idade >= 18) {
  if (pessoa.estudante === true) {
    console.log("Meia");
  } else {
    console.log("Inteira");
  };
} else {
  console.log("Não pode comprar ingresso.");
};
```

**Exercício acompanhando o vídeo**

```
const pessoa = {
  nome: "Pedro",
  idade: 16,
  estudante: true,
  temComprovante: false,
  nomeNaLista: true
};

const inteira = 20;
const meia = 10;
const desc = 5;
let valorAPagar;

if (pessoa.idade >= 18) {
  if (pessoa.estudante && pessoa.temComprovante) {
    valorAPagar = meia;
  } else {
    valorAPagar = inteira;
  };

  if (pessoa.nomeNaLista) {
    valorAPagar = valorAPagar - desc;
  };

  console.log(pessoa.nome + " tem que pagar " + valorAPagar + " reais.")

} else {
  console.log(pessoa.nome + " não pode comprar ingresso.");
};
```

### Exercícios para casa

**1. Pedra, papel ou tesoura.** Duas pessoas estão jogando pedra, papel ou tesoura. Você deve imprimir o nome da jogadora vencedora, ou "empate", em caso de empate.
```
const jogadora1 = {
nome: "Maria",
jogada: "papel"
}
const jogadora2 = {
nome: "Clara",
jogada: "papel"
}
//seu código aqui

if (jogadora1.jogada === jogadora2.jogada) {
  
  console.log("Empate");

} else if (jogadora1.jogada === "pedra" && jogadora2.jogada === "tesoura") {

  console.log("Maria");

} else if (jogadora1.jogada === "tesoura" && jogadora2.jogada === "pedra") {

  console.log("Clara");

} else if (jogadora1.jogada === "pedra" && jogadora2.jogada === "papel") {

  console.log("Clara");

} else if (jogadora1.jogada === "papel" && jogadora2.jogada === "pedra") {

  console.log("Maria");

} else if (jogadora1.jogada === "tesoura" && jogadora2.jogada === "papel") {

  console.log("Maria");

} else {

  console.log("Clara");

};
```
**2. Par ou ímpar.** Duas pessoas estão jogando par ou ímpar. Você deve imprimir o nome da jogadora vencedora.
```
const jogadora1 = {
nome: "Maria",
jogada: 5,
escolha: "par"
};

const jogadora2 = {
nome: "Clara",
jogada: 3,
escolha: "impar"
};
//seu código aqui

const resultado = jogadora1.jogada + jogadora2.jogada;
let ehPar;

if (resultado % 2 === 0) {
  
  ehPar = true;

} else {
  
  ehPar = false;

};

if (jogadora1.escolha === "par" && ehPar === true) {

  console.log("Maria");

}
  
  else if (jogadora1.escolha === "impar" && ehPar === false) {

    console.log("Maria");

  }

  else {

    console.log("Clara");
  
  };
```
**3. Dominó.** Num jogo de dominó toda pedra tem dois números. Quando uma pedra tem o mesmo número dos dois lados, dizemos que essa pedra é uma bucha. Faça um programa que imprima se uma pedra é uma bucha ou não.
```
const pedra1 = {
ladoA: 5,
ladoB: 3
};
const pedra2 = {
ladoA: 4,
ladoB: 4
};
//seu código aqui

if (pedra1.ladoA === pedra1.ladoB) {

  console.log("A pedra 1 é uma bucha.");

} else {

  console.log("A pedra 1 não é uma bucha.")

};

if (pedra2.ladoA === pedra2.ladoB) {

  console.log("A pedra 2 é uma bucha.");

} else {

  console.log("A pedra 2 não é uma bucha.")

};
```
**4. Dando nome as pedras.** Modifique o código anterior para que, quando a pedra for uma bucha, digamos qual o "nome" da bucha. Para quem não constuma jogar dominó, segue um glossário:
```
const pedra1 = {
ladoA: 5,
ladoB: 3
};
const pedra2 = {
ladoA: 4,
ladoB: 4
};
//seu código aqui

if (pedra1.ladoA === pedra1.ladoB) {

  if (pedra1.ladoA === 0) {

    console.log("A pedra 1 é a bucha de branco.");
  
  } else if (pedra1.ladoA === 1) {

    console.log("A pedra 1 é a bucha de ás.");

  } else if (pedra1.ladoA === 2) {

    console.log("A pedra 1 é a bucha de duque.");

  } else if (pedra1.ladoA === 3) {

    console.log("A pedra 1 é a bucha de terno.");

  } else if (pedra1.ladoA === 4) {

    console.log("A pedra 1 é a bucha de quadra.");

  } else if (pedra1.ladoA === 5) {

    console.log("A pedra 1 é a bucha de quina.");

  } else {

    console.log("A pedra 1 é a bucha de sena.");

  };

} else {

  console.log("A pedra 1 não é uma bucha.")

};

if (pedra2.ladoA === pedra2.ladoB) {

  if (pedra2.ladoA === 0) {

    console.log("A pedra 2 é a bucha de branco.");
  
  } else if (pedra2.ladoA === 1) {

    console.log("A pedra 2 é a bucha de ás.");

  } else if (pedra2.ladoA === 2) {

    console.log("A pedra 2 é a bucha de duque.");

  } else if (pedra2.ladoA === 3) {

    console.log("A pedra 2 é a bucha de terno.");

  } else if (pedra2.ladoA === 4) {

    console.log("A pedra 2 é a bucha de quadra.");

  } else if (pedra2.ladoA === 5) {

    console.log("A pedra 2 é a bucha de quina.");

  } else {

    console.log("A pedra 2 é a bucha de sena.");

  };

} else {

  console.log("A pedra 2 não é uma bucha.")

};
```

**4.1 Variando.** Modifique o código anterior para utilizar switch case (ou if, caso já tenha usado switch).
```
const pedra1 = {
ladoA: 2,
ladoB: 3
};
const pedra2 = {
ladoA: 3,
ladoB: 3
};
//seu código aqui

if (pedra1.ladoA === pedra1.ladoB) {
  
  switch (pedra1.ladoA) {
    case 0:
    console.log("A pedra 1 é a bucha de branco.")
    break;
    case 1:
    console.log("A pedra 1 é a bucha de ás.");
    break;
    case 2:
    console.log("A pedra 1 é a bucha de duque.");
    break;
    case 3:
    console.log("A pedra 1 é a bucha de terno.");
    break;
    case 4:
    console.log("A pedra 1 é a bucha de quadra.");
    break;
    case 5:
    console.log("A pedra 1 é a bucha de quina.");
    break;
    case 6:
    console.log("A pedra 1 é a bucha de sena.");
    break;
  };

} else {

  console.log("A pedra 1 não é uma bucha.")

};

if (pedra2.ladoA === pedra2.ladoB) {

  switch (pedra2.ladoA) {
    case 0:
    console.log("A pedra 2 é a bucha de branco.")
    break;
    case 1:
    console.log("A pedra 2 é a bucha de ás.");
    break;
    case 2:
    console.log("A pedra 2 é a bucha de duque.");
    break;
    case 3:
    console.log("A pedra 2 é a bucha de terno.");
    break;
    case 4:
    console.log("A pedra 2 é a bucha de quadra.");
    break;
    case 5:
    console.log("A pedra 2 é a bucha de quina.");
    break;
    case 6:
    console.log("A pedra 2 é a bucha de sena.");
    break;
  };

} else {

  console.log("A pedra 2 não é uma bucha.")

};
```