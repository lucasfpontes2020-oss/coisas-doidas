// CINE AWARDS - votação

const categorias = [
  { id: 'filme', nome: 'Melhor Filme', icone: '🎬', candidatos: [
    { id: 'f1', nome: 'O Último Farol', desc: 'Drama', emoji: '🌊', cor: '#1d3a52' },
    { id: 'f2', nome: 'Cidade de Cinzas', desc: 'Suspense', emoji: '🏙️', cor: '#3b3b3b' },
    { id: 'f3', nome: 'Rio dos Sonhos', desc: 'Aventura', emoji: '🛶', cor: '#1f4a2c' },
  ]},
  { id: 'serie', nome: 'Melhor Série', icone: '📺', candidatos: [
    { id: 's1', nome: 'WandaVision', desc: 'Fantasia', img: 'Img/Serie/WandaVision.jpg', cor: '#df1c1c' },
    { id: 's2', nome: 'Código Aurora', desc: 'Ficção científica', emoji: '🚀', cor: '#2a1f5c' },
    { id: 's3', nome: 'Família Vasconcelos', desc: 'Comédia', emoji: '🏠', cor: '#6a3b17' }
  ]},
  { id: 'animacao', nome: 'Melhor Animação', icone: '🎨', candidatos: [
    { id: 'a1', nome: 'Pipo e a Lua de Papel', desc: 'Um menino e sua lua de origami', emoji: '🌙', cor: '#2c3e7a' },
    { id: 'a2', nome: 'Reino das Folhas', desc: 'Pequenos heróis da floresta', emoji: '🍃', cor: '#2f6b2f' },
    { id: 'a3', nome: 'Capitã Bolha', desc: 'Piratas no fundo do mar', emoji: '🫧', cor: '#136a7a' }
  ]},
  { id: 'ator', nome: 'Melhor Ator', icone: '🎭', candidatos: [
    { id: 'at1', nome: 'Rafael Montenegro', desc: 'O Último Farol', emoji: '🧔', cor: '#3a2a1a' },
    { id: 'at2', nome: 'Theo Albuquerque', desc: 'Cidade de Cinzas', emoji: '🕵️', cor: '#2b2b3a' },
    { id: 'at3', nome: 'Davi Carvalhal', desc: 'Família Vasconcelos', emoji: '😄', cor: '#5a3a1a' }
  ]},
  { id: 'atriz', nome: 'Melhor Atriz', icone: '🌟', candidatos: [
    { id: 'ar1', nome: 'Helena Marquesi', desc: 'A Noite Dourada', emoji: '👗', cor: '#5a1f3a' },
    { id: 'ar2', nome: 'Clara Vasques', desc: 'Rio dos Sonhos', emoji: '🧭', cor: '#1f4a3a' },
    { id: 'ar3', nome: 'Isadora Pontes', desc: 'Sombras de Verão', emoji: '🕶️', cor: '#3a2a5a' }
  ]},
  { id: 'vilao', nome: 'Melhor Vilão', icone: '😈', candidatos: [
    { id: 'v1', nome: 'Barão Negrume', desc: 'Cidade de Cinzas', emoji: '🦹', cor: '#2a0f0f' },
    { id: 'v2', nome: 'Dama das Ondas', desc: 'Capitã Bolha', emoji: '🐙', cor: '#12304a' },
    { id: 'v3', nome: 'Doutor Eclipse', desc: 'Código Aurora', emoji: '🌑', cor: '#241a3a' }
  ]},
  { id: 'heroi', nome: 'Melhor Herói', icone: '🦸', candidatos: [
    { id: 'h1', nome: 'Capitão Aurora', desc: 'Código Aurora', emoji: '🧑‍🚀', cor: '#7a3a0a' },
    { id: 'h2', nome: 'Pipo', desc: 'Pipo e a Lua de Papel', emoji: '👦', cor: '#2c3e7a' },
    { id: 'h3', nome: 'Guardiã da Mata', desc: 'Reino das Folhas', emoji: '🏹', cor: '#2f6b2f' }
  ]},
  { id: 'casal', nome: 'Melhor Casal', icone: '💞', candidatos: [
    { id: 'c1', nome: 'Helena & Murilo', desc: 'A Noite Dourada', emoji: '💃', cor: '#5a1f3a' },
    { id: 'c2', nome: 'Clara & Bento', desc: 'Rio dos Sonhos', emoji: '🛶', cor: '#1f4a3a' },
    { id: 'c3', nome: 'Isadora & Théo', desc: 'Sombras de Verão', emoji: '🌅', cor: '#6a3b17' }
  ]},
  { id: 'final', nome: 'Melhor Final', icone: '🎞️', candidatos: [
    { id: 'fi1', nome: 'O Último Farol', desc: 'A luz que volta a brilhar', emoji: '🔦', cor: '#1d3a52' },
    { id: 'fi2', nome: 'Código Aurora', desc: 'O nascer do sol em outro mundo', emoji: '🌅', cor: '#2a1f5c' },
    { id: 'fi3', nome: 'Pipo e a Lua de Papel', desc: 'A despedida sob a lua', emoji: '🌙', cor: '#2c3e7a' }
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
              style="--cor:${c.cor}" ${meuVoto ? 'disabled' : ''} onclick="escolher('${c.id}')">
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
  aviso('Voto registrado! 🏆');
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
