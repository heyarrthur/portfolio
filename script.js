// ===============================
// Seção Sobre Mim - Truncamento e Modal
// ===============================

// Simule um texto de 6000 caracteres com Lorem Ipsum para teste
const fullText = `Sou Arthur Marques Ferreira, um desenvolvedor apaixonado por tecnologia, inovação e soluções criativas. Com experiência em desenvolvimento full stack, meu objetivo é criar plataformas modernas e funcionais que otimizam processos e tornam o dia a dia mais eficiente. Busco aprendizado contínuo para aprimorar a experiência tanto dos usuários quanto dos clientes, sempre explorando novas tecnologias e abordagens inovadoras.

Atualmente, lidero o desenvolvimento de uma API de insights para o Instagram, projetando uma plataforma capaz de coletar e analisar dados como seguidores, curtidas, publicações e reposts. O objetivo é oferecer um painel completo para influenciadores, tornando a gestão de métricas mais intuitiva e eficaz. Para isso, utilizo tecnologias como Java, Spring Boot, HTML, CSS, JavaScript e Node.js.

Além desse projeto, minha trajetória inclui suporte a clientes e desenvolvimento de soluções personalizadas, criação de e-commerces por meio do WordPress e Elementor, além do desenvolvimento de landing pages para diversos segmentos, como clínicas e negócios locais. Estou sempre em busca de novos desafios que me permitam evoluir como profissional e expandir meu conhecimento. Acredito que tecnologia deve ser intuitiva, acessível e impactante, sempre agregando valor e transformando ideias em realidade.`;

// Define o limite de caracteres para exibição na página (2000 caracteres)
const limite = 2000;

// Obtenha os elementos onde o texto será exibido
const sobreMimContent = document.getElementById('sobreMimContent');
const btnSaibaMais = document.getElementById('btnSaibaMais');
const modalSobreMimBody = document.getElementById('modalSobreMimBody');

// Se o texto exceder o limite, exiba o texto truncado e mostre o botão
if (fullText.length > limite) {
    const truncatedText = fullText.substring(0, limite) + '...';
    sobreMimContent.textContent = truncatedText;
    btnSaibaMais.style.display = 'block';
} else {
    sobreMimContent.textContent = fullText;
    btnSaibaMais.style.display = 'none';
}

// Ao clicar no botão, o modal já será aberto graças aos atributos data-bs-* no botão.
// Apenas preenche o modal com o texto completo.
btnSaibaMais.addEventListener('click', () => {
    modalSobreMimBody.textContent = fullText;
});

// ===============================
// Tema Claro / Escuro (caso já esteja implementado)
// ===============================
const themeToggleDesktop = document.getElementById('theme-toggle');
const themeToggleOffcanvas = document.getElementById('theme-toggle-offcanvas');

function toggleTheme(button) {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        button.textContent = 'Tema Claro';
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        button.textContent = 'Tema Escuro';
    }
    if (themeToggleDesktop && themeToggleOffcanvas) {
        themeToggleDesktop.textContent = button.textContent;
        themeToggleOffcanvas.textContent = button.textContent;
    }
}

if (themeToggleDesktop) {
    themeToggleDesktop.addEventListener('click', () => {
        toggleTheme(themeToggleDesktop);
    });
}

if (themeToggleOffcanvas) {
    themeToggleOffcanvas.addEventListener('click', () => {
        toggleTheme(themeToggleOffcanvas);
    });
}

// ===============================
// Modal de Conhecimentos: Atualiza com os dados do card clicado
// ===============================
const modalConhecimentoLabel = document.getElementById('modalConhecimentoLabel');
const modalConhecimentoBody = document.getElementById('modalConhecimentoBody');

document.querySelectorAll('.btn-saber-mais').forEach(button => {
    button.addEventListener('click', () => {
        const title = button.getAttribute('data-title');
        const description = button.getAttribute('data-description');
        modalConhecimentoLabel.textContent = title;
        modalConhecimentoBody.textContent = description;
    });
});

// ===============================
// Filtros de Conhecimentos
// ===============================
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões e adiciona no atual
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        const cards = document.querySelectorAll('.conhecimento-card');

        cards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Modal de Curso: Atualiza com os dados do botão "Saber mais" de cada curso
document.querySelectorAll('.btn-saber-mais').forEach(button => {
    button.addEventListener('click', function () {
        const title = this.getAttribute('data-title');
        const description = this.getAttribute('data-description');
        document.getElementById('modalCursoLabel').textContent = title;
        document.getElementById('modalCursoBody').textContent = description;
    });
});

// ===============================
// Filtros de Projetos
// ===============================
const projetoFilterButtons = document.querySelectorAll('#projetos .filter-btn');

projetoFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões e adiciona no atual
        projetoFilterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        const projetosCards = document.querySelectorAll('.projeto-card');

        projetosCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

