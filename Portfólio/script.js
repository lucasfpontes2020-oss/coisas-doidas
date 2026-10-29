(function () {
  var raiz = document.documentElement;
  var CHAVE = "portfolio-lucas-tema";

  /* ---------- Tema ---------- */
  function lerTema() {
    try { return localStorage.getItem(CHAVE); } catch (e) { return null; }
  }

  function salvarTema(tema) {
    try { localStorage.setItem(CHAVE, tema); } catch (e) { /* sem problema */ }
  }

  function aplicarTema(tema) {
    raiz.setAttribute("data-theme", tema);

    var botao = document.getElementById("themeToggle");
    if (botao) {
      var texto = tema === "dark" ? "Ativar modo claro" : "Ativar modo escuro";
      botao.setAttribute("aria-label", texto);
      botao.setAttribute("title", texto);
    }

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", tema === "dark" ? "#07060b" : "#ffffff");
  }

  var temaAtual = lerTema();
  if (temaAtual !== "light" && temaAtual !== "dark") temaAtual = "dark";
  aplicarTema(temaAtual); // roda já no <head>, antes da página aparecer

  /* ---------- Resto da página ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    aplicarTema(temaAtual);

    // Botão de trocar tema
    var botaoTema = document.getElementById("themeToggle");
    if (botaoTema) {
      botaoTema.addEventListener("click", function () {
        temaAtual = temaAtual === "dark" ? "light" : "dark";
        aplicarTema(temaAtual);
        salvarTema(temaAtual);
      });
    }

    // Menu do celular
    var botaoMenu = document.getElementById("menuToggle");
    var menu = document.getElementById("menu");

    function fecharMenu() {
      if (!menu || !botaoMenu) return;
      menu.classList.remove("open");
      botaoMenu.setAttribute("aria-expanded", "false");
    }

    if (botaoMenu && menu) {
      botaoMenu.addEventListener("click", function () {
        var aberto = menu.classList.toggle("open");
        botaoMenu.setAttribute("aria-expanded", aberto ? "true" : "false");
      });

      menu.addEventListener("click", function (e) {
        if (e.target.closest("a")) fecharMenu();
      });

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") fecharMenu();
      });
    }

    // Destaca no menu a seção que está na tela
    var links = document.querySelectorAll('.nav a[href^="#"]');
    var secoes = [];
    links.forEach(function (link) {
      var alvo = document.querySelector(link.getAttribute("href"));
      if (alvo) secoes.push({ link: link, alvo: alvo });
    });

    if ("IntersectionObserver" in window && secoes.length) {
      var observador = new IntersectionObserver(
        function (entradas) {
          entradas.forEach(function (entrada) {
            if (!entrada.isIntersecting) return;
            secoes.forEach(function (s) {
              s.link.classList.toggle("active", s.alvo === entrada.target);
            });
          });
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      secoes.forEach(function (s) { observador.observe(s.alvo); });
    }

    // Aviso para projetos que ainda estão com href="#"
    var toast = document.getElementById("toast");
    var temporizador;

    function mostrarAviso(mensagem) {
      if (!toast) return;
      toast.textContent = mensagem;
      toast.classList.add("show");
      clearTimeout(temporizador);
      temporizador = setTimeout(function () {
        toast.classList.remove("show");
      }, 3500);
    }

    document.querySelectorAll(".project a.btn").forEach(function (botao) {
      botao.addEventListener("click", function (e) {
        if (botao.getAttribute("href") === "#") {
          e.preventDefault();
          mostrarAviso("O link deste projeto ainda não foi adicionado. Edite o index.html.");
        }
      });
    });

    // Ano do rodapé
    var ano = document.getElementById("ano");
    if (ano) ano.textContent = new Date().getFullYear();
  });
})();
