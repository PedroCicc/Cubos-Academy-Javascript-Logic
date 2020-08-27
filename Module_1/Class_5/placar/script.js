let scoreA = 0; //pontuação do time A no set atual
let scoreB = 0; //pontuação do time B no set atual
let setA = 0; //quantidade de sets vencidos pelo time A
let setB = 0; //quantidade de sets vencidos pelo time B
let infoAdicional = "Vai começar a partida!";

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

//Não precisa mexer
function atualizarPlacar() {
    document.getElementById("scoreA").innerHTML = scoreA;
    document.getElementById("scoreB").innerHTML = scoreB;
    document.getElementById("setA").innerHTML = setA;
    document.getElementById("setB").innerHTML = setB;
    document.getElementById("info-adicional").innerHTML = infoAdicional;
}


document.getElementById("scoreA").addEventListener("click", () => {
    scoreA++;
    document.getElementById("scoreA").innerHTML = scoreA;
    processarPonto();
});

document.getElementById("scoreB").addEventListener("click", () => {
    scoreB++;
    document.getElementById("scoreB").innerHTML = scoreB;
    processarPonto();
});
atualizarPlacar();