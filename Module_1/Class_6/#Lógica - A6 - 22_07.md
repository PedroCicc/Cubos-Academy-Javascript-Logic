# #Lógica - A6 - 22/07

##### Aluno: Pedro Ciccone
###### tags: `Logica de Programação`

### Exercícios aula

**1.** Dada uma determinada lutadora de UFC, faça um programa que determine a qual categoria da competição ele pertence.
```
const lutadora = {
 nome: "Amanda Nunes",
 massa: 55, //em kg
 altura: 173, //em cm
 arteMarcial: "Jiu-jitsu",
 genero: "F"
};

if (lutadora.genero === "F") {

  if (lutadora.massa <= 52.2) {
  console.log("Peso Palha");
  } else if (lutadora.massa >= 52.1 && lutadora.massa <= 56.7) {
  console.log("Peso Mosca");
  } else if (lutadora.massa >= 56.8 && lutadora.massa <= 61.2) {
  console.log("Peso Galo");
  } else if (lutadora.massa >= 61.3 && lutadora.massa <= 65.8) {
  console.log("Peso Pena");
  } else if (lutadora.massa >= 65.9 && lutadora.massa <= 70.3) {
  console.log("Peso Leve");
  } else if (lutadora.massa >= 70.4 && lutadora.massa <= 77.1) {
  console.log("Peso Meio-Médio");
  } else if (lutadora.massa >= 77.2 && lutadora.massa <= 83.9) {
  console.log("Peso Médio");
  } else if (lutadora.massa >= 84 && lutadora.massa <= 93) {
    console.log("Peso Meio-Pesado");
  } else {
    console.log("Peso Pesado");
  };

} else {

  console.log("Não pode participar em competições femininas.");

};
```
**2.**  O índice de massa corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal. O IMC é a razão entre a massa de uma pessoa, em quilogramas e o quadrado da sua altura, em metros. Faça um programa que imprima na tela o IMC de uma pessoa, cujo objeto representativo segue o seguinte modelo:
```
const pessoa = {
 nome: "Jose",
 massa: 70, //em kg
 altura: 174 //em centímetros
}

let imc = pessoa.massa / ((pessoa.altura / 100) * (pessoa.altura / 100));

console.log(imc);
```
**3.** Com base na questão anterior, avalie a pessoa de acordo com a tabela abaixo e o IMC dela e imprima a classificação dela na tela.
```
let imc = pessoa.massa / ((pessoa.altura / 100) * (pessoa.altura / 100));

if (imc < 18.5) {
  console.log("Magreza");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("Normal");
} else if (imc >= 25 && imc <= 29.9) {
  console.log("Sobrepeso");
} else if (imc >= 30 && imc <= 39.9) {
  console.log("Obesidade");
} else {
  console.log("Obesidade grave");
};
```
**4.** Uma equação de segundo grau possui sempre 3 coeficientes: A, B e C. Para saber se a equação possui raízes reais, calcula-se o valor de delta. Com o valor de delta é possível descobrir se a equação:
* Não possui raízes reais, caso delta seja negativo
* Possui duas raízes reais e iguais, caso delta seja zero.
* Possui duas raízes reais e distintas, caso delta seja positivo

Quando delta é positivo, é possível calcular suas raízes reais. As fórmulas para cálculo de delta e das raízes (x) seguem abaixo.

Faça um programa que determine se a equação analisada possui raízes reais, e informe quais são elas, caso elas existam, informando que elas são iguais.

Dica: para calcular raiz quadrada utilize `Math.sqrt(delta)`.
```
const equacao1 = {
 a: 1,
 b: -5,
 c: 6
}; // 2 raízes distintas: 2 e 3
const equacao2 = {
 a: 1,
 b: -4,
 c: 4
} // 2 raízes iguais a 2
const equacao3 = {
 a: 1,
 b: 0,
 c: 4
} // Não possui raízes reais

let delta = equacao2.b * equacao2.b - 4 * equacao2.a * equacao2.c;

let raiz_mais = ((-equacao1.b) + Math.sqrt(delta)) / (2 * equacao1.a);
let raiz_menos = ((-equacao1.b) - Math.sqrt(delta)) / (2 * equacao1.a);

if (delta > 0) {

  console.log("2 raizes distintas: " + raiz_mais + " e " + raiz_menos + ".");

} else if (delta === 0) {

  console.log("2 raizes iguais a " + raiz_mais + ".");

} else {
  
  console.log("Não possui raízes reais.")

};
```
**5.** Dadas as medidas dos 3 lados de um possível triângulo é possível descobrir se de fato é possível fazer um triângulo com essas medidas. Isso é chamado de condição de existência de um triângulo. Um triângulo pode existir apenas quando o seu maior lado é menor que a soma de seus dois outros lados. Faça um programa que descubra se um possível triângulo existe ou não.
```
if (triangulo.a >= triangulo.b && triangulo.a >= triangulo.c) {
  
  if (triangulo.a < triangulo.b + triangulo.c) {
  
    console.log("A é o maior/um dos maiores lado(s) e o triângulo existe.");
  
  } else {
  
    console.log("A é o maior/um dos maiores lado(s), mas o triângulo não existe.");
  
  };

} else if (triangulo.b >= triangulo.a && triangulo.b >= triangulo.c) {
  
  if (triangulo.b < triangulo.a + triangulo.c) {
  
    console.log("B é o maior/um dos maiores lado(s) e o triângulo existe.");
  
  } else {
  
    console.log("B é o maior/um dos maiores lado(s), mas o triângulo não existe.");
  
  };

} else {

  if (triangulo.c < triangulo.a + triangulo.b) {

    console.log("C é o maior/um dos maiores lado(s) e o triângulo existe.");

  } else {

    console.log("C é o maior/um dos maiores lado(s), mas o triângulo não existe.");

  };

};
```

### Exercícios casa

**6.** Levando em consideração a questão cinco, classifique o triângulo dado em cada uma das categorias abaixo.

* 3 lados iguais: Equilátero.
* Apenas 2 lados iguais: Isósceles.
* 3 lados diferentes: Escaleno.
```
if (triangulo.a === triangulo.b && triangulo.a === triangulo.c) {

  console.log("É um triângulo equilátero.");

} else if (triangulo.a !== triangulo.b && triangulo.a !== triangulo.c && triangulo.b !== triangulo.c) {

  console.log("É um triângulo escaleno.");

} else {

  console.log("É um triângulo isósceles.");

};
```
**7.** Um determinado remédio pode ser ministrado da seguinte maneira:
* Crianças menores de 12 anos não podem tomar.
* Jovens de 12 a 18 anos tomam apenas uma gota por dia.

Para adultos a regra difere entre homens e mulheres:
* Homens tomam apenas uma gota para cada 10kg de massa que possuem.
* Mulheres tomam duas gotas para cada 10kg de massa que possuem.

Pessoas acima de 65 anos são consideradas idosas, e não seguem a regra dos adultos. Elas tomam uma gota para cada 20kg de massa que possuem independente do gênero. Caso possuam colesterol acima de 160, não podem tomar.

Faça um programa que calcule como uma pessoa deve tomar o remédio, caso possa.
```
if (pessoa.idade >= 12 && pessoa.idade <= 18) {

  console.log(`${pessoa.nome} deve tomar apenas uma gota por dia.`);

} else if (pessoa.idade > 18 && pessoa.idade <= 65) {

  let gotas = Math.floor(pessoa.massa / 10);

  if (pessoa.genero === "M") {

    console.log(`${pessoa.nome} deve tomar ${gotas} gotas por dia.`);

  } else {

    gotas = gotas * 2;

    console.log(`${pessoa.nome} deve tomar ${gotas} gotas por dia.`);

  };

} else if (pessoa.idade > 65) {

  if (pessoa.colesterol <= 160) {

    const gotas = Math.floor(pessoa.massa / 20);

    console.log(`${pessoa.nome} deve tomar ${gotas} gotas por dia.`);

  } else {

    console.log(`${pessoa.nome} não pode tomar o medicamento.`);

  };

} else {

    console.log(`${pessoa.nome} não pode tomar o medicamento.`);

};
```
**8.** Na Libertadores da América de futebol, cada fase eliminatória é decidida com dois confrontos entre os dois mesmos times. Em cada um deles, um dos dois times joga em casa (em seu próprio estádio). O time classificado em cada fase é aquele que fizer mais gols somando as duas partidas.
* Caso haja empate nesse critério, passa o time que fez mais gols fora de casa.
* Caso também haja empate nesse critério, a decisão vai pros pênaltis.

Dados os resultados de uma determinada fase, faça um programa que indique qual time passou para a próxima fase da competição ou se a decisão será nos pênaltis. Ao exibir o resultado, informe o placar agregado (somado) e se foi utilizado o critério de desempate (e quantos gols fora de casa foram feitos nesse caso).
```

const placarA = semifinal.jogo1.casa.gols + semifinal.jogo2.visitante.gols, placarB = semifinal.jogo1.visitante.gols + semifinal.jogo2.casa.gols;

if (placarA > placarB) {

  console.log(`${semifinal.jogo1.casa.time} é finalista da Copa Libertadores! Ganhou por um global de ${placarA} a ${placarB}.`);

} else if (placarB > placarA) {

  console.log(`${semifinal.jogo2.casa.time} é finalista da Copa Libertadores! Ganhou por um global de ${placarB} a ${placarA}.`);

} else {

  if (semifinal.jogo1.visitante.gols > semifinal.jogo2.visitante.gols) {

  console.log(`${semifinal.jogo2.casa.time} é finalista da Copa Libertadores! Passou de fase por ter convertido ${semifinal.jogo1.visitante.gols} gols de visitante.`);

  } else if (semifinal.jogo2.visitante.gols > semifinal.jogo1.visitante.gols) {

  console.log(`${semifinal.jogo1.casa.time} é finalista da Copa Libertadores! Passou de fase por ter convertido ${semifinal.jogo2.visitante.gols} gols de visitante.`);

  } else {

    console.log("Teremos peeeeenaltis!");

  };

};
```