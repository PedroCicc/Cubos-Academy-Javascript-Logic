// Questão 1
const array = [1, 2, 3, 4, 5, 10, 22, 33];

for (const item of array) {
  console.log(item);
};

// Questão 2
for (const item of array) {
  const maiores = [];
  if (item > 10) {
    maiores.push(item);
    console.log(maiores);
  }
};

// Questão 3
array.forEach((item, i) => {
  console.log(item);
});

// Questão 4
array.forEach((item, i) => {
  console.log(`Item: ${item} Índice: ${i}`);
});

// Questão 5
array.forEach((item, i) => {
  console.log(`Item: ${item} Índice: ${i}`);
});

// Questão 6
const resultados = [
    {
      time1: "Flamengo",
      gols1: 2,
      time2: "Fluminense",
      gols2: 1
    },
    {
      time1: "Flamengo",
      gols1: 4,
      time2: "Fluminense",
      gols2: 0
    },
    {
      time1: "Flamengo",
      gols1: 0,
      time2: "Fluminense",
      gols2: 3
    },
    {
      time1: "Flamengo",
      gols1: 4,
      time2: "Fluminense",
      gols2: 4
    },
    {
      time1: "Flamengo",
      gols1: 1,
      time2: "Fluminense",
      gols2: 5
    },
    {
      time1: "Flamengo",
      gols1: 0,
      time2: "Fluminense",
      gols2: 0
    }
  ];
  
  let time1 = 0, time2 = 0, empates = 0; 
  
  for (item of resultados) {
    if (item.gols1 > item.gols2) {
      time1++;
    } else if (item.gols1 < item.gols2) {
      time2++;
    } else {
      empates++;
    };
  };
  
  console.log(`Partidas vencidas pelo Flamengo: ${time1}
  Partidas vencidas pelo Fluminense: ${time2}
  Empates: ${empates}`);
  
  // Questão 7
  console.log(`Pontos obtidos pelo Flamengo: ${time1 * 3 + empates}
  Pontos obtidos pelo Fluminense: ${time2 * 3 + empates}`);
  
  // Questão 8
  let golsTime1 = 0, golsTime2 = 0; 
  
  for (item of resultados) {
    golsTime1 += item.gols1
    golsTime2 += item.gols2; 
  };
  
  console.log(`Gols do Flamengo: ${golsTime1}
  Gols do Fluminense: ${golsTime2}`);
  
  // Questão 9
  let nroDePartidas = 0;
  
  for (item of resultados) {
    if (item.gols1 + item.gols2 > 6) {
      nroDePartidas++;
    };
  };
  
  console.log(`Partidas com 6+ gols: ${nroDePartidas}`);
  
  // Questão 10
  let nroDeParitdas
  resultados.forEach((item, i) => {
    if (resultados[i].gols1 + resultados[i].gols2 === 0) {
      console.log(`O índice do jogo sem gols é ${i}`);
    };
  });