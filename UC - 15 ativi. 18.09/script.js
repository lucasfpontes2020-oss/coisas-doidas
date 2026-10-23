let valorContador = 0;

function mostrarCidade() {

    const cidade = document.getElementById("cidade").value;

    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = "Sua próxima aventura pode ser em " + cidade + "!";
}


function destacarMensagem() {

    const mensagem = document.getElementById("mensagem");

    mensagem.style.color = "blue";
    mensagem.style.fontSize = "26px";
}


function aumentar() {

    valorContador++;

    document.getElementById("contador").textContent = valorContador;
}


function diminuir() {

    valorContador--;

    document.getElementById("contador").textContent = valorContador;
}


document.getElementById("botaoCidade").addEventListener("click", mostrarCidade);

document.getElementById("botaoEstilo").addEventListener("click", destacarMensagem);

document.getElementById("botaoMais").addEventListener("click", aumentar);

document.getElementById("botaoMenos").addEventListener("click", diminuir);