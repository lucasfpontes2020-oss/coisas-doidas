// Dados da compra
let nome = "Luquinhas";
let grana = 300;
let vip = false;

// Variáveis do desconto
let desconto = 0;
let valorDesc = 0;
let total = 0;

// Verificando o desconto
if (vip) {
    desconto = 25;
} else if (grana >= 500) {
    desconto = 20;
} else if (grana >= 200) {
    desconto = 15;
} else {
    desconto = 0;
}

// Fazendo as contas
valorDesc = grana * (desconto / 100);
total = grana - valorDesc;

// Mostrando o resultado
console.log("Nome: " + nome);
console.log("Valor da compra: R$ " + grana.toFixed(2));
console.log("Desconto: " + desconto + "%");
console.log("Valor do desconto: R$ " + valorDesc.toFixed(2));
console.log("Valor final: R$ " + total.toFixed(2));

// Desafio
if (total > 1000) {
    console.log("Parabéns! Você ganhou frete grátis.");
} else {
    console.log("Frete será cobrado normalmente.");
}