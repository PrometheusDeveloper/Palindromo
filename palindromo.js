// O módulo readline-sync permite que você crie prompts interativos para coletar
//  entradas do usuário diretamente do terminal, semelhante às funções input() 
//  em outras linguagens de programação. Isso é especialmente útil quando você
//   está criando programas que precisam interagir com os usuários em tempo real.


const input = require("readline-sync");

// Neste exemplo, o programa solicita ao usuário que insira seu nome. O método question()
// do readline-sync espera por entrada do usuário e retorna o valor inserido. Esse valor é
// então utilizado para saudar o usuário no console.
// Em resumo, a função const input = require("readline-sync"); serve para importar o módulo
// readline-sync, permitindo que você crie interações de entrada e saída de texto em programas 
// Node.js executados no terminal.


let palavra = input.question("Palavra:").toUpperCase();
let palavraInvertida = "";
let ehPalindromo = "";


// nessa função eu adiciono de tras pra frente, cada uma das letras
for(let i = palavra.length - 1; i >= 0; i --) {
    palavraInvertida += palavra[i];
}

// Nessa funcão eu verifico se é ou não palindromo

ehPalindromo = (palavra === palavraInvertida) ? "Sim" : "Não";

console.log("Palavra invertida: " + palavraInvertida);
console.log("É palindromo: " + ehPalindromo);