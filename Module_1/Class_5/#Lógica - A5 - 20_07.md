# #Lógica - A5 - 20/07

##### Aluno: Pedro Ciccone

### Exercícios aula

**1.** Imprima na tela o total de votos até o momento.
```
function processarVotos(votosA, votosB, votosC) {
    //Sua resolução aqui
    let resultadoTotal = votosA + votosB + votosC;

    imprimir(`Atualmente, a votação acumula ${resultadoTotal} votos.`);
};
```
**2.** Imprima na tela o candidato que está ganhando. Em caso de empate pode imprimir o nome de qualquer um deles.
```
function processarVotos(votosA, votosB, votosC) {
    //Sua resolução aqui

    if (votosA > votosB && votosA > votosC) {
        
        imprimir("O cantidato A está ganhando.");

    } else if (votosB > votosA && votosB > votosC) {

        imprimir("O candidato B está ganhando.");

    } else if (votosC > votosA && votosC > votosB) {

        imprimir("O candidato C está ganhando.");
    
    }   else {

        imprimir("Nesse momento está se produzindo um empate.")

    };

};
```
**3.** Imprima na tela o nome do candidato que está ganhando e a quantidade de votos dele.
```
function processarVotos(votosA, votosB, votosC) {
    //Sua resolução aqui

    if (votosA > votosB && votosA > votosC) {

        imprimir(`O candidato A está ganhando com ${votosA} votos.`);

    } else if (votosB > votosA && votosB > votosC) {

        imprimir(`O candidato B está ganhando com ${votosB} votos.`);

    } else if (votosC > votosA && votosC > votosB) {

        imprimir(`O candidato C está ganhando com ${votosC} votos.`);

    } else {

        imprimir("Atualmente, está se produzindo um empate.");

    };

};
```
**4.** Imprima na tela o nome do candidato que está ganhando e a porcentagem dos votos totais que ele tem.
```
function processarVotos(votosA, votosB, votosC) {
    //Sua resolução aqui

    let resultadoTotal = votosA + votosB + votosC;
    let porcentagemA = (votosA * 100) / resultadoTotal, porcentagemB = (votosB * 100) / resultadoTotal, porcentagemC = (votosC * 100) / resultadoTotal;

    if (votosA > votosB && votosA > votosC) {

        imprimir(`O candidato A está ganhando com o ${porcentagemA}% dos votos.`);

    } else if (votosB > votosA && votosB > votosC) {

        imprimir(`O candidato B está ganhando com o ${porcentagemB}% dos votos.`);

    } else if (votosC > votosA && votosC > votosB) {

        imprimir(`O candidato C está ganhando com o ${porcentagemC}% dos votos.`);

    } else {

        imprimir("Atualmente, está se produzindo um empate.");

    };

};
```
**5.** Imprima na tela o nome do candidato que está ganhando e se haverá segundo turno (não há segundo turno quando o candidato mais votado tem, pelo menos, 50% dos votos totais + 1 voto).
```
function processarVotos(votosA, votosB, votosC) {
    //Sua resolução aqui
    
    let resultadoTotal = votosA + votosB + votosC;
    let porcentagemA = (votosA * 100) / resultadoTotal, porcentagemB = (votosB * 100) / resultadoTotal, porcentagemC = (votosC * 100) / resultadoTotal;

    if (votosA > votosB && votosA > votosC) {

        if (votosA > (resultadoTotal / 2)) {

        imprimir(`O candidato A está ganhando com o ${porcentagemA}% dos votos, pelo que não haveria segundo turno.`);

        } else {

            imprimir(`O candidato A está ganhando com o ${porcentagemA}% dos votos. Até agora, há segundo turno.`);

        };

    } else if (votosB > votosA && votosB > votosC) {

        if (votosB > (resultadoTotal / 2)) {

            imprimir(`O candidato B está ganhando com o ${porcentagemB}% dos votos, pelo que não haveria segundo turno.`);
    
        } else {
    
            imprimir(`O candidato B está ganhando com o ${porcentagemB}% dos votos. Até agora, há segundo turno.`);
    
        };

    } else if (votosC > votosA && votosC > votosB) {

        if (votosC > (resultadoTotal / 2)) {

            imprimir(`O candidato A está ganhando com o ${porcentagemC}% dos votos, pelo que não haveria segundo turno.`);
  
        } else {
    
            imprimir(`O candidato A está ganhando com o ${porcentagemC}% dos votos. Até agora, há segundo turno.`);
  
        };

    } else {

        imprimir("Atualmente, está se produzindo um empate.");

    };

};
```
**6.** Imprima na tela o candidato que está ganhando e quantos votos ele tem de vantagem para o segundo colocado. Em caso de empate imprima o nome dos que estão empatados.
```
function processarVotos(votosA, votosB, votosC) {
    //Sua resolução aqui

    const ranking = [];

    if (votosA >= votosB) {
        ranking[0] = {
            nome: "A",
            votos: votosA
        };
        ranking[1] = {
            nome: "B",
            votos: votosB
        };
    } else {
        ranking[0] = {
            nome: "B",
            votos: votosB
        };
        ranking[1] = {
            nome: "A",
            votos: votosA
        };
    };

    if (votosC > ranking[0].votos) {
        ranking.unshift({
            nome: "C",
            votos: votosC
        });
    } else {     
        if (votosC > ranking[1].votos) {
            ranking.push(ranking[1]);
            ranking[1] = {
                nome: "C",
                votos: votosC
            };
        } else {
            ranking.push({
                nome: "C",
                votos: votosC
            });
        };
    };

    const vantagem = ranking[0].votos - ranking[1].votos;

    if (vantagem === 0) {
        if (ranking[1].votos - ranking[2].votos === 0) {
            imprimir("Os três candidatos estão empatados.");
        } else {
            imprimir(`Os candidatos ${ranking[0].nome} e ${ranking[1].nome} estão empatados no primeiro lugar.`)
        };
    } else {
        if (vantagem === 1) {
            imprimir(`O candidato ${ranking[0].nome} está vencendo com ${vantagem} voto de vantagem.`)
        } else {
            imprimir(`O candidato ${ranking[0].nome} está vencendo com ${vantagem} votos de vantagem.`)
        };
    };

};
```
**7.** Imprima na tela o candidato que está perdendo e quantos votos ele precisa receber para empatar com o primeiro.
```
function processarVotos(votosA, votosB, votosC) {
    //Sua resolução aqui

    const ranking = [];

    if (votosA >= votosB) {
        ranking[0] = {
            nome: "A",
            votos: votosA
        };
        ranking[1] = {
            nome: "B",
            votos: votosB
        };
    } else {
        ranking[0] = {
            nome: "B",
            votos: votosB
        };
        ranking[1] = {
            nome: "A",
            votos: votosA
        };
    };

    if (votosC > ranking[0].votos) {
        ranking.unshift({
            nome: "C",
            votos: votosC
        });
    } else {     
        if (votosC > ranking[1].votos) {
            ranking.push(ranking[1]);
            ranking[1] = {
                nome: "C",
                votos: votosC
            };
        } else {
            ranking.push({
                nome: "C",
                votos: votosC
            });
        };
    };

    const desvantagem = ranking[0].votos - ranking[2].votos;

    if (desvantagem === 0) {
        if (ranking[1].votos - ranking[2].votos === 0) {
            imprimir("Os três candidatos estão empatados.");
        };
    } else {
        if (desvantagem === 1) {
            imprimir(`O candidato ${ranking[2].nome} está perdendo por ${desvantagem} voto.`)
        } else {
            imprimir(`O candidato ${ranking[2].nome} está perdendo por ${desvantagem} votos.`)
        };
    };

};
```
**8. DESAFIO EXTRA.** Imprima na tela a quantidade de votos que o candidato que está na segunda posição deveria receber em sequência para alcançar o segundo turno. Dicas:
* Lembre-se de que a cada novo voto recebido por este candidato o total de votos também aumenta.
* A matemática está em dia por aí? Recomendo papel e caneta.
* Cuidado para não imprimir números negativos na tela, pega mal.
```

```
### Exercícios casa

#### Introdução
Num jogo de vôlei de praia, dois times disputam ponto a ponto. O primeiro time a fazer 21 pontos ou mais, desde que tenha 2 pontos de vantagem sobre o adversário, vence o set. Ao vencer um set, um novo se inicia do zero. Vence a partida o time que vencer dois sets primeiro.

Caso cada um dos times vença um set, o jogo vai para o terceiro set. O terceiro set é chamado de tie break, ou set de desempate. Neste set, vence o time que primeiro fizer 15 pontos ou mais, desde que tenha pelo menos 2 pontos de vantagem para o adversário.

Você vai perceber que o placar encontrado no projeto que você baixou não funciona bem. Apesar de ir aumentando a pontuação de cada um dos times, ele não identifica quando um set acabou, nem atualiza a pontuação do set para o time vencedor. Vamos consertá-lo!

#### Exercícios

**1.** Seguindo as regras descritas na introdução, faça com que, no momento adequado, o placar zere a pontuação dos times e aumente em um a pontuação de set do time que venceu o set. Faça isso modificando as variáveis `scoreA`, `scoreB`, `setA`, `setB` quando necessário e depois chamando a função `atualizarPlacar()`, conforme o vídeo explicativo.

**2.** Quando algum time vencer o set, exiba essa informação em informações adicionais, incluindo o nome do time e qual set foi vencido.

**3.** Quando algum time vencer o jogo, exiba essa informação em informações adicionais, incluindo o nome do time que venceu o jogo.

**4.** Toda vez que um time vencer uma partida por 2 sets a 0, exiba a mensagem `Que lavada! O time X venceu por 2 sets a 0`.

**5.** Toda vez que um time está a um ponto de vencer um set, é dito que ele tem um *set-point*. Quando um time tiver um *set-point*, exiba essa informação na tela, incluindo o time que tem o *set-point* e qual set está sendo disputado nesse momento.

**6.** Toda vez que um time está a um ponto de vencer um jogo, é dito que ele tem um *match-point*. Quando um time tiver um *match-point*, exiba essa informação na tela, incluindo o time que tem o *match-point*.

#### Resolução

```
function processarPonto() {
    //seu código aqui

    if (setA == 1 && setB == 1) {


        if (scoreA >= 14 && scoreA - scoreB >= 1) {

            infoAdicional = "Match-point para o Time A!"
            
        
        } else if (scoreB >= 14 && scoreB - scoreA >= 1) {

            infoAdicional = "Match-point para o Time B!"
        
        } else {

            infoAdicional = "";

        }

        if (scoreA >= 15 && scoreA - scoreB >= 2) {

            setA++;
            scoreA = 0;
            scoreB = 0;
            infoAdicional = "O Time A venceu o jogo!"
    
        } else if (scoreB >= 15 && scoreB - scoreA >= 2) {
    
            setB++;
            scoreA = 0;
            scoreB = 0;
            infoAdicional = "O Time B venceu o jogo!"
    
        } else {
    
        }

    } else {

        if (scoreA >= 20 && scoreA - scoreB >= 1) {

            if (setA === 1) {

                infoAdicional = "Match-point para o Time A!"
            
            } else {

                infoAdicional = `Set-point para o Time A no ${setA + setB + 1}o set!`;

            }
        
        } else if (scoreB >= 20 && scoreB - scoreA >= 1) {

            if (setB === 1) {

                infoAdicional = "Match-point para o Time B!"

            } else {

                infoAdicional = `Set-point para o Time B no ${setA + setB + 1}o set!`;

            }
        
        } else {

            infoAdicional = "";

        }

        if (scoreA >= 21 && scoreA - scoreB >= 2) {

            setA++;
            scoreA = 0;
            scoreB = 0;
            
            if (setA === 2) {

                infoAdicional = "Que lavada! O Time A venceu o jogo por 2 a 0!"

            } else {

                infoAdicional = `O Time A venceu o ${setA + setB}o set!`;

            }

        } else if (scoreB >= 21 && scoreB - scoreA >= 2) {
    
            setB++;
            scoreA = 0;
            scoreB = 0;
            
            if (setB === 2) {

                infoAdicional = "Que lavada! O Time B venceu o jogo por 2 a 0!"

            } else {

                infoAdicional = `O Time B venceu o ${setA + setB}o set!`;

            }    

        } else {
    
        }

    }

    atualizarPlacar();

};
```