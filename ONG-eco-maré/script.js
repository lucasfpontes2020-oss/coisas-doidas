// =========================================================
// ECO MARÉ — script da página inicial
// =========================================================

// Link do grupo de WhatsApp (se mudar, troque só aqui e lá no HTML)
const linkWhatsapp = "https://chat.whatsapp.com/LoqWzeSZCIiE8vIzfg6jlP";


// ---------- Cabeçalho muda de cor quando a pessoa rola a página ----------
const cabecalho = document.getElementById("cabecalho");

function verificarRolagem() {
  if (window.scrollY > 60) {
    cabecalho.classList.add("rolou");
  } else {
    cabecalho.classList.remove("rolou");
  }
}
window.addEventListener("scroll", verificarRolagem);
verificarRolagem(); // roda uma vez ao abrir a página


// ---------- Menu do celular (hambúrguer) ----------
const botaoMenu = document.getElementById("botaoMenu");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", () => {
  const estaAberto = menu.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", estaAberto);
  botaoMenu.setAttribute("aria-label", estaAberto ? "Fechar menu" : "Abrir menu");
});

// fecha o menu quando a pessoa clica em algum link
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
  });
});


// ---------- Seção "Como ajudar" (abre e fecha) ----------
const botaoAjuda = document.getElementById("botaoAjuda");
const ajudaDetalhes = document.getElementById("ajudaDetalhes");

function abrirAjuda() {
  ajudaDetalhes.hidden = false;
  botaoAjuda.setAttribute("aria-expanded", "true");
  botaoAjuda.textContent = "Fechar detalhes";
}

function fecharAjuda() {
  ajudaDetalhes.hidden = true;
  botaoAjuda.setAttribute("aria-expanded", "false");
  botaoAjuda.textContent = "Como ajudar";
}

botaoAjuda.addEventListener("click", () => {
  if (ajudaDetalhes.hidden) {
    abrirAjuda();
  } else {
    fecharAjuda();
  }
});

// qualquer link marcado com data-abrir-ajuda (menu, banner, rodapé...) abre a seção
document.querySelectorAll("[data-abrir-ajuda]").forEach((link) => {
  link.addEventListener("click", abrirAjuda);
});


// ---------- Números da arrecadação (barra + contagem) ----------
function formatarNumero(numero) {
  return Math.round(numero).toLocaleString("pt-BR");
}

// anima o número subindo de 0 até o valor final
function contarAteOValor(elemento, valorFinal, ehDinheiro) {
  const duracao = 1400;
  const inicio = performance.now();

  function passo(agora) {
    const progresso = Math.min((agora - inicio) / duracao, 1);
    const valorAtual = valorFinal * progresso;
    elemento.textContent = formatarNumero(valorAtual);
    if (progresso < 1) requestAnimationFrame(passo);
  }
  requestAnimationFrame(passo);
}

// lê os data-atual e data-meta do HTML e preenche tudo sozinho
document.querySelectorAll(".cartao-meta[data-atual]").forEach((cartao) => {
  const atual = Number(cartao.dataset.atual);
  const meta = Number(cartao.dataset.meta);
  const ehDinheiro = cartao.dataset.tipo === "dinheiro";

  const porcentagem = Math.min(Math.round((atual / meta) * 100), 100);
  const faltam = Math.max(meta - atual, 0);

  cartao.querySelector(".barra-preenchida").style.setProperty("--largura", porcentagem + "%");
  cartao.querySelector(".barra").setAttribute("aria-valuenow", porcentagem);
  cartao.querySelector(".numero-faltam").textContent = ehDinheiro
    ? "R$ " + formatarNumero(faltam)
    : formatarNumero(faltam) + " pessoas";
  cartao.querySelector(".meta-total strong").textContent = ehDinheiro
    ? "R$ " + formatarNumero(meta)
    : formatarNumero(meta) + " voluntários";
});

const painelMetas = document.querySelector(".painel-metas");

const observadorDoPainel = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (!entrada.isIntersecting) return;

    painelMetas.classList.add("visivel"); // libera a barra pra crescer

    painelMetas.querySelectorAll(".cartao-meta[data-atual]").forEach((cartao) => {
      const numero = cartao.querySelector(".numero-atual");
      contarAteOValor(numero, Number(cartao.dataset.atual), cartao.dataset.tipo === "dinheiro");
    });

    observadorDoPainel.disconnect(); // só anima uma vez
  });
}, { threshold: 0.3 });

observadorDoPainel.observe(painelMetas);


// ---------- Copiar a chave Pix ----------
const botaoCopiarPix = document.getElementById("botaoCopiarPix");
const chavePix = document.getElementById("chavePix");

botaoCopiarPix.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(chavePix.textContent.trim());
    botaoCopiarPix.textContent = "Chave copiada!";
  } catch (erro) {
    botaoCopiarPix.textContent = "Copie manualmente";
  }
  setTimeout(() => { botaoCopiarPix.textContent = "Copiar chave"; }, 2500);
});


// ---------- Cadastro de voluntário ----------
// Não dá pra mandar mensagem direto pra um grupo de WhatsApp por link,
// então a gente monta o texto, copia, e abre o grupo pra pessoa colar.
const formularioVoluntario = document.getElementById("formularioVoluntario");
const avisoFormulario = document.getElementById("avisoFormulario");

formularioVoluntario.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const nome = document.getElementById("campoNome").value.trim();
  const praia = document.getElementById("campoPraia").value;
  const disponibilidade = document.getElementById("campoDisponibilidade").value;

  const mensagem =
    "Oi, Eco Maré! Quero ser voluntário(a) nos mutirões.\n" +
    "Nome: " + nome + "\n" +
    "Praia preferida: " + praia + "\n" +
    "Disponibilidade: " + disponibilidade;

  try {
    await navigator.clipboard.writeText(mensagem);
    avisoFormulario.textContent = "Pronto, " + nome + "! Copiamos sua mensagem. Agora é só colar no grupo do WhatsApp que vai abrir.";
  } catch (erro) {
    avisoFormulario.textContent = "Quase lá, " + nome + "! Abra o grupo do WhatsApp e mande seu nome, a praia preferida e quando você pode.";
  }

  window.open(linkWhatsapp, "_blank", "noopener");
});


// ---------- Link do site parceiro ----------
// Enquanto o link ainda for "#", o clique não faz a página pular pro topo.
const linkParceiro = document.getElementById("linkParceiro");

linkParceiro.addEventListener("click", (evento) => {
  if (linkParceiro.getAttribute("href") === "#") {
    evento.preventDefault();
    console.warn("Falta colocar o link do site parceiro no index.html (id linkParceiro).");
  }
});


// ---------- Efeito de aparecer ao rolar ----------
const itensParaAparecer = document.querySelectorAll(
  ".titulo-secao, .texto-secao, .cartao-meta, .praia, .faixa-item, .lista-futuro li, .reciclagem-item, .sobre-texto, .espaco-foto, .numero-item"
);

const observadorDeAparecer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visivel");
      observadorDeAparecer.unobserve(entrada.target);
    }
  });
}, { threshold: 0.15 });

itensParaAparecer.forEach((item) => {
  item.classList.add("aparecer"); // só vira invisível se o JS estiver funcionando
  observadorDeAparecer.observe(item);
});
