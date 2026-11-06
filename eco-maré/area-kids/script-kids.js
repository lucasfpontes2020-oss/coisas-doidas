// ---------- JOGO DA LIXEIRA ----------
// azul = papel, vermelho = plástico, verde = vidro, amarelo = metal, marrom = orgânico.

const nomesDasLixeiras = {
  papel: "azul (papel)",
  plastico: "vermelha (plástico)",
  vidro: "verde (vidro)",
  metal: "amarela (metal)",
  organico: "marrom (orgânico)"
};

const itensDoJogo = [
  { emoji: "🧴", nome: "Garrafa PET", tipo: "plastico" },
  { emoji: "🥤", nome: "Copo de plástico", tipo: "plastico" },
  { emoji: "🛍️", nome: "Sacola plástica", tipo: "plastico" },
  { emoji: "📰", nome: "Jornal velho", tipo: "papel" },
  { emoji: "📦", nome: "Caixa de papelão", tipo: "papel" },
  { emoji: "📄", nome: "Folha de caderno", tipo: "papel" },
  { emoji: "🍾", nome: "Garrafa de vidro", tipo: "vidro" },
  { emoji: "🫙", nome: "Pote de vidro", tipo: "vidro" },
  { emoji: "🥫", nome: "Lata de refrigerante", tipo: "metal" },
  { emoji: "🥫", nome: "Lata de milho", tipo: "metal" },
  { emoji: "🍌", nome: "Casca de banana", tipo: "organico" },
  { emoji: "🍎", nome: "Resto de maçã", tipo: "organico" },
  { emoji: "🥚", nome: "Casca de ovo", tipo: "organico" }
];

const totalDeRodadas = 10;

// elementos da tela
const jogoRodada = document.getElementById("jogoRodada");
const jogoTotal = document.getElementById("jogoTotal");
const jogoPontos = document.getElementById("jogoPontos");
const jogoEmoji = document.getElementById("jogoEmoji");
const jogoNome = document.getElementById("jogoNome");
const jogoMensagem = document.getElementById("jogoMensagem");
const jogoProximo = document.getElementById("jogoProximo");
const jogoFinal = document.getElementById("jogoFinal");
const jogoFinalTitulo = document.getElementById("jogoFinalTitulo");
const jogoFinalTexto = document.getElementById("jogoFinalTexto");
const jogoReiniciar = document.getElementById("jogoReiniciar");
const botoesLixeira = document.querySelectorAll(".lixeira");

// estado do jogo
let rodadaAtual = 0;
let pontos = 0;
let itensSorteados = [];
let jaRespondeu = false;

// embaralha uma lista (sorteio simples)
function embaralhar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function comecarJogo() {
  rodadaAtual = 0;
  pontos = 0;
  itensSorteados = embaralhar(itensDoJogo).slice(0, totalDeRodadas);
  jogoTotal.textContent = totalDeRodadas;
  jogoFinal.hidden = true;
  mostrarItem();
}

function mostrarItem() {
  const item = itensSorteados[rodadaAtual];
  jaRespondeu = false;

  jogoRodada.textContent = rodadaAtual + 1;
  jogoPontos.textContent = pontos;
  jogoEmoji.textContent = item.emoji;
  jogoNome.textContent = item.nome;

  jogoMensagem.textContent = "Escolha uma lixeira!";
  jogoMensagem.className = "jogo-mensagem";
  jogoProximo.hidden = true;

  botoesLixeira.forEach((botao) => {
    botao.disabled = false;
    botao.classList.remove("certa");
  });
}

function responder(tipoEscolhido) {
  if (jaRespondeu) return;
  jaRespondeu = true;

  const item = itensSorteados[rodadaAtual];
  const acertou = tipoEscolhido === item.tipo;

  if (acertou) {
    pontos++;
    jogoMensagem.textContent = "Isso mesmo! 🎉 " + item.nome + " vai na lixeira " + nomesDasLixeiras[item.tipo] + ". O mar agradece!";
    jogoMensagem.className = "jogo-mensagem acertou";
  } else {
    jogoMensagem.textContent = "Quase! 😅 " + item.nome + " vai na lixeira " + nomesDasLixeiras[item.tipo] + ".";
    jogoMensagem.className = "jogo-mensagem errou";
  }

  jogoPontos.textContent = pontos;

  // trava as lixeiras e destaca a certa
  botoesLixeira.forEach((botao) => {
    botao.disabled = true;
    if (botao.dataset.tipo === item.tipo) botao.classList.add("certa");
  });

  jogoProximo.textContent = rodadaAtual === totalDeRodadas - 1 ? "Ver resultado →" : "Próximo →";
  jogoProximo.hidden = false;
  jogoProximo.focus();
}

function irParaProximaRodada() {
  rodadaAtual++;
  if (rodadaAtual >= totalDeRodadas) {
    terminarJogo();
  } else {
    mostrarItem();
  }
}

function terminarJogo() {
  jogoProximo.hidden = true;
  jogoMensagem.textContent = "";

  let titulo;
  let texto;

  if (pontos === totalDeRodadas) {
    titulo = "Perfeito! 🏆";
    texto = "Você acertou tudo! Já pode ser Guardião da Praia.";
  } else if (pontos >= 7) {
    titulo = "Muito bem! 🌟";
    texto = "Você acertou " + pontos + " de " + totalDeRodadas + ". Quase um mestre da reciclagem!";
  } else if (pontos >= 4) {
    titulo = "Bom começo! 👍";
    texto = "Você acertou " + pontos + " de " + totalDeRodadas + ". Jogue de novo para melhorar!";
  } else {
    titulo = "Vamos treinar mais! 💪";
    texto = "Você acertou " + pontos + " de " + totalDeRodadas + ". Cada tentativa ensina um pouquinho.";
  }

  jogoFinalTitulo.textContent = titulo;
  jogoFinalTexto.textContent = texto;
  jogoFinal.hidden = false;
}

botoesLixeira.forEach((botao) => {
  botao.addEventListener("click", () => responder(botao.dataset.tipo));
});
jogoProximo.addEventListener("click", irParaProximaRodada);
jogoReiniciar.addEventListener("click", comecarJogo);

comecarJogo();


// ---------- BRINQUEDOS: contar os passos marcados ----------
document.querySelectorAll("[data-brinquedo]").forEach((brinquedo) => {
  const caixinhas = brinquedo.querySelectorAll(".passos-kids input");
  const textoProgresso = brinquedo.querySelector(".progresso-passos");

  function atualizarProgresso() {
    const feitos = brinquedo.querySelectorAll(".passos-kids input:checked").length;

    if (feitos === 0) {
      textoProgresso.textContent = "";
    } else if (feitos === caixinhas.length) {
      textoProgresso.textContent = "🎉 Brinquedo pronto! Agora é só brincar!";
    } else {
      textoProgresso.textContent = feitos + " de " + caixinhas.length + " passos feitos";
    }
  }

  caixinhas.forEach((caixinha) => caixinha.addEventListener("change", atualizarProgresso));
});


// ---------- CURIOSIDADES ----------
const curiosidades = [
  "Sacolas plásticas boiando no mar podem parecer água-viva para as tartarugas, e elas acabam comendo plástico. Por isso a gente não joga sacola fora!",
  "A restinga é a vegetação da praia. Ela segura a areia e ajuda a proteger a costa quando o mar sobe.",
  "O mar produz boa parte do oxigênio que a gente respira. Cuidar dele é cuidar do nosso ar também!",
  "Uma garrafa PET jogada na natureza pode demorar centenas de anos para desaparecer.",
  "As latas de metal podem ser recicladas muitas e muitas vezes e virar latas novas.",
  "O mundo inteiro combinou, na ONU, de cuidar da vida na água. Esse combinado se chama ODS 14!",
  "O lixo que a gente joga na rua pode ir parar no mar quando chove. Por isso, lixo no lixo!"
];

const curiosidadeTexto = document.getElementById("curiosidadeTexto");
const botaoCuriosidade = document.getElementById("botaoCuriosidade");
let ultimaCuriosidade = -1;

botaoCuriosidade.addEventListener("click", () => {
  // sorteia uma curiosidade diferente da anterior
  let sorteada;
  do {
    sorteada = Math.floor(Math.random() * curiosidades.length);
  } while (sorteada === ultimaCuriosidade);

  ultimaCuriosidade = sorteada;
  curiosidadeTexto.textContent = curiosidades[sorteada];
  botaoCuriosidade.textContent = "Outra curiosidade!";
});


// ---------- CERTIFICADO DE GUARDIÃO DA PRAIA ----------
const formGuardiao = document.getElementById("formGuardiao");
const certificado = document.getElementById("certificado");
const certificadoNome = document.getElementById("certificadoNome");
const certificadoData = document.getElementById("certificadoData");
const botaoImprimir = document.getElementById("botaoImprimir");

formGuardiao.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.getElementById("nomeGuardiao").value.trim();
  if (nome === "") return;

  const hoje = new Date().toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });

  certificadoNome.textContent = nome;
  certificadoData.textContent = hoje;
  certificado.hidden = false;
  botaoImprimir.hidden = false;

  certificado.scrollIntoView({ behavior: "smooth", block: "center" });
});

botaoImprimir.addEventListener("click", () => window.print());
