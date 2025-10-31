Um portfólio leve, responsivo e acessível em tema claro com detalhes preto & branco e artes abstratas, construído com HTML, CSS, JavaScript vanilla e Tailwind via CDN.
Este guia explica passo a passo como o projeto foi estruturado e como personalizar cada parte — sem abordar deploy.

Sumário

Visão geral

Stack e decisões de design

Estrutura de pastas sugerida

Primeiros passos / Rodar localmente

Layout: visão macro

Sidebar (cartão à esquerda)

Seção “Sobre mim” + Modal “Saber Mais”

Soft Skills & Hard Skills

Formações (timeline) e Cursos

Projetos (filtros, busca, botões, Case Study)

Experiência (linha do tempo)

Contato (WhatsApp + e-mail)

Página de manutenção

Acessibilidade

Animações e efeitos

Como personalizar rapidamente

Dicas de performance

Solução de problemas (FAQ)

Licença

Visão geral

O projeto foca em:

Clareza visual (tema light, alto contraste controlado).

Acessibilidade básica (navegação por teclado, rótulos, aria-attributes onde relevante).

Componentes reutilizáveis com Tailwind.

JS simples para filtros, busca, modais e animações por IntersectionObserver.

Stack e decisões de design

HTML semântico com seções (<section>, <nav>, <main>, <article>, etc).

Tailwind via CDN para agilidade e consistência visual.

JavaScript vanilla para:

Destacar item ativo do menu.

Abrir/fechar modais com foco gerenciado.

Filtrar e buscar projetos.

“Case Study” dinâmico.

Animações de entrada e barras de nível.

Integração com WhatsApp.

Artes abstratas em SVG leves e reutilizáveis.

Estrutura de pastas sugerida
/seu-portfolio
├─ index.html
├─ manutencao.html
├─ /assets
│  ├─ avatar.jpg
│  ├─ logos/...
│  └─ imagens/...
├─ /certificadosecv
│  ├─ cv.pdf                  ← arquivo para o botão “Baixar CV”
│  ├─ certificado-1.pdf
│  ├─ certificado-2.pdf
│  ├─ ...
└─ /js
   └─ main.js                 ← (opcional) extrair o JS do index.html


Dica: se preferir, mantenha tudo em um único index.html. Para projetos maiores, extraia o JS para /js/main.js.

Primeiros passos / Rodar localmente

Opção 1 (mais simples): clique duas vezes em index.html.

Opção 2 (servidor local opcional):

# Python 3
python -m http.server 5173
# depois acesse http://localhost:5173


Não é deploy; é apenas uma forma prática de visualizar com roteamento de arquivo estático.

Layout: visão macro

Grid 2 colunas em telas médias+: sidebar (fixa) à esquerda + conteúdo principal à direita.

Em telas pequenas, tudo empilha (responsivo).

Tema light com detalhes pretos; sombras suaves e bordas com ring-black/10.

Sidebar (cartão à esquerda)

Elementos:

Banner abstrato (SVG sutil).

Avatar com ring coníco.

Nome + Função.

Redes sociais (GitHub, LinkedIn, e-mail).

Botão “Baixar CV”: aponte para /certificadosecv/cv.pdf e adicione download para baixar direto:

<a href="certificadosecv/cv.pdf" download class="...">Baixar CV</a>


Navegação com os itens: Início, Skills, Formações, Projetos, Experiência, Contato (e outros se desejar).
Cada link usa href="#id-da-secao".

Destaque ativo no clique: o JS troca classes Tailwind no item selecionado.

Seção “Sobre mim” + Modal “Saber Mais”

Card principal com elementos abstratos (SVG).

Chips de tecnologias (HTML, CSS, JS, Tailwind).

Botões:

Contato (ancora para #contato).

Saber Mais: abre um modal com conteúdo extenso e scroll interno.

Modal acessível:

role="dialog" e aria-modal="true".

Foco vai para o botão fechar ao abrir; ao fechar, retorna para o acionador.

Fechamento via Overlay e tecla Esc.

Soft Skills & Hard Skills
Soft Skills

Card com 5 itens (Comunicação, Trabalho em Equipe, Empatia, Paciência, Criatividade).

Ícones em SVG, textos objetivos e responsivos.

Entradas animadas com data-animate.

Hard Skills

Chips com tecnologias.

Barras de nível (sem % visível, apenas “Básico/Interm./Avançado”), animadas via IntersectionObserver.
A largura final é controlada por data-progress="NN".

Para adicionar/remover uma skill:

Inclua/remova o chip.

Inclua/remova um bloco com a barra, ajustando data-progress e os rótulos de nível.

Formações (timeline) e Cursos

Formações em formato timeline vertical: cada item é um <li> com:

Bullet centralizado alinhado ao “trilho”.

Título da formação, instituição, período e tags (ex.: “Diploma”, “Front-end”).

Manter a consistência visual do card (ring, sombra, tipografia).

Cursos aparecem abaixo (ou em uma seção “Cursos”) no mesmo design, com:

Título, carga ou ano.

Botão “Ver certificado” (link para certificadosecv/certificado-x.pdf).

Você pode usar grid 2 colunas em telas médias+.

Para inserir mais cursos:

<a href="certificadosecv/certificado-react.pdf" target="_blank"
   class="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-1.5 text-sm shadow-sm hover:shadow">
  Ver certificado
</a>

Projetos (filtros, busca, botões, Case Study)
Estrutura de cada card

data-proj-card para identificação.

Metadados:

data-tags="ui tailwind javascript" — usados nos filtros.

data-title="Nome do Projeto" e data-desc="breve descrição" — usados na busca.

Filtros por categoria

Botões com data-proj-filter (all, ui, javascript, tailwind, etc).

O JS lê o botão ativo e mostra apenas os cards cujas data-tags contêm a categoria.

Busca

Input com data-proj-search.

O JS procura a query em data-title, data-desc e data-tags.

Botões “Live”, “Código” e “Case Study”

Live: link para demo do projeto (se houver).

Código: link para GitHub. Você pode mapear de forma centralizada:

const repoMap = {
  'Landing Page Minimalista': 'https://github.com/usuario/landing-minimal',
  'Dashboard Interativo': 'https://github.com/usuario/dashboard-interativo',
  'Portfólio Responsivo': 'https://github.com/usuario/portfolio-responsivo'
};


O script encontra o card pelo data-title e injeta o href no botão “Código”.

Case Study: botão que abre um modal dinâmico.
No HTML do card, inclua um bloco oculto (<div data-case id="case-..."> ... </div>) com o conteúdo do estudo de caso; o JS carrega esse HTML no modal.

Adicionar um projeto novo (passo a passo):

Duplique um <article data-proj-card ...> e ajuste data-tags, data-title, data-desc.

Atualize os chips tecnológicos do card.

(Opcional) Coloque um bloco data-case com conteúdo do case.

No repoMap, adicione um par “Título do card” → URL do repositório.

Pronto: filtros, busca e modal já funcionarão.

Experiência (linha do tempo)

Estrutura similar às Formações: lista ordenada com trilho à esquerda.

Bullets alinhados no mesmo x do trilho (left-4 -translate-x-1/2) para ficar centralizado.

Cada card inclui cargo, empresa/local, período, descrição, chips e um <details> com “Principais realizações”.

Para adicionar experiências:

Duplique um <li> completo e ajuste os textos.

Mantenha os details para conteúdo expansível.

Contato (WhatsApp + e-mail)
Cartão informativo

Mostra e-mail e links de redes.

Botão “Falar no WhatsApp” abre conversa com uma mensagem padrão:

https://wa.me/55SEUDDDSEUNUMERO?text=Olá!%20Vim%20pelo%20seu%20portfólio.

Formulário que abre WhatsApp

#whatsForm com campos Nome, E-mail (opcional), Assunto (opcional) e Mensagem.

Ao enviar, o JS valida campos, monta o texto e abre a URL do WhatsApp em nova aba:

const url = `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(mensagem)}`;
window.open(url, '_blank');


Troque WHATS_NUMBER (DDI + DDD + número, apenas dígitos).

Opcional: Há também um exemplo de formulário “mailto:” (abre o cliente de e-mail do usuário). Use encodeURIComponent para montar o corpo do e-mail corretamente.

Página de manutenção

Arquivo manutencao.html:

Mesmo design (tema light, preto & branco, SVG abstrato).

Imagem/ícone central.

Texto: “Está página está em manutenção ou ainda não existe, volte em breve! Desculpa este erro”.

Botão Voltar ao início com href="../index.html".

Para usar sua imagem:

<img src="assets/imagens/em-manutencao.png" alt="Página em manutenção" class="w-24 h-24 object-contain">

Acessibilidade

Rótulos e ícones com aria-hidden="true" quando decorativos.

Modal com role="dialog", aria-modal="true", foco enviado ao botão fechar; fecha com Esc.

Links e botões com textos/aria-label descritivos (ex.: “Ver código no GitHub”).

Contraste: cores escuras sobre fundo claro; foco visível em elementos interativos.

Navegação por teclado: evite tabindex desnecessário; onde usar, mantenha coerência.

Melhoria opcional: implementar “focus trap” no modal para manter o foco dentro dele enquanto aberto.

Animações e efeitos

IntersectionObserver revela elementos com classes opacity-0 translate-y-2 → opacity-100 translate-y-0.

Barras de nível leem data-progress e aplicam style.width com transição.

Preferências do usuário: quando prefers-reduced-motion: reduce estiver ativo, as animações são evitadas e o estado final é aplicado.

Como personalizar rapidamente

Identidade

Troque nome e título na sidebar.

Substitua o avatar (assets/avatar.jpg) e ajuste o src.

Links & redes

Atualize href do GitHub, LinkedIn, e-mail, WhatsApp.

CV

Coloque seu cv.pdf em /certificadosecv/ e garanta:

<a href="certificadosecv/cv.pdf" download class="...">Baixar CV</a>


Projetos

Duplique cards, ajuste data-tags, data-title, data-desc.

Atualize repoMap no JS para apontar para seus repositórios.

Skills

Ajuste chips e barras em “Hard Skills”.

Em “Soft Skills”, troque descrições conforme seu perfil.

Formações & Cursos

Inclua/edite itens; para certificados, coloque PDFs em /certificadosecv e aponte os links.

Cores e estilo

Mantendo Tailwind via CDN, você pode ajustar classes utilitárias diretamente (sem build).

Dicas de performance

Imagens otimizadas (use .webp quando possível).

loading="lazy" em <img> abaixo da dobra.

SVGs inline são leves; mantenha simples.

Remova JS não usado. Se crescer, extraia para /js/main.js.

Solução de problemas (FAQ)

1) Meu botão “Código” não abre o repositório certo
→ Verifique se o data-title do card é exatamente igual à chave no repoMap. É case-sensitive.

2) O mailto não funciona / quebra linhas
→ Sempre use encodeURIComponent na montagem do body. Para quebras de linha use \n dentro da string, antes do encode.

3) O WhatsApp abre sem o texto completo
→ Confirme WHATS_NUMBER (somente dígitos) e aplique encodeURIComponent no texto final.

4) As animações não disparam
→ O IntersectionObserver só roda se suportado e se prefers-reduced-motion não estiver ativo.
→ Confira se os elementos possuem data-animate e começam com opacity-0 translate-y-2.

5) “Baixar CV” não baixa
→ Garanta que existe certificadosecv/cv.pdf e que o link tem download.
→ Se estiver rodando de arquivo local, alguns navegadores restringem caminhos fora da pasta. Mantenha o arquivo na mesma estrutura indicada.