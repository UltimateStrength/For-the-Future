# For The Future — Site do Grêmio Estudantil JRC

Site institucional desenvolvido para a **Chapa Nº1 — For The Future**, vencedora das eleições do Grêmio Estudantil do Colégio Estadual João Ribeiro de Camargo (JRC) em outubro de 2023.

O projeto foi desenvolvido como freelance mas nunca chegou a ser utilizado pela chapa em produção. O conteúdo foi posteriormente preenchido para fins de portfólio, com base nas publicações reais do Instagram [@gremio_jrc](https://www.instagram.com/gremio_jrc/).

**→ [Ver site ao vivo (GitHub Pages)](https://ultimatestrength.github.io/For-the-Future/home.html)**

---

## Sobre o projeto

A chapa precisava de um site simples para apresentar a equipe, listar propostas e divulgar novidades da gestão. O resultado é um site estático com 4 páginas, identidade visual própria e algumas interações em JavaScript.

**Páginas:**
- `home.html` — apresentação da chapa e resumo dos principais eventos da gestão
- `proposals.html` — propostas da For The Future para o JRC
- `aboutus.html` — equipe completa com foto, cargo e descrição de cada membro
- `news.html` — linha do tempo dos eventos e comunicados da gestão 2023/2024

---

## Tecnologias

HTML, CSS e JavaScript puros — sem frameworks, sem dependências externas.

---

## Funcionalidades

- Layout responsivo com breakpoint para mobile (≤600px)
- Menu hambúrguer no mobile via JavaScript
- Toggle de foto nos cards da equipe com animação de rotação
- Modal expandido ao clicar em um membro da equipe
- Scroll reveal: elementos entram com fade + slide ao aparecerem na viewport
- Shadow no header ativado ao scrollar
- Underline animado nos links de navegação ativos
- Smooth scroll para âncoras internas
- Ano dinâmico no footer via `Date`
- Scrollbar customizada via `::-webkit-scrollbar`

---

## Estrutura

```
/
├── home.html
├── proposals.html
├── aboutus.html
├── news.html
├── mainstyle.css
└── assets/
    ├── images/
    │   ├── shortlogo.png
    │   ├── mascote.png
    │   ├── menubar.png
    │   ├── p1.jpg ... p12.jpg   (fotos principais dos membros)
    │   └── d1.jpg ... d12.jpg   (fotos alternativas — toggle)
    └── styles/
    │   ├── header.css
    │   ├── content.css
    │   ├── footer.css
    │   ├── scrollbar.css
    │   └── persons.css
    └── scripts/
        ├── navMenu.js
        ├── navScroll.js
        ├── persons.js
        ├── scrollreveal.js
        └── inspectblockfilter.js
```

---

## Contexto real

A gestão 2023/2024 da For The Future foi ativa: organizou o Interclasse de Verão, a JRC Gallery (concurso de artes), o Color War, o Volleyball JRC, campanhas de doação para o RS, celebração do Mês do Orgulho, posicionamento contra militarização escolar e representação em evento estadual no Palácio Iguaçu. Todo esse histórico está documentado na página de novidades do site e nas publicações do [@gremio_jrc](https://www.instagram.com/gremio_jrc/).

---

## Desenvolvido por

[Marcos (Ulti)](https://github.com/UltimateStrength)