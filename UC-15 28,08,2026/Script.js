//Operações matemáticas

let a = 20;
let b = 4;

console.log("Soma:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);


//Dobro e triplo

let numero = 7;

console.log("Dobro:", numero * 2);
console.log("Triplo:", numero * 3);


//Nome e idade

let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");

console.log("Olá, " + nome + "! Seja bem-vindo! Você tem " + idade + " anos.");


//Média de três notas

let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

console.log("Média:", media);


//Sistema de login

let usuarioCorreto = "admin";
let senhaCorreta = "1234";

let usuario = prompt("Digite o usuário:");
let senha = prompt("Digite a senha:");

if (usuario != usuarioCorreto) {
    console.log("Usuário incorreto.");
} else if (senha != senhaCorreta) {
    console.log("Senha incorreta.");
} else {
    console.log("Login realizado com sucesso!");
}


//Número maior

let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));

if (numero1 > numero2) {
    console.log("O maior número é " + numero1);
} else if (numero2 > numero1) {
    console.log("O maior número é " + numero2);
} else {
    console.log("Os dois números são iguais.");
}