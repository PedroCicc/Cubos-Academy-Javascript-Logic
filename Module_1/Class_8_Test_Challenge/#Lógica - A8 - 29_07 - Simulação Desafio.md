# #Lógica - A8 - 29/07 | Simulação Desafio

##### Aluno: Pedro Ciccone

### 1. Par ou ímpar?

Em período de pandemia, dois irmãos, João e André, estão disputando o controle da TV. Para resolver este impasse, resolveram disputar no par ou ímpar. João jogou o número `j` e André jogou o número `a`. Para descobrir quem ganhou, precisam da sua ajuda para escrever um programa que diga o vencedor.

#### Input Format

* `j` é o número que foi jogado por João.
* `a` é o número que foi jogado por André.

#### Constraints

* `j < 10`
* `a < 10`

#### Output Format

Imprima `PAR` caso o vencedor seja o irmão que escolheu par, ou imprima `IMPAR` (sem acento), caso contrário.

``` javascript=
function solucao(j, a) {
    // Escreva seu código aqui
    
    const soma = j + a;
    
    if (soma % 2 === 0) {
        console.log("PAR");
    } else {
        console.log("IMPAR");
    };
}

function processData(input) {
  const pairs = input.split(" ");
  const j = parseInt(pairs[0], 10);
  const a = parseInt(pairs[1], 10);
  solucao(j, a);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});
process.stdin.on("end", function () {
  processData(_input);
});
```

### 2. Soma dos elementos

Álvaro está economizando para comprar uma uma passagem para a europa. Por isso diariamente ele coloca um valor no cofre. Faça um programa que calcule o total acumulado no cofre até o momento.

#### Input Format

A entrada será sempre uma lista de inteiros positivos.

#### Constraints

A lista pode conter até 1000 inteiros positivos.

#### Output Format

Imprima na tela o total acumulado nessa lista.

``` javascript=
function solucao(lista) {
  //seu codigo aqui
  
    let soma = 0

    for(let i = 0; i < lista.length; i++) {
        
        soma += lista[i];
    }
    
    console.log(soma);
    
}


function processData(input) {
  	const strings = input.split(" ");
    const numeros = [];
	for(let i = 0; i < strings.length; i++) {
    	  numeros.push(parseInt(strings[i] ,10));
  	}
    solucao(numeros);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});
```

### 3. Média aritmética

Álvaro está economizando para viajar para a europa. Todo dia ele coloca mais dinheiro no seu cofre. A quantidade de dinheiro que ele coloca no cofre a cada dia está registrada no array `lista`. Faça um programa que calcule quanto Álvaro vem acumulando, em média, por dia.

#### Input Format

A entrada é uma lista que contém quanto Álvaro guarda no cofre a cada dia.

#### Constraints

A lista tem de 0 a 1000 itens.

#### Output Format

Imprima na tela o quanto Álvaro vem acumulando, em média, por dia.

``` javascript=
function solucao(lista) {
  	//seu codigo aqui
    
    let soma = 0;
  
    for(let i = 0; i < lista.length; i++) {
        
        soma += lista[i];
        
    };
    
    const media = soma / lista.length;
    
    console.log(media);
}

function processData(input) {
  	const strings = input.split(" ");
    const numeros = [];
	for(let i = 0; i < strings.length; i++) {
    	  numeros.push(parseInt(strings[i] ,10));
  	}
    solucao(numeros);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
```

### 4. Mesa de poker

Numa mesa de poker existe um valor mínimo de dinheiro que você precisa ter para poder jogar naquela mesa. Contudo, há também um limite, pois jogadores com muito mais dinheiro na mesa levam vantagem. Faça um programa que selecione dentre um lista de valores, apenas aqueles que são permitidos para se jogar numa determiada mesa de poker.

#### Input Format

A entrada é costituida de 3 variáveis: - `min` é o mínimo necessário para se poder jogar nesta mesa. - `max` é o máximo permitido para se poder jogar nesta mesa. - `valores` é um array que contém os valores com os quais o jogadores estão tentando sentar na mesa para jogar.

#### Constraints

A lista tem de 1 a 1000 itens.

#### Output Format

Imprima na tela a lista contendo apeas os valores que são autorizados a jogar nessa mesa, mantendo a mesma ordem da entrada.

``` javascript=
function solucao(min, max, valores) {
  //seu código aqui
  
    let valoresPermitidos = [];
    
    for(let i = 0; i < valores.length; i++) {
        
        if (valores[i] >= min && valores[i] <= max) {
            
            valoresPermitidos.push(valores[i]);
        };
    };
    
    console.log(valoresPermitidos);

}


function processData(input) {
    //Enter your code here
    const lines = input.split("\n");
    const min = lines[0];
    const max = lines[1];
  	const strings = lines[2].split(" ");
    const valores = [];
	for(let i = 0; i < strings.length; i++) {
    	  valores.push(parseInt(strings[i] ,10));
  	}
    solucao(min, max, valores);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
```

### 5. Caçula dos adultos

Um determinado evento é permitido apenas para maiores de idade. Através de um lista com as idades dos potenciais participantes, seu objetivo é fazer um programa que determine qual a idade da pessoa mais nova, dentre os que podem participar (maiores de idade).

#### Input Format

A entrada é um array com as idades das pessoas que tentam participar.

#### Constraints

A lista contém de 1 a 1000 itens.

#### Output Format

Imprima na tela a idade da pessoa mais jovem que pode participar. Se ninguém puder participar, imprima na tela a mensagem `CRESÇA E APAREÇA`.

``` javascript=
function solucao(lista) {
  // seu código aqui
    
    let menorIdade = null;
        
    for(let i = 0; i < lista.length; i++) {
        
        if (lista[i] >= 18) {
            
            if (menorIdade === null) {
                
                menorIdade = lista[i];
            
            } else {
                
                if (lista[i] < menorIdade) {
                    
                    menorIdade = lista[i];
                    
                };
                
            };
            
        };
        
    };
  
    if (menorIdade === null) {
        
        console.log("CRESÇA E APAREÇA");
        
    } else {
        
        console.log(menorIdade)
    };
    
};



function processData(input) {
    //Enter your code here
  	const strings = input.split(" ");
    const numeros = [];
	for(let i = 0; i < strings.length; i++) {
    	  numeros.push(parseInt(strings[i] ,10));
  	}
    solucao(numeros);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
```

### 6. Montanha russa muito assustadora

Num parque de diversões existe uma Montanha Russa Muito Assustadora. Por isso, nesta montanha russa não são permitidas pessoas:

* Menores de 12 anos.
* Maiores de 65 anos.
* Que possuam qualquer patologia cardíaca.
* Menores de 150cm de altura.

Agências de turismo costumam levar grupos grandes para este parque de diversões. Como esta é uma montanha russa muito concorrida, as agências mandam antecipadamente a sua lista de clientes, com alguns dados sobre eles.

O pacote contratado por essas agências tem um valor adicional a ser pago que é calculado baseando-se na quantidade de pessoas que vai curtir a Montanha Russa Muito Assustadora, a saber:

* 10 reais por pessoa que seja estudante ou menor de 18 anos (meia entrada).
* 20 reias para cada uma das outras pessoas (inteira).

Você está estagiando no parque de diversões e o seu trabalho, dada frenética procura durante a alta estação, está sendo basicamente receber essa lista das agências e calcular o valor adicional a ser pago. Para otimizar seu trabalho (e fazer uma moral com a chefa), você resolveu fazer um programa de computador que calcula esse valor automaticamente.

#### Input Format

A entrada será sempre uma lista de objetos, em que cada item é um objeto que possui os dados da pessoa que tem interesse em curtir a montanha russa. O formato de cada um dos objetos é como no modelo abaixo:

``` javascript=
{
    "nome": "Tiffany",
    "idade": 24,
    "alturaEmCm": 156,
    "possuiPatologiaCardiaca": false,
    "ehEstudante": true
}
```
  
#### Constraints

A lista contém menos de 1000 pessoas.

#### Output Format

Imprima apenas o valor adicional a ser pago pela agência.

``` javascript=
function solucao(listaDePessoas) {
  
    let valorAdicional = 0;
    
    for(i = 0; i < listaDePessoas.length; i++) {
        
        if (listaDePessoas[i].idade < 12
            || listaDePessoas[i].idade > 65
            || listaDePessoas[i].possuiPatologiaCardiaca
            || listaDePessoas[i].alturaEmCm < 150) {

            continue;

        } else if (listaDePessoas[i].idade < 18) {

            valorAdicional += 10;

        } else {

            if (listaDePessoas[i].ehEstudante === true) {

                valorAdicional += 10;

            } else {

                valorAdicional += 20;

            };

        };
    
    };
    
    console.log(valorAdicional);

};

//Nao mexa em nada a partir daqui
function processData(input) {
	solucao(JSON.parse(input));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

undefined
```

### 7. Promoção!

Para o dia dos namorados, um loja de presentes que, sabiamente, investiu em tecnologia e fazia uma profunda análise de dados percebeu que mais de 80% dos seus clientes compravam 2 itens nessa época. Com o objetivo de tentar aumentar o faturamento, essa loja lançou uma promoção, na qual o cliente que comprasse pelo menos 3 itens, teria um desconto de 50% no item mais barato.

Contudo, juntando a alta demanda desse período com o fato de o caixa ter que calcular esse desconto manualmente está causando filas demais. Seu papel, como desenvolvedor(a) dessa empresa é fazer um algoritmo que calcule automaticamente o valor devido pelo cliente ao se aplicar essa promoção quando necessário.

#### Input Format

A entrada será sempre um vetor de inteiros positivos. Cada inteiro desse representa o valor de cada produto comprado por um dado cliente, em centavos.

#### Constraints

O vetor terá sempre no máximo 100 itens.

#### Output Format

Imprima o valor a ser pago pelo cliente, visto que esta promoção está em vigor. Imprima este valor também em centavos.

``` javascript=
function solucao(precos) {
  //seu código aqui
  
    let valor = 0, valorMenor = precos[0];
    
    for(i = 0; i < precos.length; i++) {
      
        valor += precos[i];

        if (precos[i] < valorMenor) {
                
          valorMenor = precos[i];
                                            
        };
    
    };
        
    if (precos.length < 3) {

        console.log(valor);
       
    } else {
        
        const desconto = valorMenor / 2;
        const valorTotal = valor - desconto;
        
        console.log(valorTotal);
        
    };
        
};

//Não mexa em nada daqui para baixo

function processData(input) {
  const lista = input.split(" ");
  lista.forEach((x, i, a) => a[i] = parseInt(x, 10));
  solucao(lista);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
```

### 8. Contador de palavras

Todo bom editor de texto informa no rodapé do programa quantas palavras tem no texto. Você está trabalhando numa empresa que está desenvolvendo um editor de texto e ficou com a tarefa de desenvolver esta funcionalidade. Para o texto dado na entrada, imprima na tela quantas palavras existem neste texto.

#### Input Format

A entrada será sempre um texto qualquer.

#### Constraints

A entrada será sempre um texto qualquer com no máximo 5000 caracteres.

#### Output Format

Imprima na tela a quantidade de palavras contidas no texto.

``` javascript=
function solucao(texto) {
    // Seu código aqui
    
        let contador = 0;
    
    for(i = 1; i < texto.length; i++) {
        
        if (texto[i] === " ") {
            
            if (texto[i - 1] !== " ") {
        
                contador++;
                
            };
        
        };
        
    };
    
            
    if (texto[texto.length - 1] !== " ") {
        
        contador++;
        
    };
    
    console.log(contador);
    
};

function processData(input) {
	solucao(input)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
```