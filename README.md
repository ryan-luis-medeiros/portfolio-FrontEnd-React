# Portfólio Profissional em React

Portfólio profissional em React com páginas, componentes reutilizáveis e deploy em produção.

## 📋 Descrição

Este projeto é um portfólio responsivo e profissional desenvolvido com React e Vite, apresentando projetos, habilidades e formas de contato. Segue as melhores práticas de desenvolvimento web, incluindo acessibilidade, SEO básico e componentes reutilizáveis.

## 🚀 Tecnologias

- **React 18** — Biblioteca JavaScript para UI
- **Vite** — Build tool rápido e moderno
- **React Router** — Roteamento de páginas
- **CSS Modular** — Estilos organizados e reutilizáveis

## 📁 Estrutura do Projeto

```
portfolio-react/
├── src/
│   ├── assets/           # Imagens, ícones e recursos estáticos
│   ├── components/       # Componentes reutilizáveis (Header, Footer, ProjectCard)
│   ├── pages/            # Páginas da aplicação (Home, Projetos, Contato)
│   ├── styles/           # Arquivos CSS globais e módulos
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Ponto de entrada
├── public/               # Arquivos públicos (favicon, metatags)
├── docs/                 # Documentação adicional
├── package.json          # Dependências e scripts
├── .gitignore            # Arquivos ignorados pelo Git
├── LICENSE               # Licença MIT
└── README.md             # Este arquivo
```

## 🛠️ Instalação

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn

### Passos

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/portfolio-react.git
cd portfolio-react
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

## 📖 Uso

### Desenvolvimento

```bash
npm run dev
```

Inicia o servidor de desenvolvimento com hot reload.

### Build para Produção

```bash
npm run build
```

Gera a versão otimizada em `dist/`.

### Preview da Build

```bash
npm run preview
```

Visualiza a versão de produção localmente.

## 🌐 Páginas

- **Home** — Apresentação e resumo profissional
- **Projetos** — Galeria de projetos com descrição, stack e links
- **Contato** — Formulário de contato e redes sociais

## 🧩 Componentes

- **Header** — Navegação principal e logo
- **Footer** — Rodapé com links e informações
- **ProjectCard** — Card reutilizável para exibir projetos

## ♿ Acessibilidade

- Uso de tags semânticas HTML5
- Atributos `alt` em todas as imagens
- Contraste de cores adequado
- Navegação por teclado

## 🔍 SEO

- Metatags no `index.html`
- Favicon configurado
- Descrição e palavras-chave

## 🚀 Deploy

### GitHub Pages

1. Atualize `vite.config.js` com `base: '/portfolio-react/'`
2. Execute: `npm run build`
3. Faça push para a branch `gh-pages`

### Vercel

1. Conecte seu repositório no [Vercel](https://vercel.com)
2. Vercel detectará automaticamente a configuração Vite
3. Deploy automático a cada push para `main`

## 🤝 Como Contribuir

Contribuições são bem-vindas! Siga o fluxo abaixo:

1. **Fork** o repositório
2. **Crie uma branch** para sua feature: `git checkout -b feature/minha-feature`
3. **Commit** suas mudanças: `git commit -m "feat: descrição da feature"`
4. **Push** para a branch: `git push origin feature/minha-feature`
5. **Abra um Pull Request** referenciando a issue relacionada

### Padrões de Commit

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` documentação
- `style:` formatação de código
- `refactor:` refatoração sem mudança de funcionalidade

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## 👤 Autor

**Seu Nome**

- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [seu-perfil](https://linkedin.com/in/seu-perfil)
- Email: seu.email@exemplo.com

## 📞 Suporte

Para dúvidas ou sugestões, abra uma [issue](https://github.com/seu-usuario/portfolio-react/issues).

---

