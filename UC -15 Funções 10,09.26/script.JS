console.log("olá, Lucas! seja bem-vindo");
console.log("olá, Jacinto! seja bem-vindo");
console.log("olá, Emili! seja bem-vindo");

function darBoasVindas(nome) {
    console.log(`olá, ${nome}! seja bem vindo!`);
}

darBoasVindas("Lucas");
darBoasVindas("Jacinto");
darBoasVindas("Emili");

function apresentar(nome,idade) {
    console.log(`olá, Meu nome é ${nome} e tenho ${idade} anos.`);
}

apresentar("Lucas", 16);
apresentar("Jacinto", 10);
apresentar("Emli", 80);

function estarestudando(nome) {
    console.log(`${nome} esta estudando muito`);
}

estarestudando("Lucas");
estarestudando("Jacinto")
estarestudando("Emili");

function somar (a,b) {
    return a + b;
}

somar(5,3)

let resultado = somar (5,3);

console.log(resultado);

function Calcularmedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}
let media = Calcularmedia(8,6)

console.log(media);

if (media >= 6) {
    console.log("Aprovado!")
} else{
    console.log("reprovado!")
}

function calcularViagem(passagem, hospedagem, alimentacao, passeios) {
    const total = passagem + hospedagem + alimentacao + passeios;

    console.log("Custo total da viagem: R$ " + total.toFixed(2));

    if (total <= 2000) {
        console.log("A viagem está dentro do orçamento!");
    } else {
        console.log("A viagem ultrapassou o orçamento!");
    }
}

const passagem = parseFloat(prompt("Valor da passagem:"));
const hospedagem = parseFloat(prompt("Valor da hospedagem:"));
const alimentacao = parseFloat(prompt("Valor da alimentação:"));
const passeios = parseFloat(prompt("Valor dos passeios:"));

calcularViagem(passagem, hospedagem, alimentacao, passeios);