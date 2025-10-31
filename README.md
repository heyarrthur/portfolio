# README — Portfólio (HTML + CSS + JS + Tailwind)

Um portfólio **leve, responsivo e acessível** em tema **claro** com detalhes **preto & branco** e **artes abstratas**, construído com **HTML**, **CSS**, **JavaScript vanilla** e **Tailwind via CDN**.  
Este guia explica **passo a passo** como o projeto foi estruturado e como **personalizar** cada parte — **sem** abordar deploy.

---

## Sumário

1. [Visão geral](#visão-geral)  
2. [Stack e decisões de design](#stack-e-decisões-de-design)  
3. [Estrutura de pastas sugerida](#estrutura-de-pastas-sugerida)  
4. [Primeiros passos / Rodar localmente](#primeiros-passos--rodar-localmente)  
5. [Layout: visão macro](#layout-visão-macro)  
6. [Sidebar (cartão à esquerda)](#sidebar-cartão-à-esquerda)  
7. [Seção “Sobre mim” + Modal “Saber Mais”](#seção-sobre-mim--modal-saber-mais)  
8. [Soft Skills & Hard Skills](#soft-skills--hard-skills)  
9. [Formações (timeline) e Cursos](#formações-timeline-e-cursos)  
10. [Projetos (filtros, busca, botões, Case Study)](#projetos-filtros-busca-botões-case-study)  
11. [Experiência (linha do tempo)](#experiência-linha-do-tempo)  
12. [Contato (WhatsApp + e-mail)](#contato-whatsapp--e-mail)  
13. [Página de manutenção](#página-de-manutenção)  
14. [Acessibilidade](#acessibilidade)  
15. [Animações e efeitos](#animações-e-efeitos)  
16. [Como personalizar rapidamente](#como-personalizar-rapidamente)  
17. [Dicas de performance](#dicas-de-performance)  
18. [Solução de problemas (FAQ)](#solução-de-problemas-faq)  
19. [Licença](#licença)

---

## Visão geral

O projeto foca em:
- **Clareza visual** (tema light, alto contraste controlado).
- **Acessibilidade** (navegação por teclado, rótulos claros, aria-attributes onde relevante).
- **Componentes reutilizáveis** com Tailwind.
- **JS simples** para filtros, busca, modais e animações por _IntersectionObserver_.

---

## Stack e decisões de design

- **HTML semântico** com `<main>`, `<nav>`, `<section>`, `<article>`, etc.
- **Tailwind via CDN** para agilidade e consistência visual.
- **JavaScript vanilla** para:
  - Destacar item ativo do menu.
  - Abrir/fechar modais com foco gerenciado.
  - Filtrar e buscar projetos.
  - “Case Study” dinâmico.
  - Animações de entrada e barras de nível.
  - Integração com WhatsApp.
- **Artes abstratas** em **SVG** leves e reutilizáveis.

---

## Estrutura de pastas sugerida

```
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
```

> **Dica:** pode manter tudo em um único `index.html`. Para projetos maiores, extraia o JS para `/js/main.js`.

---

## Primeiros passos / Rodar localmente

- **Opção 1 (simples):** abra o `index.html` no navegador (duplo clique).
- **Opção 2 (servidor local opcional):**
  ```bash
  # Python 3
  python -m http.server 5173
  # acesse http://localhost:5173
  ```

> Isto não é deploy; é apenas uma forma prática de visualizar arquivos estáticos.

---

## Layout: visão macro

- **Grid 2 colunas (md+)**: `sidebar fixa` à esquerda + **conteúdo principal** à direita.  
- Em telas pequenas, os blocos empilham (responsivo).
- **Tema light** com **detalhes pretos**; **sombras suaves** e **bordas** com `ring-black/10`.

---

## Sidebar (cartão à esquerda)

Elementos principais:
- **Banner abstrato** (SVG sutil).
- **Avatar** com _ring_ cônico.
- **Nome + Função**.
- **Redes sociais** (GitHub, LinkedIn, e-mail).
- **Botão “Baixar CV”**: aponte para `/certificadosecv/cv.pdf` e use `download` para baixar direto:
  ```html
  <a href="certificadosecv/cv.pdf" download class="...">Baixar CV</a>
  ```
- **Navegação** com itens: Início, Skills, Formações, Projetos, Experiência, Contato.  
  Cada link usa `href="#id-da-secao"`.

**Destaque ativo**: o JS troca classes Tailwind no item clicado para indicar a aba ativa.

---

## Seção “Sobre mim” + Modal “Saber Mais”

- **Card** com elementos abstratos (SVG).
- **Chips** de tecnologias (HTML, CSS, JS, Tailwind).
- **Botões**:  
  - **Contato** (ancora para `#contato`).  
  - **Saber Mais**: abre um **modal** com conteúdo extenso e **scroll** interno.

**Modal acessível**:
- `role="dialog"` e `aria-modal="true"`.
- Foco vai para o botão fechar ao abrir; ao fechar, retorna para o acionador.
- Fechamento via **Overlay** e tecla **Esc**.

---

## Soft Skills & Hard Skills

### Soft Skills
- Card com **5 itens**: Comunicação, Trabalho em Equipe, Empatia, Paciência, Criatividade.
- Ícones em SVG, textos objetivos e responsivos.
- Entradas animadas com `data-animate`.

### Hard Skills
- **Chips** com tecnologias.
- **Barras de nível** (sem % visível, apenas níveis como “Básico / Interm. / Avançado”).  
  A largura final é controlada por `data-progress="NN"` e animada via `IntersectionObserver`.

Para **adicionar/remover** uma skill:
1. Inclua/remova o **chip**.
2. Inclua/remova um **bloco** com a barra, ajustando `data-progress` e o rótulo de nível.

---

## Formações (timeline) e Cursos

- **Formações** em **linha do tempo vertical**: cada item é um `<li>` com:
  - **Bullet** centralizado alinhado ao “trilho”.
  - **Título**, **instituição**, **período** e **tags** (ex.: “Diploma”, “Front-end”).
- **Cursos** abaixo, **no mesmo design**, com:
  - Título, ano/carga.  
  - **Botão “Ver certificado”** com link para `/certificadosecv/certificado-x.pdf`.

Exemplo de certificado:
```html
<a href="certificadosecv/certificado-react.pdf" target="_blank" rel="noopener"
   class="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-1.5 text-sm shadow-sm hover:shadow">
  Ver certificado
</a>
```

---

## Projetos (filtros, busca, botões, Case Study)

### Estrutura de cada card
- `data-proj-card` para identificação.
- Metadados: `data-tags`, `data-title`, `data-desc` (usados em **filtros** e **busca**).

### Filtros por categoria
- Botões com `data-proj-filter` (`all`, `ui`, `javascript`, `tailwind`, ...).  
- O JS lê o botão **ativo** e mostra apenas os cards cujas `data-tags` contêm a categoria.

### Busca
- Input com `data-proj-search`.  
- O JS procura a **query** em `data-title`, `data-desc` e `data-tags`.

### Botões
- **Live**: para a demo do projeto (se houver).
- **Código (GitHub)**: mapeado pelo título do card via `repoMap`:
  ```js
  const repoMap = {
    'Landing Page Minimalista': 'https://github.com/usuario/landing-minimal',
    'Dashboard Interativo': 'https://github.com/usuario/dashboard-interativo',
    'Portfólio Responsivo': 'https://github.com/usuario/portfolio-responsivo'
  };
  ```
- **Case Study**: botão que abre um **modal** dinâmico.  
  Inclua no card um bloco oculto `<div data-case id="case-...">...</div>`; o JS copia esse HTML para o modal.

**Adicionar um projeto novo**:
1. Duplique um `<article data-proj-card ...>`; ajuste `data-tags`, `data-title`, `data-desc`.
2. Atualize os **chips**.
3. (Opcional) Inclua `data-case` com conteúdo do estudo de caso.
4. No `repoMap`, mapeie `Título → URL do repositório`.
5. Pronto: filtros, busca e modal funcionarão automaticamente.

---

## Experiência (linha do tempo)

- Lista ordenada com “trilho” à esquerda e **bullets** centralizados no trilho (`left-4 -translate-x-1/2`).  
- Cada card inclui **cargo**, **empresa/local**, **período**, **descrição**, **chips** e `<details>` com “Principais realizações”.

Adicionar experiência:
- Duplique um `<li>` e ajuste textos.
- Mantenha a estrutura para consistência visual.

---

## Contato (WhatsApp + e-mail)

### Cartão informativo
- E-mail e links de redes.
- Botão “Falar no WhatsApp” com texto padrão:
  ```
  https://wa.me/55SEUDDDSEUNUMERO?text=Olá!%20Vim%20pelo%20seu%20portfólio.
  ```

### Formulário que abre WhatsApp
- `#whatsForm` com **Nome**, **E-mail (opcional)**, **Assunto (opcional)**, **Mensagem**.
- Valida campos e abre a URL do WhatsApp com mensagem pré-preenchida:
  ```js
  const url = `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
  ```
- **Troque `WHATS_NUMBER`** (DDI + DDD + número, só dígitos).

> Também há exemplo de formulário “mailto:” — use `encodeURIComponent` no corpo.

---

## Página de manutenção

Arquivo `manutencao.html`:
- Mesmo **design** (tema light, preto & branco, SVG abstrato).
- **Imagem/ícone central**.
- Texto: _“Está página está em manutenção ou ainda não existe, volte em breve! Desculpa este erro”_.
- Botão **Voltar ao início** com `href="../index.html"`.

Dica para usar imagem própria:
```html
<img src="assets/imagens/em-manutencao.png" alt="Página em manutenção" class="w-24 h-24 object-contain">
```

---

## Acessibilidade

- Ícones decorativos com `aria-hidden="true"`.
- **Modal** com `role="dialog"`, `aria-modal="true"`, foco no botão fechar; fecha com **Esc**.
- **Links e botões** com textos/`aria-label` descritivos.
- **Contraste** adequado e foco visível.
- **Navegação por teclado**: sem `tabindex` redundantes.

> **Melhoria opcional:** “focus trap” no modal para manter o foco dentro enquanto aberto.

---

## Animações e efeitos

- **IntersectionObserver** para revelar elementos (`opacity-0 translate-y-2` → `opacity-100 translate-y-0`).
- **Barras de nível** leem `data-progress` e aplicam `style.width` com transição suave.
- **Preferências do usuário**: com `prefers-reduced-motion`, animações são evitadas e o estado final é aplicado.

---

## Como personalizar rapidamente

1. **Identidade**: troque **nome** e **título** na sidebar; substitua **avatar**.
2. **Links & redes**: atualize GitHub, LinkedIn, e-mail, WhatsApp.
3. **CV**: coloque `cv.pdf` em `/certificadosecv/` e garanta o link com `download`.
4. **Projetos**: duplique cards, ajuste metadados e `repoMap`.
5. **Skills**: ajuste chips e barras (Hard) e textos (Soft).
6. **Formações & Cursos**: edite itens; aponte certificados para `/certificadosecv/*.pdf`.
7. **Estilo**: altere classes Tailwind conforme preferir (sem build).

---

## Dicas de performance

- **Imagens otimizadas** (use `.webp` quando possível).
- **`loading="lazy"`** em `<img>` abaixo da dobra.
- SVGs simples e reutilizáveis.
- Remova JS não usado; quando crescer, **extraia** para `/js/main.js`.

---

## Solução de problemas (FAQ)

**1) Botão “Código” não abre o repositório certo**  
→ Verifique se o **`data-title`** do card **bate exatamente** com a chave no `repoMap` (case-sensitive).

**2) mailto não funciona / quebras de linha estranhas**  
→ Use `encodeURIComponent` ao montar o `body`. Para quebra de linha, use `\n` antes do encode.

**3) WhatsApp abre sem o texto completo**  
→ Confirme `WHATS_NUMBER` (só dígitos) e aplique `encodeURIComponent` no texto final.

**4) Animações não disparam**  
→ `IntersectionObserver` só roda se suportado e se `prefers-reduced-motion` não estiver ativo.  
→ Cheque `data-animate` nos elementos e estado inicial com `opacity-0 translate-y-2`.

**5) “Baixar CV” não baixa**  
→ Garanta que existe `certificadosecv/cv.pdf` e que o link tem `download`.  
→ Em visualização local, alguns navegadores restringem caminhos fora da pasta. Mantenha a estrutura indicada.

---

## Licença

Uso livre para portfólios pessoais. Para publicar como template público, considere licença **MIT** e atribuição a ícones/ilustrações externas (se usar).

---

**Observação final:** se preferir, a organização do JS pode ser movida para `js/main.js` para facilitar manutenção e minificação futura.
