// CINE AWARDS - votação

const categorias = [
  { id: 'filme', nome: 'Melhor Filme', icone: '🎬', candidatos: [
    { id: 'f1', nome: 'Doutor estranho no multiverso da loucura', desc: 'Fantasia, Ação, Aventura e Terror', img: 'Img/Filme/Doutor estranho no multiverso da loucura.jpg',},
    { id: 'f2', nome: 'Harry Potter e o prisioneiro de Azkaban', desc: 'fantasia e aventura.', img: 'Img/Filme/Harry Potter e o prisioneiro de Azkaban.jpg' },
    { id: 'f3', nome: 'Rio dos Sonhos', desc: 'Aventura' },
  ]},
  { id: 'serie', nome: 'Melhor Série', icone: '📺', candidatos: [
    { id: 's1', nome: 'WandaVision', desc: 'Fantasia, Ficção científica e Super-heróis', img: 'Img/Serie/WandaVision.jpg',},
    { id: 's2', nome: 'The flash', desc: 'Ficção científica', img: 'Img/Serie/The flash.jpg' },
    { id: 's3', nome: 'Família Vasconcelos', desc: 'Comédia' }
  ]},
  { id: 'animacao', nome: 'Melhor Animação', icone: '🎨', candidatos: [
    { id: 'a1', nome: 'Arcane', desc: 'Fantasia, Científica e Steampunk', img: 'Img/Animação/Arcane.jpg'},
    { id: 'a2', nome: 'Carros', desc: 'Animação, Comédia, Esporte (Corrida) e Aventura.', img: 'Img/Animação/Carros.jpg' },
    { id: 'a3', nome: 'Capitã Bolha', desc: 'Piratas no fundo do mar' }
  ]},
  { id: 'ator', nome: 'Melhor Ator', icone: '♂️', candidatos: [
    { id: 'at1', nome: 'Aidan Gallagher', desc: '18 de setembro de 2003 (idade 23 anos), Los Angeles, Califórnia, EUA', img: 'Img/Ator/Aidan Gallagher.jpeg', },
    { id: 'at2', nome: 'Tom Holland', desc: '1 de junho de 1996 (idade 30 anos), Kingston-upon-Thames, Reino Unido', img: 'Img/Ator/Tom Holland.jpg', },
    { id: 'at3', nome: 'Davi Carvalhal', desc: 'Família Vasconcelos' }
  ]},
  { id: 'atriz', nome: 'Melhor Atriz', icone: '♀️', candidatos: [
    { id: 'ar1', nome: 'Kathryn Hahn', desc: '23 de julho de 1973 (idade 53 anos)Westchester, Illinois, EUA', img: 'Img/Atriz/Kathryn Hahn.jpg', },
    { id: 'ar2', nome: 'Millie Bobby Brown', desc: '19 de fevereiro de 2004 (idade 22 anos), HC Marbella International Hospital, Marbella, Espanha', img: 'Img/Atriz/Millie Bobby Brown.jpg' },
    { id: 'ar3', nome: 'Isadora Pontes', desc: 'Sombras de Verão' }
  ]},
  { id: 'vilao', nome: 'Melhor Vilão', icone: '😈', candidatos: [
    { id: 'v1', nome: 'Princesa Azula', desc: 'Azula é uma das personagens principais da série animada Avatar: The Last Airbender, sendo a principal vilã da segunda temporada e uma das antagonistas na terceira.', img: 'Img/Vilão/Princesa Azula.jpg', },
    { id: 'v2', nome: 'Lord Voldemort', desc: 'Lord Voldemort é um personagem e o principal antagonista da série de romances Harry Potter de J. K. Rowling.', img: 'Img/Vilão/Lord Voldemort.jpg' },
    { id: 'v3', nome: 'Doutor Eclipse', desc: 'Código Aurora' }
  ]},
  { id: 'heroi', nome: 'Melhor Herói', icone: '🦸', candidatos: [
    { id: 'h1', nome: 'Steven Universo', desc: 'Criadora: Rebecca Sugar. Ele é um garoto bondoso, otimista e meio humano, meio "Gem".', img: 'Img/Heroe/Steven Universo.jpg', },
    { id: 'h2', nome: 'flash', desc: 'O Flash (DC Comics) é um dos super-heróis mais famosos da DC Comics, conhecido mundialmente como o homem mais rápido do mundo.', img: 'Img/Heroe/flash.png' },
    { id: 'h3', nome: 'Guardiã da Mata', desc: 'Reino das Folhas' }
  ]},
  { id: 'casal', nome: 'Melhor Casal/Ship', icone: '💞', candidatos: [
    { id: 'c1', nome: 'Luz Noceda e Amity Blight', desc: 'São o principal casal da série animada da Disney Channel The Owl House (A Casa da Coruja).', img: 'Img/Casal/Luz Noceda e Amity Blight.jpg',},
    { id: 'c2', nome: 'Harry Potter e Gina Weasley', desc: 'O relacionamento entre Harry Potter e Gina Weasley (Ginevra Weasley) é um dos romances centrais da saga criada por J.K. Rowling.', img: 'Img/Casal/Harry Potter e Gina Weasley.jpg' },
    { id: 'c3', nome: 'Isadora & Théo', desc: 'Sombras de Verão' }
  ]},
  { id: 'final', nome: 'Melhor Final', icone: '🌟', candidatos: [
    { id: 'fi1', nome: 'Doutor estranho no multiverso da loucura', desc: 'Wanda Maximoff (a Feiticeira Escarlate) tem um momento de redenção após perceber o terror que causou aos filhos (Billy e Tommy) de outra realidade.', img: 'Img/Final/Torre cai em Wanda.jpg' },
    { id: 'fi2', nome: 'Harry Potter e as Relíquias da Morte', desc: 'O Trio de Ouro reconstrói o mundo mágico e homenageia os caídos após a guerra. O filme foca na recuperação imediata e termina com os amigos em paz, de volta a Hogwarts.', img: 'Img/Final/Harry Potter e as Relíquias da Morte Final.avif', },
    { id: 'fi3', nome: 'Pipo e a Lua de Papel', desc: 'A despedida sob a lua',  }
  ]}
];

// votos = { categoria: { candidato: quantidade } }  |  meusVotos = { categoria: candidato }
let votos = JSON.parse(localStorage.getItem('cine-votos')) || {};
let meusVotos = JSON.parse(localStorage.getItem('cine-meus-votos')) || {};

let categoriaAtual = null;
let escolhido = null;

function salvar() {
  localStorage.setItem('cine-votos', JSON.stringify(votos));
  localStorage.setItem('cine-meus-votos', JSON.stringify(meusVotos));
}

function qtdVotos(cat, cand) {
  return (votos[cat] && votos[cat][cand]) || 0;
}

function totalDaCategoria(cat) {
  let total = 0;
  for (const c of cat.candidatos) total += qtdVotos(cat.id, c.id);
  return total;
}

function textoVotos(n) {
  return n + (n === 1 ? ' voto' : ' votos');
}

function mostrarTela(nome) {
  for (const t of document.querySelectorAll('.tela')) t.classList.remove('ativa');
  document.getElementById('tela-' + nome).classList.add('ativa');
  document.getElementById('topo').hidden = (nome === 'home');
  window.scrollTo(0, 0);
}

function aviso(texto) {
  const toast = document.getElementById('toast');
  toast.textContent = texto;
  toast.classList.add('visivel');
  setTimeout(() => toast.classList.remove('visivel'), 2400);
}

// ---------- HOME ----------
function mostrarHome() {
  let html = '';
  let votadas = 0;
  for (const cat of categorias) {
    const votou = meusVotos[cat.id];
    if (votou) votadas++;
    html += `
      <button class="cartao-categoria ${votou ? 'votada' : ''}" onclick="abrirCategoria('${cat.id}')">
        <span class="icone">${cat.icone}</span>
        <span class="nome">${cat.nome}</span>
        <span class="status">${votou ? 'Voto registrado' : cat.candidatos.length + ' candidatos'}</span>
      </button>`;
  }
  document.getElementById('gradeCategorias').innerHTML = html;

  document.getElementById('progressoTexto').textContent =
    votadas === 0 ? 'Você ainda não votou' : `Você votou em ${votadas} de ${categorias.length} categorias`;
  document.getElementById('barraProgresso').style.width = (votadas / categorias.length * 100) + '%';
  mostrarTela('home');
}

// ---------- CATEGORIA ----------
function abrirCategoria(id) {
  categoriaAtual = categorias.find(c => c.id === id);
  escolhido = null;
  mostrarCategoria();
  mostrarTela('categoria');
}

function mostrarCategoria() {
  const cat = categoriaAtual;
  const meuVoto = meusVotos[cat.id];

  document.getElementById('catIcone').textContent = cat.icone;
  document.getElementById('catEtapa').textContent = `Categoria ${categorias.indexOf(cat) + 1} de ${categorias.length}`;
  document.getElementById('catNome').textContent = cat.nome;
  document.getElementById('catAviso').textContent = meuVoto
    ? 'Seu voto foi registrado. Veja a apuração abaixo.'
    : 'Escolha seu favorito e confirme o voto.';

  let html = '';
  for (const c of cat.candidatos) {
    html += `
      <button class="candidato ${meuVoto === c.id ? 'meu-voto' : ''}" id="cand-${c.id}"
              ${meuVoto ? 'disabled' : ''} onclick="escolher('${c.id}')">
        <span class="capa">${c.img ? `<img src="${c.img}" alt="${c.nome}">` : ''}</span>
        <span class="c-nome">${c.nome}</span>
        <span class="c-desc">${c.desc}</span>
        ${meuVoto === c.id ? '<span class="c-selo">Seu voto</span>' : ''}
        ${meuVoto ? '' : '<span class="c-check">✓</span>'}
      </button>`;
  }
  document.getElementById('gradeCandidatos').innerHTML = html;

  const acoes = document.getElementById('acoesCategoria');
  const parcial = document.getElementById('apuracaoParcial');
  if (meuVoto) {
    acoes.innerHTML = `
      <button class="btn btn-borda" onclick="alterarVoto()">Alterar meu voto</button>
      <button class="btn btn-ouro" onclick="mostrarHome()">Voltar às categorias</button>`;
    parcial.innerHTML = '<h3>Apuração parcial</h3>' + barras(cat);
  } else {
    acoes.innerHTML = '<button class="btn btn-ouro" id="btnConfirmar" disabled onclick="confirmarVoto()">Confirmar voto</button>';
    parcial.innerHTML = '';
  }
}

function escolher(id) {
  escolhido = id;
  for (const c of categoriaAtual.candidatos) {
    document.getElementById('cand-' + c.id).classList.toggle('selecionado', c.id === id);
  }
  document.getElementById('btnConfirmar').disabled = false;
}

function confirmarVoto() {
  if (!escolhido) return;
  const id = categoriaAtual.id;
  if (!votos[id]) votos[id] = {};
  votos[id][escolhido] = qtdVotos(id, escolhido) + 1;
  meusVotos[id] = escolhido;
  salvar();
  mostrarCategoria();
  aviso('Voto registrado!');
}

function alterarVoto() {
  const id = categoriaAtual.id;
  votos[id][meusVotos[id]]--;
  delete meusVotos[id];
  salvar();
  escolhido = null;
  mostrarCategoria();
}

// ---------- RESULTADOS ----------
// monta as barras de votos de uma categoria (do mais votado para o menos)
function barras(cat) {
  const total = totalDaCategoria(cat);
  const ordenados = cat.candidatos.slice().sort((a, b) => qtdVotos(cat.id, b.id) - qtdVotos(cat.id, a.id));
  const maior = qtdVotos(cat.id, ordenados[0].id);

  let html = '';
  for (const c of ordenados) {
    const n = qtdVotos(cat.id, c.id);
    const porcento = total ? Math.round(n / total * 100) : 0;
    const lider = total > 0 && n === maior;
    html += `
      <div class="linha-voto ${lider ? 'lider' : ''}">
        <div class="topo-linha">
          <span class="nome">${c.nome}</span>
          <span class="qtd">${textoVotos(n)} • ${porcento}%</span>
        </div>
        <div class="trilho"><div class="preench" style="width:${porcento}%"></div></div>
      </div>`;
  }
  return html;
}

function mostrarResultados() {
  let geral = 0;
  let html = '';

  for (const cat of categorias) {
    const total = totalDaCategoria(cat);
    geral += total;

    // quem tem mais votos (pode ter empate)
    const maior = Math.max(...cat.candidatos.map(c => qtdVotos(cat.id, c.id)));
    const lideres = cat.candidatos.filter(c => qtdVotos(cat.id, c.id) === maior);

    let vencedor;
    if (total === 0) vencedor = '<small>Aguardando votos</small><strong>Ainda sem vencedor</strong>';
    else if (lideres.length > 1) vencedor = '<small>Empate</small><strong>' + lideres.map(c => c.nome).join(' • ') + '</strong>';
    else vencedor = '<small>Vencedor</small><strong>' + lideres[0].nome + '</strong>';

    html += `
      <article class="res-cartao">
        <h3>${cat.icone} ${cat.nome}</h3>
        <p class="res-total">${textoVotos(total)} nesta categoria</p>
        <div class="res-vencedor"><div>${vencedor}</div></div>
        ${barras(cat)}
      </article>`;
  }

  document.getElementById('gradeResultados').innerHTML = html;
  document.getElementById('totalGeral').textContent =
    geral === 0 ? 'Nenhum voto registrado ainda.' : textoVotos(geral) + ' contabilizados';
  mostrarTela('resultados');
}

// ---------- OUTROS BOTÕES ----------
function proximoEleitor() {
  meusVotos = {};
  salvar();
  mostrarHome();
  aviso('Pronto! Um novo eleitor pode votar.');
}

function zerarVotacao() {
  if (!confirm('Apagar todos os votos?')) return;
  votos = {};
  meusVotos = {};
  salvar();
  mostrarResultados();
}

document.getElementById('btnVerResultados').onclick = mostrarResultados;
document.getElementById('btnVoltarHome').onclick = mostrarHome;
document.getElementById('btnVoltarHome2').onclick = mostrarHome;
document.getElementById('btnNovoEleitor').onclick = proximoEleitor;
document.getElementById('btnZerar').onclick = zerarVotacao;
document.getElementById('btnTopoHome').onclick = (e) => { e.preventDefault(); mostrarHome(); };
document.getElementById('btnTopoCategorias').onclick = mostrarHome;
document.getElementById('btnTopoResultados').onclick = mostrarResultados;

mostrarHome();
