function mudartexto() {
    document.getElementById
    ("titulo").textContent = "Você clicou no botão!";
}

function mudarcor() {
    document.getElementById("mensagem").style.color = "blue";

}

function mostrarNome() {
    let nome = document.getElementById("nome").value;

    document.getElementById("resultado").textContent = "olá, " + nome + "!";
}

let contador = 0;

function aumentar() {
    contador++;

    document.getElementById("numero").textContent = contador;
}

function diminuir() {
    contador--;

    document.getElementById("numero").textContent = contador;
}


// Variável do contador
let valorContador = 10;


// Função para mostrar a cidade
function mostrarCidade() {

    const cidade = document.getElementById("cidade").value;

    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = "Sua próxima aventura pode ser em " + cidade + "! ✈️";
}


// Função para destacar a mensagem
function destacarMensagem() {

    const mensagem = document.getElementById("mensagem");

    mensagem.style.color = "white";
    mensagem.style.backgroundColor = "royalblue";
    mensagem.style.fontSize = "26px";
    mensagem.style.padding = "15px";
    mensagem.style.borderRadius = "10px";
}
