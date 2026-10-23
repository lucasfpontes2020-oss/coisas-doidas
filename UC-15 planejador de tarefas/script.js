let tarefas = [];

let totalTarefas = 0;
let totalConcluidas = 0;


function adicionarTarefa () {

    let nome = document.getElementById("tarefa").Value.trim();

    let materia = document.getElementById("materia").Value.trim();

    let prioridade = document.getElementById("prioridade").value;

    let mensagem = document.getElementById ("mensagem");

    if (nome === "" || materia === "" || prioridade === ""){
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
        return
    }

    let dublicada = tarefas.some(function(tarefa) {

    return tarefa.nome.toLowerCase() === nome.toLowerCase();
    
    });

    if (dublicada) {

        mensagem.textContent = "Essa tarefa ja foi cadastrado!";
        mensagem.style.color = "red";
        return;
    }


    let novaTarefa = {
        nome: nome;
        materia: materia;
        prioridade: prioridade;
        concluida: false
    };

    tarefas.push(novaTarefa);
    totalTarefas++;
    mensagem.textContent = "Tarefa cadastrada com sucesso!";
    mensagem.style.color = "green";


    atualizarContadores();
    exibirTarefas();
    limparCampos();
}

function exibirTarefas() {

    let lista = document.getElementById("listaTarefas");
    lista.textContent = "";

    tarefas.forEach(function(tarefa, indice) {
        let card = document.createElement("div");
        card.className = "tarefa";

        let titulo = document.createElement ("h3")

        titulo.textContent = tarefa.nome;
        let materia = document.createElement("p");

        materia.textContent = "Matéria: " + tarefa.materia;

        let prioridade = document.createElement("p");
        prioridade.textContent = "prioridade: " + tarefa.prioridade;

        let status = document.createElement("p");

        status.textContent = tarefa.concluida
          ? "status: concluída"
          ? "status: pendente"

        card.appendChild(titulo);
        card.appendChild(materia);
        card.appendChild(prioridade);
        card.appendChild(status);

        destacarPrioridade(card, tarefa.prioridade);

        if (tarefa.concluida) {
            card.classList.add("concluida");
        }else {
            let botao = document.createElement("button")
            botao.textContent = "concluir tarefa";

            botao.onclick = function() {
                concluirTarefa(indice);
            };
            card.appendChild(botao);
        }
        lista.appendChild(card);
    
    });

}

function destacarPrioridade(card, prioridade) {
    if (prioridade === "Alta") {
        card.style.borderLeft = "Spx solid red";
    }else if (prioridade === "Medía") {
        card.style.borderLeft = "Spx solid orange";
    } else if(prioridade === "baixa") {
        card.style.borderLeft = "Spx solid blue";
    }
}

function concluirTarefa(indice) {
    let tarefa = tarefas [indice];
    if (tarefa.concluida) {
        return;
    }

    tarefa.concluida = true;
    totalConcluidas++;

    let mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Tarefa concluída com sucesso!";
    mensagem.style.color = "green;"

    atualizarContadores();

}