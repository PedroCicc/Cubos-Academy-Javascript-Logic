const finalizado = () => {
    console.log("Finalizado");
}

const contagemRegressiva = (valorInicial, aoFinalizar) => {

    for (i = valorInicial; i >= 0; i--) {
        console.log(i);
    }
    aoFinalizar();

}

contagemRegressiva(10, finalizado);