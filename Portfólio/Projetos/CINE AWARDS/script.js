// CINE AWARDS - votação

const categorias = [
  { id: 'filme', nome: 'Melhor Filme', icone: '🎬', candidatos: [
    { id: 'f1', nome: 'Doutor estranho no multiverso da loucura', desc: 'Fantasia, Ação, Aventura e Terror', img: 'Img/Filme/Doutor estranho no multiverso da loucura.jpg',},
    { id: 'f2', nome: 'Harry Potter e o prisioneiro de Azkaban', desc: 'fantasia e aventura.', img: 'Img/Filme/Harry Potter e o prisioneiro de Azkaban.jpg' },
    { id: 'f3', nome: 'Até o Último Homem', desc: 'guerra, drama e biografia (ou drama biográfico)', img: 'Img/Filme/Até o Último Homem.png' },
    { id: 'f4', nome: 'A Nova Cinderela', desc: 'comédia romântica e romance adolescente', img: 'Img/Filme/A Nova Cinderela.jpg' },
    { id: 'f5', nome: 'Clube da Luta', desc: 'drama, suspense (thriller) e sátira social', img: 'Img/Filme/Clube da Luta.jpg' },
    { id: 'f6', nome: 'Os Incríveis', desc: 'animação, ação, aventura, comédia e filme de super-heróis', img: 'Img/Filme/Os Incríveis.jpg' },
  ]},
  { id: 'serie', nome: 'Melhor Série', icone: '📺', candidatos: [
    { id: 's1', nome: 'WandaVision', desc: 'Fantasia, Ficção científica e Super-heróis', img: 'Img/Serie/WandaVision.jpg',},
    { id: 's2', nome: 'The flash', desc: 'Super-herói, ação, aventura, drama e ficção científica', img: 'Img/Serie/The flash.jpg' },
    { id: 's3', nome: 'The Umbrella Academy', desc: 'super-herói, ficção científica, fantasia, ação e comédia dramática (dramédia)', img: 'Img/Serie/The Umbrella Academy.jpg',},
    { id: 's4', nome: 'O Mentalista', desc: 'drama policial, investigação, mistério e suspense', img: 'Img/Serie/O Mentalista.jpg',},
    { id: 's5', nome: 'Meu Nome é Farah', desc: 'Drama, Romance, Suspense, Crime e Ação', img: 'Img/Serie/Meu Nome é Farah.jpg',},
    { id: 's6', nome: 'Dexter', desc: 'drama, suspense (thriller), policial e humor ácido (comédia sombria)', img: 'Img/Serie/Dexter.jpg',},
  ]},
  { id: 'animacao', nome: 'Melhor Animação', icone: '🎨', candidatos: [
    { id: 'a1', nome: 'Arcane', desc: 'Fantasia, Científica e Steampunk', img: 'Img/Animação/Arcane.jpg'},
    { id: 'a2', nome: 'Carros', desc: 'Animação, Comédia, Esporte (Corrida) e Aventura.', img: 'Img/Animação/Carros.jpg' },
    { id: 'a3', nome: 'Gato de Botas 2', desc: 'Fantasia, Aventura, Comédia e contos de Fadas', img: 'Img/Animação/Gato de Botas 2.jpg'},
    { id: 'a4', nome: ' The boondocks', desc: 'Comédia, Sátira Social e Elementos de Ação', img: 'Img/Animação/The Boondocks.jpg'},
    { id: 'a5', nome: 'A Bailarina', desc: 'Animação, Aventura e Comédia Musical', img: 'Img/Animação/A Bailarina.jpg'},
    { id: 'a6', nome: 'Homem-Aranha: Através do Aranhaverso', desc: 'super-heróis, ação, aventura e ficção Científica', img: 'Img/Animação/Homem Aranha Através do Aranhaverso.jpg'},
  ]},
  { id: 'ator', nome: 'Melhor Ator', icone: '♂️', candidatos: [
    { id: 'at1', nome: 'Aidan Gallagher', desc: '18 de setembro de 2003 (idade 23 anos), Los Angeles, Califórnia, EUA', img: 'Img/Ator/Aidan Gallagher.jpeg', },
    { id: 'at2', nome: 'Tom Holland', desc: '1 de junho de 1996 (idade 30 anos), Kingston-upon-Thames, Reino Unido', img: 'Img/Ator/Tom Holland.jpg', },
    { id: 'at3', nome: 'Michael B. Jordan', desc: '9 de fevereiro de 1987 (idade 39 anos), Santa Ana, Califórnia, EUA', img: 'Img/Ator/michael b jordan.jpg', },
    { id: 'at4', nome: 'Adam Sandler', desc: '9 de setembro de 1966 (idade 60 anos), Brooklyn, Nova Iorque, Nova York, EUA', img: 'Img/Ator/adam sandler.jpg', },
    { id: 'at5', nome: 'Ruggero Pasquarelli', desc: '10 de setembro de 1993 (idade 33 anos), Città Sant´Angelo, Itália', img: 'Img/Ator/Ruggero Pasquarelli.jpg', },
    { id: 'at6', nome: 'Robert de Niro', desc: '17 de agosto de 1943 (idade 83 anos), Manhattan, Nova Iorque, Nova York, EUA', img: 'Img/Ator/Robert de Niro.jpg', },
  ]},
  { id: 'atriz', nome: 'Melhor Atriz', icone: '♀️', candidatos: [
    { id: 'ar1', nome: 'Kathryn Hahn', desc: '23 de julho de 1973 (idade 53 anos)Westchester, Illinois, EUA', img: 'Img/Atriz/Kathryn Hahn.jpg', },
    { id: 'ar2', nome: 'Millie Bobby Brown', desc: '19 de fevereiro de 2004 (idade 22 anos), HC Marbella International Hospital, Marbella, Espanha', img: 'Img/Atriz/Millie Bobby Brown.jpg' },
    { id: 'ar3', nome: 'Jenna Ortega', desc: '27 de setembro de 2002 (idade 24 anos), Rancho Mirage, Califórnia, EUA', img: 'Img/Atriz/Jenna Ortega.jpg', },
    { id: 'ar4', nome: 'Lupita Nyong´o', desc: '1 de março de 1983 (idade 43 anos), Cidade do México, México', img: 'Img/Atriz/Lupita Nyong´o.jpg', },
    { id: 'ar5', nome: 'Valentina Zenere', desc: '15 de janeiro de 1997 (idade 29 anos), Buenos Aires, Argentina', img: 'Img/Atriz/Valentina Zenere.jpg', },
    { id: 'ar6', nome: 'Fernanda Torres', desc: '15 de setembro de 1965 (idade 61 anos), Rio de Janeiro, Rio de Janeiro', img: 'Img/Atriz/Fernanda Torres.jpg', },
  ]},
  { id: 'vilao', nome: 'Melhor Vilão', icone: '😈', candidatos: [
    { id: 'v1', nome: 'Princesa Azula', desc: 'Azula é a principal antagonista das temporadas finais de Avatar: A Lenda de Aang. Ela é a princesa da Nação do Fogo, filha do Senhor do Fogo Ozai e irmã mais nova de Zuko', img: 'Img/Vilão/Princesa Azula.jpg', },
    { id: 'v2', nome: 'Lord Voldemort', desc: 'Lord Voldemort é o vilão principal de Harry Potter. Nascido Tom Riddle, ele se tornou o bruxo das trevas mais temido da história, buscando a imortalidade e o controle do mundo mágico.', img: 'Img/Vilão/Lord Voldemort.jpg' },
    { id: 'v3', nome: 'Scar', desc: 'Conhecido como o principal antagonista de O Rei Leão. Ele é o irmão mais novo de Mufasa e tio de Simba, movido por uma profunda inveja, arrogância e sede pelo trono da Pedra do Reino.', img: 'Img/Vilão/scar.png', },
    { id: 'v4', nome: 'Coringa', desc: '(Joker) É o maior vilão do Batman e das histórias em quadrinhos da DC Comics. Ele é um psicopata anarquista com aparência de palhaço, conhecido por sua mente brilhante, imprevisível e sádica.', img: 'Img/Vilão/coringa.webp', },
    { id: 'v5', nome: 'Behnam Azadi', desc: 'é o grande antagonista e vilão da segunda temporada da novela turca Meu Nome é Farah (Adım Farah), interpretado pelo ator Feyyaz Duman. Ele é um poderoso e perigoso chefe do crime iraniano.', img: 'Img/Vilão/Behnam azadi.jpg', },
    { id: 'v6', nome: 'Patrick Bateman', desc: 'É o protagonista de Psicopata Americano (livro de 1991 / filme de 2000), interpretado por Christian Bale. Ele é a caricatura satírica de um jovem e rico executivo de Wall Street no final dos anos 1980.', img: 'Img/Vilão/Patrick Bateman.jpeg', },
  ]},
  { id: 'heroi', nome: 'Melhor Herói', icone: '🦸', candidatos: [
    { id: 'h1', nome: 'Steven Universo', desc: 'Criadora: Rebecca Sugar. Steven Universo é um garoto metade gem que tem uma pedra mágica e, criado por três protetoras da Terra, salva a galáxia transformando vilões em aliados através da empatia e do diálogo.', img: 'Img/Heroe/Steven Universo.jpg', },
    { id: 'h2', nome: 'Flash', desc: 'Criadores: Greg Berlanti, Andrew Kreisberg, Geoff Johns. O Flash é um dos super-heróis mais famosos da DC Comics, conhecido mundialmente como o homem mais rápido do mundo.', img: 'Img/Heroe/flash.png' },
    { id: 'h3', nome: 'Homem aranha noir', desc: 'Criadores: David Hine, Fabrice Sapolsky, Carmine Di Giandomenico. é uma versão sombria de Peter Parker na Nova York de 1933, que ganha poderes ao ser picado por uma aranha mística vinda de uma estátua contrabandeada pelo vilão Duende.', img: 'Img/Heroe/Homem aranha noir.jpg' },
    { id: 'h4', nome: 'Miles Morales', desc: 'Criadores: Sara Pichelli, Brian Michael Bendis, Steve Ditko. é um adolescente do Brooklyn, de ascendência negra e porto-riquenha, que se torna o novo Homem-Aranha após ser picado por uma aranha geneticamente modificada da Oscorp.', img: 'Img/Heroe/miles morales.jpg' },
    { id: 'h5', nome: 'Jack Frost', desc: 'Criadores:  Shane Prigmore, William Joyce. é um ser lendário que personifica o inverno, o gelo e a neve. Ele ficou mundialmente conhecido como o protagonista do filme de animação A Origem dos Guardiões (2012) da DreamWorks..', img: 'Img/Heroe/Jack Frost.webp' },
    { id: 'h6', nome: 'Homem Aranha', desc: 'Criadores: Stan Lee e Steve Ditko, Brian Michael Bendis. Criado para a Marvel Comics. Ele é um jovem órfão e brilhante que ganha poderes proporcionais aos de uma aranha após ser picado por um espécime radioativo.', img: 'Img/Heroe/homem aranha.jpg' },
  ]},
  { id: 'casal', nome: 'Melhor Casal', icone: '💞', candidatos: [
    { id: 'c1', nome: 'Luz Noceda e Amity Blight', desc: 'Luz é uma humana otimista e desajeitada que vai parar em um mundo mágico, enquanto Amity começa como uma bruxa prodígio arrogante e rival de Luz.', img: 'Img/Casal/Luz Noceda e Amity Blight.jpg',},
    { id: 'c2', nome: 'Harry Potter e Gina Weasley', desc: 'Harry e Gina passam de amigos a casal principal da saga. Eles superam a guerra bruxa juntos, se casam e constroem uma família.', img: 'Img/Casal/Harry Potter e Gina Weasley.jpg' },
    { id: 'c3', nome: 'nick e judy', desc: 'Nick e Judy superam preconceitos Animal e se tornam um casal e parceiros policiais imbatíveis em Zootopia.', img: 'Img/Casal/nick e judy.jpg' },
    { id: 'c4', nome: 'Sam Montgomery e Austin ames', desc: 'Sam é uma jovem trabalhadora explorada pela madrasta, e Austin é o garoto popular e quarterback da escola.', img: 'Img/Casal/Sam Montgomery e Austin ames.jpg' },
    { id: 'c5', nome: 'Dexter Morgan e Rita Bennett', desc: 'Dexter e Rita casam-se e têm um filho enquanto ele mantem sua vida dupla. O relacionamento termina de forma trágica quando ela é assassinada por um de seus inimigos.', img: 'Img/Casal/Dexter Morgan e Rita Bennett.jpg' },
    { id: 'c6', nome: 'gambit e vampira', desc: 'O romance deles, iniciado nos anos 1990, sempre foi definido pela dinâmica de um "amor impossível", mas que eventualmente evoluiu para um casamento sólido e maduro.', img: 'Img/Casal/gambit e vampira.webp' },
  ]},
  { id: 'final', nome: 'Melhor Final', icone: '🌟', candidatos: [
    { id: 'fi1', nome: 'Doutor estranho no multiverso da loucura', desc: 'Wanda Maximoff (a Feiticeira Escarlate) tem um momento de redenção após perceber o terror que causou aos filhos (Billy e Tommy) de outra realidade.', img: 'Img/Final/Torre cai em Wanda.jpg' },
    { id: 'fi2', nome: 'Harry Potter e as Relíquias da Morte', desc: 'O Trio de Ouro reconstrói o mundo mágico e homenageia os caídos após a guerra. O filme foca na recuperação imediata e termina com os amigos em paz, de volta a Hogwarts.', img: 'Img/Final/Harry Potter e as Relíquias da Morte Final.avif', },
    { id: 'fi3', nome: 'Toy Story 3', desc: 'A cena final é considerada um dos momentos mais emocionantes e marcantes da história do cinema de animação. Nela, Andy, prestes a ir para a faculdade, toma a dolorosa e madura decisão de doar seus amados brinquedos para a pequena Bonnie.', img: 'Img/Final/Andy passa seus brinquedos.jpg'  },
    { id: 'fi5', nome: 'Clube da Luta', desc: 'o Narrador atira na própria bochecha para eliminar seu alter ego, Tyler Durden. Ele sobrevive e, ao lado de Marla Singer, assiste à explosão dos prédios financeiros, consolidando o plano do Projeto Destruição.', img: 'Img/Final/final de Clube da Luta.jpg'  },
    { id: 'fi4', nome: 'A Nova Cinderela', desc: 'Austin abandona o jogo de futebol americano importante ao ver Sam na arquibancada. Ele corre até ela sob a chuva e se declara, e os dois se beijam apaixonadamente no meio do campo, quebrando a barreira da mentira.', img: 'Img/Final/A nova cinderela.jpg'  },
    { id: 'fi6', nome: 'Loki', desc: 'Loki se sacrifica para destruir o Tear Temporal e unir as linhas temporais com sua magia. Ele assume o trono solitário como o Deus das Histórias, moldando o multiverso em Yggdrasil para proteger o livre-arbítrio.', img: 'Img/Final/loki.jpg'  },
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
