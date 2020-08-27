const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const entrada = questao1();
    // questao2(entrada);
    // questao3(entrada);
    // questao4(entrada);
    // questao5(entrada);
    // questao6(entrada);
    // questao7(entrada);
    // questao8(entrada);
    // questao9(entrada);
    questao10(entrada);
});

// questão 1 - Terminada
function questao1() {
    const entrada = input.value;
    console.log(entrada);
    return entrada;
};

// questão 2 - Terminada
function questao2(entrada) {
    if (entrada.includes("desenvolvimento") || entrada.includes("Desenvolvimento")) {
        alert("Inclui 'desenvolvimento'? Sim");
    } else {
        alert("Inclui 'desenvolvimento'? Não");
    };
};

//questão 3 - Terminada
function questao3(entrada) {
    let emailFormatado = entrada.trim().toLowerCase();
    alert(emailFormatado);
};

//questão 4 - Terminada
function questao4(entrada) {
    let cpfFormatado = "";
    for(i = 0; i < entrada.length; i++) {
        if (entrada[i] === ".") {
            cpfFormatado += entrada[i].replace(".", "");
        } else if (entrada[i] === "-") {
            cpfFormatado += entrada[i].replace("-", "");
        } else {
            cpfFormatado += entrada[i];
        }
    }
    alert(cpfFormatado);
};

//questão 5 - Terminada
function questao5(entrada) {
    let nomeDeUsuario = "";

    for (i = 0; i < entrada.length; i++) {
        if (i === 0) {
            nomeDeUsuario += entrada[i].toUpperCase();
        } else if (entrada [i-1] === " " && typeof(entrada[i]) === "string") {
            nomeDeUsuario += entrada[i].toUpperCase();
        } else {
            nomeDeUsuario += entrada[i].toLowerCase();
        };
    };

    alert(nomeDeUsuario);
};

//questão 6 - Terminada
function questao6(entrada) {
    let frase = entrada.split(" ").reverse().join(" ");
    alert(frase);
};

//questão 7 - Terminada
function questao7(entrada) {
    const novaFrase = entrada.replace(/muito/gi, "MUITO");
    alert(novaFrase);
};

//questão 8 - Terminada
function questao8(entrada) {
    const saida = entrada.substr(14, 5).padStart(20, "**** ");
    alert(saida);
};

//questão 9 - Terminada
function questao9(entrada) {
    const cpf = entrada.slice(0, 5) + "-" + entrada.slice(5,8);
    alert(cpf);
};

//questão 10 - Terminada
function questao10(entrada) {
    let telefone = "";
    if (entrada.length === 8) {
        telefone += "9" + entrada.slice(0, 4) + "-" + entrada.slice(4, 10);
    } else if (entrada.length === 9) {
        telefone += entrada.slice(0, 5) + "-" + entrada.slice(5, 10);
    } else if (entrada.length === 10) {
        telefone += `(${entrada.slice(0, 2)})` + " " + "9" + entrada.slice(2, 6) + "-" + entrada.slice(6, 10);
    } else if (entrada.length === 11) {
        telefone += `(${entrada.slice(0, 2)})` + " " + entrada.slice(2, 6) + "-" + entrada.slice(6, 10);
    } else {
        telefone += "O número inserido deve ter entre 8 e 11 caracteres.";
    }
    alert(telefone);
};