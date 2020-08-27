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

//Não mexa em nada daqui pra baixo
let votosA = 0, votosB = 0, votosC = 0;

function imprimir(text) {
    document.getElementById("imprimir").innerHTML= text;
}

document.getElementById("a").addEventListener("click", () => {
    votosA++;
    document.getElementById("a").innerHTML = votosA;
    processarVotos(votosA, votosB, votosC);
});

document.getElementById("b").addEventListener("click", () => {
    votosB++;
    document.getElementById("b").innerHTML = votosB;
    processarVotos(votosA, votosB, votosC);
});

document.getElementById("c").addEventListener("click", () => {
    votosC++;
    document.getElementById("c").innerHTML = votosC;
    processarVotos(votosA, votosB, votosC);
});