const button = document.querySelector("button");
const texto = document.querySelector("p");
const foguete = document.querySelector(".foguete");

let contagem = 10;

button.addEventListener("click", () => {
    if (button.innerText === "INICIAR CONTAGEM REGRESSIVA") {
        button.innerText = "ABORTAR A MISSÃO";
        id = setInterval(contagemRegressiva, 1000);
    } else if (button.innerText === "ABORTAR A MISSÃO") {
        button.innerText = "INICIAR CONTAGEM REGRESSIVA";
        texto.innerText = "Missão abortada! \n Clique o botão para reiniciar o lançamento.";
        contagem = 10;
        clearInterval(id);
        foguete.setAttribute("src", "./foguete2.png");
    };
});

const contagemRegressiva = () => {
    if (contagem >= 0) {
        texto.innerText = "Contagem regressiva: " + contagem;
        contagem--;
    } else {
        texto.innerText = "Lançamento iniciado!"
        foguete.setAttribute("src", "./foguete gif.gif");
        clearInterval(id);
        button.innerText = "ABORTAR A MISSÃO";
    };
};