const finalizado = () => {
    console.log("Finalizado");
}

const contagemRegressiva = (valorInicial) => {

    for (i = valorInicial; i >= 0; i--) {
        console.log(i);
    }
    finalizado();

}

contagemRegressiva(10);