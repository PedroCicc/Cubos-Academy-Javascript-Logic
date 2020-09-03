// Vídeo 1

const nome = localStorage.getItem('nome');
const profissao = localStorage.getItem('profissao');

const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');

if (nome) {
    h1.innerText = `Olá, ${nome}!`;
};

if (profissao) {
    h3.innerText = `Obrigado! Você é ${profissao}.`
};

// Vídeo 2

const pessoa = {
    nome: 'Pedro',
    idade: 25,
    profissao: 'Redator freelance'
};

const pessoaString = JSON.stringify(pessoa);
console.log(pessoaString);

localStorage.setItem('pessoa', pessoaString);

const h1 = document.querySelector('h1');
const pessoaString = localStorage.getItem('pessoa');

console.log(pessoaString);

const pessoa = JSON.parse(pessoaString);

console.log(pessoa);

h1.innerText = `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}`;

// Vídeo 3 - Exercício resolvido

const button = document.querySelector('button');

button.addEventListener("click", () => {
    const texto = document.querySelector('input').value;
    localStorage.setItem('chave', texto);

    location.href = 'pessoa.html';
    alert('Texto salvo!');
});