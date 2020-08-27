# #Lógica - A9-10 - 3/08 | Desafio Módulo 1

##### Aluno: Pedro Ciccone


### 1. Peneira de vôlei
Numa "peneira" (processo seletivo para novos jogadores) de vôlei, em alguns clubes, o primeiro filtro é ver se um determinado candidato tem a altura mínima necessária de 180cm. Faça um programa que, dada a altura de um determinado candidato, diga se ele está aprovado ou reprovado nessa primeira fase do processo.

#### Input Format

A entrada é um número inteiro positivo `alturaEmCm`, variável que guarda a altura do candidato.

#### Output Format

* Imprima na tela `APROVADO` caso o jogador tenha 180cm de altura ou mais.
* Imprima na tela `REPROVADO` caso o jogador tenha menos de 180cm.

``` javascript=
function solucao(alturaEmCm) {
	//seu codigo aqui
 
    if (alturaEmCm >= 180) {
        console.log("APROVADO");
    } else {
        console.log("REPROVADO");
    };
};

function processData(input) {
    solucao(parseInt(input, 10));
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

### 2. Definindo as posições

Após passar na primeira fase de uma peneira de vôlei, os candidatos aprovados são separados em grupos diferentes, de acordo com suas alturas, para serem testados para posições específicas. Faça um programa que, dada a altura de um determinado candidato, diga para qual posição ele deverá fazer o teste.

#### Input Format

A entrada é `alturaEmCm`, uma variável que guarda a altura do candidato

#### Output Format

* Caso o jogador tenha menos de 180cm, o programa deve imprimir `REPROVADO`.
* Caso tenha entre 180cm e 185cm, o programa deve imprimir `LIBERO`.
* Caso tenha entre 186cm e 195cm, o programa deve imprimir `PONTEIRO`.
* Caso tenha entre 196cm e 205cm, o programa deve imprimir `OPOSTO`.
* Caso tenha mais de 205cm, o programa deve imprimir `CENTRAL`.

``` javascript=
function solucao(alturaEmCm) {
  //seu codigo aqui
  
    if (alturaEmCm < 180) {
        console.log("REPROVADO");
    } else if (alturaEmCm >= 180 && alturaEmCm <= 185) {
        console.log("LIBERO");
    } else if (alturaEmCm >= 186 && alturaEmCm <= 195) {
        console.log("PONTEIRO");
    } else if (alturaEmCm >= 196 && alturaEmCm <= 205) {
        console.log("OPOSTO");
    } else {
        console.log("CENTRAL");
    };
};

// Caso o jogador tenha menos de 180cm, o programa deve imprimir REPROVADO.
// Caso tenha entre 180cm e 185cm, o programa deve imprimir LIBERO
// Caso tenha entre 186cm e 195cm, o programa deve imprimir PONTEIRO
// Caso tenha entre 196cm e 205cm, o programa deve imprimir OPOSTO
// Caso tenha mais de 205cm, o programa deve imprimir CENTRAL

function processData(input) {
    solucao(parseInt(input, 10));
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

### 3. Truco

O jogo de truco é muito popular pelo Brasil. Numa de suas versões, ele é jogado apenas com as cartas `Q J K A 2 3`. Elas tem essa ordem de "força" nesse jogo, sendo `3` a mais valiosa e `Q` a menos valiosa. Contudo, a cada partida é virada uma carta com a face pra cima na mesa. Esta carta serve para indicar que a próxima carta é a `manilha`, ou seja, a carta mais poderosa para essa partida. Fizemos uma tabela resumo para explicar essa mecânica:

Carta virada pra cima - Manilha
Q - J
J - K
K - A
A - 2
2 - 3
3 - Q

Supondo que a carta virada pra cima dessa rodada seja um ás (A), a manilha será 2, isso significa que 2 é a carta mais forte dessa rodada.

Faça um programa que diga qual é a manilha, dada uma carta virada para cima.

#### Input Format

A entrada é um string armazenado na variável `cartaParaCima` que indica qual carta ficou virada para cima. Será sempre uma das opções: `Q`, `J`, `K`, `A`, `2`, `3`.

#### Output Format

Imprima na tela qual é a manilha desta partida. Sua resposta deve ser sempre uma das opções: `Q`, `J`, `K`, `A`, `2`, `3`.

``` javascript=
function solucao(carta) {
    //seu código aqui
    
    for (i = 0; i < carta.length; i++) {
        
        if (carta[i] === "Q") {
            console.log("J");
        } else if (carta[i] === "J") {
            console.log("K");
        } else if (carta[i] === "K") {
            console.log("A");
        } else if (carta[i] === "A") {
            console.log("2");
        } else if (carta[i] === "2") {
            console.log("3");
        } else {
            console.log("Q");
        };
    
    };
    
};

function processData(input) {
    solucao(input);
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

### 4. Horário de funcionamento

Um determinado estabelecimento funciona apenas em um horário comercial, ou seja, das 8h as 18h. Dado um determinado horário de chegada de um cliente, faça um programa que exiba na tela se o estabelecimento está `ABERTO` ou `FECHADO` no momento da chegada do cliente.

#### Input Format

A entrada será sempre composta por duas variáveis: - `hora` que contém sempre um número inteiro, informanto a hora inteira do horario da chegada do cliente. - `min` que contém sempre um número inteiro que informa os minutos do horário da chegada do cliente.

#### Output Format

* Imprima `ABERTO` caso o estabelecimento esteja aberto no momento da chegada do cliente.
* Imprima `FECHADO` caso o estabelecimento esteja fechado no momento da chegada do cliente.

``` javascript=
function solucao(hora, min) {
    //seu código aqui

    if (hora >= 8 && hora <= 17) {
        console.log("ABERTO");
    } else if (hora === 18 && min === 00) {
        console.log("ABERTO");
    } else {
        console.log("FECHADO");
    };

};



function processData(input) {
    const x = input.split(":");
    const hora = parseInt(x[0], 10);
    const min = parseInt(x[1], 10);
    
    solucao(hora, min)
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

### 5. Imposto de renda

Segundo a receita federal, algumas pessoas são isentas do pagamento de imposto de renda. Simplificamos aqui quem são essas pessoas:

* Pessoas portadores de alguma doença grave.
* Pessoas que já estão aposentadas.

Caso a pessoa não esteja isenta, avalia-se seus rendimentos tributáveis ao longo do ano. Caso esses total de rendimentos seja superior a R$ 28.559,70, a pessoa deve pagar imposto de renda, caso contrário, não.

A variável `pessoa` é um objeto que guarda alguns dados relativo a critérios de isenção e o total de rendimentos tributáveis de uma determinada pessoa. Faça um programa que determine se a pessoa deve pagar IR ou não.

#### Input Format

A entrada é uma objeto que pode ser acessado através da variável `pessoa`, que tem o seguinte formato:

``` javascript=
{
    portadoraDeDoenca: false,
    aposentada: false,
    totalDeRendimentos: 3000000 //em centavos
}
```

#### Output Format

Caso a pessoa não deva pagar IR por pertencer ao grupo de pessoas isentas, imprima na tela `ISENTA` Caso a passoa não deva pagar IR por nao ter o rendimento mínimo necessário, imprima na tela `VAZA LEAO! JA TA DIFICIL SEM VOCE` Caso a pessoa deva pegar IR imprima na tela `PEGA LEAO`.

``` javascript=
function solucao(pessoa) {
  	//SEU CODIGO AQUI
    
    if (pessoa.portadoraDeDoenca === false && pessoa.aposentada === false) {
        
        if (pessoa.totalDeRendimentos > 2855970) {
            console.log("PEGA LEAO");
        } else {
            console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
        };
        
    } else {;
        
        console.log("ISENTA");  
    
    };
    
};

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
```

### 6. Múltiplo de 6?

Os múltiplos de um determinado número X são aqueles que, ao serem divididos por X, deixa sempre 0 como resto. Faça um programa que verifica se um determinado número é multiplo de 6.

#### Input Format

A variável `numero` guarda um inteiro positivo que deve ser testado se é múltiplo de 6.

#### Output Format

Imprima `SIM` caso o número seja múltiplo de 6. Imprima `NAO`, caso contrário.

``` javascript=
function solucao(numero) {
    //seu codigo aqui
    
    if (numero % 6 === 0) {
        console.log("SIM");
    } else {
        console.log("NAO");
    };
    
};

function processData(input) {
   solucao(parseInt(input, 10));
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

### 7. Contador de caracteres

Faça um programa que conta a quantidade de caracteres num texto.

#### Input Format

A entrada será sempre um texto qualquer, guardado na variável `texto`.

#### Output Format

Imprima na tela apenas um número, que representa o total de caracteres do texto.

``` javascript=
function solucao(texto) {
  //seu código aqui

    let contador = 0;
    
    for (i = 0; i < texto.length; i++) {
        
        if (texto[i] !== "") {
            contador++
        };
    
    };
    
    console.log(contador);
    
};

function processData(input) {
	solucao(input);
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

### 8. Colaboradores na Cubos

Guarda-se num array a quantidade de pessoas que entraram (ou saíram) da Cubos por mês. Cada item do array representa a quantidade de pessoas que entrou (número positivo) ou saiu (número negativo) num dado mês. Faça um programa que calcule o total de pessoas na Cubos atualmente.

#### Input Format

A entrada é um vetor `novasPessoasPorMes` em que cada item do vetor é um inteiro (positivo ou negativo) indicando a quantidade de pessoas que entrou ou saiu da empresa a cada mês, desde sua fundação, até o dia de hoje.

#### Output Format

Imprima na tela um número inteiro que representa o total de pessoas na Cubos Tecnologia atualmente.

``` javascript=
function solucao(novasPessoasPorMes) {
    //seu codigo aqui
    
    let total = 0;
    
    for (i = 0; i < novasPessoasPorMes.length; i++) {    
        total += novasPessoasPorMes[i];
    };
    
    console.log(total);
    
};

function processData(input) {
    const lista = input.split(" ");
    lista.forEach((x, i) => {
        lista[i] = parseInt(x, 10);
    });
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

### 9. Presença

Na Cubos Academy estamos sempre muito atentos ao engajamento de nossos alunos em nossas turmas. Em cada aula, registramos se cada aluno estava presente ou não. Para nos auxiliar, faça um programa que calcula a porcentagem de presentes numa determinada aula a partir destes dados.

#### Input Format

A entrada é um vetor `alunos` em que cada item é um objeto que representa um aluno, no seguinte formato:

``` javascript=
{
    nome: "Alessandra",
    presente: true 
}
```

#### Output Format

Imprima na tela um numero inteiro entre 0 e 100 que representa a % de presentes. Utilize o método `Math.floor(porcentagem)` antes de imprimir para garantir que a sua resposta seja arredondada para baixo.

``` javascript=
function solucao(alunos) {
    //seu codigo aqui
  	
    let total = alunos.length, presentes = 0, porcentagem = 0;
    
    for (i = 0; i < alunos.length; i++) {
        
        if (alunos[i].presente) {
            presentes++;
        };
        
    };
    
    porcentagem = Math.floor((presentes / total) * 100);
        
    console.log(porcentagem);
    
};

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
```

### 10. Notas dos alunos

Na Cubos Academy estamos sempre muito atentos ao resultado de nossos alunos em nossas turmas. Em cada unidade, registramos a nota de cada aluno. Para nos auxiliar, faça um programa que calcula a nota média da turma a partir destes dados.

#### Input Format

A entrada é um vetor `alunos` em que cada item é um objeto no seguinte formato:

``` javascript=
{
    nome: "Sarah",
    nota: 10 
}
```

#### Output Format

Imprima na tela um numero inteiro entre 0 e 10 que representa a média arredonda para baixo da turma. Utilize o método `Math.floor(notas)` antes de imprimir para garantir que a sua resposta seja arredondada para baixo.

``` javascript=
function solucao(alunos) {
  //seu código aqui
  
    let notas = 0, qtdAlunos = alunos.length, media = 0;
    
    for (i = 0; i < alunos.length; i++) {
        
        notas += alunos[i].nota;  
        
    };
    
    media = Math.floor(notas / qtdAlunos);
        
    console.log(media);
    
};

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
```

### 11. Horário de funcionamento II

Um determinado estabelecimento funciona apenas em um horário específico. Dado um determinado horário de chegada de um cliente, faça um programa que exiba na tela se o estabelecimento está `ABERTO` ou `FECHADO` no momento da chegada do cliente.

#### Input Format

A entrada é um objeto `horarios` que contém 3 propriedades, cada uma guardando um horário: - `abertura`, que guarda hora e min de abertura da loja. - `fechamento` que guarda hora e min de fechamento da loja. - `cliente` que guarda hora e min de chegada do cliente.

#### Output Format

* Imprima `ABERTO` caso o estabelecimento esteja aberto no momento de chegada do cliente.
* Imprima `FECHADO` caso o estabelecimento esteja fechado no momento de chegada do cliente.

``` javascript=
function solucao(horarios) {
  //seu código aqui
  
    if (horarios.cliente.hora > horarios.abertura.hora && horarios.cliente.hora < horarios.fechamento.hora) {
        
        console.log("ABERTO");
    
    } else if (horarios.cliente.hora === horarios.fechamento.hora && horarios.cliente.min <= horarios.fechamento.min) {
    
        console.log("ABERTO");
    
    } else if (horarios.cliente.hora === horarios.abertura.hora && horarios.cliente.min >= horarios.abertura.min) {
    
        console.log("ABERTO");
    
    } else {
      
        console.log("FECHADO");
        
    };
}

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
```

### 12. Zerinho ou um

Quando precisa-se escolher apenas uma pessoa aleatoriamente dentro de um grupo, é comum jogar "zerinho ou um" para sortear alguém. O jogo é muito simples: cada jogador joga 0 ou 1 com as mão. Aquele que for o único(a) a jogar zero ou um é o sorteado. Faça um programa que imprima o nome da pessoa que foi sorteada, ou `NINGUEM`, caso ninguém tenha sido sorteado(a).

#### Input Format

A entrada será sempre um vetor de objetos chamado `jogadores`, em que cada objeto é uma pessoa, com o seguinte formato:

``` javascript=
{
    nome: "Herbert",
    jogada: 0 //será sempre 0 ou 1
}
```

#### Constraints

Pode-se assumir que sempre haverá pelo menos 3 pessoas jogando, ou seja, a entrada será sempre um vetor com pelo menos 3 itens. Você não precisa fazer nenhum código para checar isso.

#### Output Format

Imprima na tela o nome do jogador que foi sorteado.

``` javascript=
function solucao(jogadores) {
  //seu código aqui

    let zeros = [], ones = [];
    
    for (i = 0; i < jogadores.length; i++) {
        
        if (jogadores[i].jogada === 0) {
            
            zeros.push(jogadores[i]);
            
        } else {
            
            ones.push(jogadores[i]);
            
        };
        
    };
    
    if (zeros.length === 1) {
        
        console.log(zeros[0].nome);
        
    } else if (ones.length === 1) {
        
        console.log(ones[0].nome);
        
    } else {
     
        console.log("NINGUEM");
        
    };
        
};

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
```

### 13. Colaboradores na Cubos II

Guarda-se num array a quantidade de pessoas que entraram (ou saíram) da Cubos por mês. Cada item do array representa a quantidade de pessoas que entrou ou saiu num dado mês. Faça um programa que calcule qual era o total de pessoas na Cubos a cada mês.

#### Input Format

A entrada é um vetor `novasPessoasPorMes` em que cada item do vetor é um inteiro (positivo ou negativo) indicando a quantidade de pessoas que entrou ou saiu da empresa a cada mês.

#### Output Format

Imprima na tela um novo vetor, de mesmo tamanho, contendo qual era o total de colaboradores na empresa a cada mês.

``` javascript=
 function solucao(novasPessoasPorMes) {
    //seu codigo aqui
    
     let total = 0, resultado = [];
     
     for (i = 0; i < novasPessoasPorMes.length; i++) {
         
         total += novasPessoasPorMes[i];
         resultado.push(total);
         
     };

    console.log(resultado);

};

function processData(input) {
    const lista = input.split(" ");
    lista.forEach((x, i) => {
        lista[i] = parseInt(x, 10);
    });
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

### 14. Taxímetro

Você é o programador responsável por programar o "taxímetro" do novo aplicativo de mobilidade que a empresa onde você trabalha está lançando. Nessa tarefa, dada uma distância percorrida e um tempo de viagem, você tem que fazer um programa que calcula o preço da viagem. Sabe-se que o app deve cobrar, inicialmente, 50 centavos por minuto de viagem e mais 70 centavos por cada quilômtro de viagem realizado. Caso a viagem tenha mais de 10km, cada km adicional (acima de 10) fica mais barato, passando a custar apenas 50 centavos por km. Caso a viagem dure mais de 20min, cada min adicional (acima de 20) fica mais barato, passando a custar apenas 30 cetavos por minuto. Seu trabalho é fazer a parte do programa que calcula, em centavos, o valor a ser pago pelo cliente (quanta responsabilidade, hein?). Lembre-se de arredondar para baixo o valor final a ser pago.

#### Input Format

A entrada é composta por duas variáveis: - `min` representa quantos minutos de duração a viagem teve. É sempre um número inteiro. - `km` representa quantos quilômetros foram percorridos na viagem. Pode ser um número com casas decimais.

#### Output Format

Imprima na tela um único inteiro que representa o valor que deve ser pago pelo cliente, em centavos.

``` javascript=
function solucao(min, km) {
    //seu codigo aqui
    
    let total = 0, valorMin = 0, valorKm = 0;
    
    if (min <= 20) {
        
        valorMin = min * 50;
    
    } else {
        
        valorMin = 20 * 50;
        valorMin += (min - 20) * 30;
    
    };
    
    if (km <= 10) {
        
        valorKm = km * 70;
    
    } else {
        
        valorKm = 10 * 70;
        valorKm += (km - 10) * 50;
        
    };
    
    total = Math.floor(valorMin + valorKm);
    
    console.log(total);

};

function processData(input) {
    const x = input.split(" ");
    const min = parseFloat(x[0], 10);
    const km = parseFloat(x[1], 10);
    solucao(min, km);
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

### 15. Barrados

Numa determinada festa é permitida a entrada de pessoas com "nome na lista". Para a pessoa poder ter acesso, usa-se seu número de documento, que deve constar igualmente a lista (na prática não é usado realmente o nome). Caso o documento apresentado não bata com o documento que consta na lista, a pessoa é barrada.

Lembre-se, ainda, que caso uma pessoa consiga acesso idôneo a festa, seu nome é cortado da lista para que ninguem mais tenha acesso com seus dados.

Dada uma determinada lista de `convidados` e uma outra lista de `tentativas` de acesso, ou seja, todas as pessoas que tentaram entrar na festa, imprima na tela um inteiro que representa a quantidade de pessoas que foram barradas.

#### Input Format

A entrada é costituída de 2 variáveis:

* `convidados` é uma lista de objetos, em que cada objeto é uma pessoa com o seguinte formato:

``` javascript=
{
    nome: "Nome da Pessoa",
    documento: "00000000000",
}
```

* `tentativas` é uma lista de objetos, em que cada objeto é uma pessoa com o seguinte formato:

``` javascript=
{
    nome: "Nome da Pessoa",
    documento: "00000000000"
}
```

#### Constraints

Cada lista tem de 1 a 1000 itens.

#### Output Format

Imprima na tela um número inteiro indicando a quantidade de pessoas que foram barradas nessa festa.

``` javascript=
function solucao(convidados, tentativas) {
  
        for (i = 0; i < convidados.length; i++) {
                
        for (x = 0; x < tentativas.length; x++) {
            
            if (tentativas[x].nome === convidados[i].nome && tentativas[x].documento === convidados[i].documento) {
                
                tentativas.splice(tentativas[x], 1);
                convidados[i].nome = "entrou";

            };
                
        };
        
    };
    
    console.log(tentativas.length);
    
}

//Nao mexa em nada a partir daqui
function processData(input) {
  	const lines = input.split("%");
  
	solucao(JSON.parse(lines[0]), JSON.parse(lines[1]));
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