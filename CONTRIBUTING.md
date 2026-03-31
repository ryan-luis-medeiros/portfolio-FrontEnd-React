# Guia de Contribuição

Obrigado por considerar contribuir para o Portfólio React! Este documento fornece diretrizes e instruções para contribuir.

## 🚀 Como Começar

### 1. Fork e Clone

```bash
# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/seu-usuario/portfolio-react.git
cd portfolio-react

# Adicione o repositório original como upstream
git remote add upstream https://github.com/usuario-original/portfolio-react.git
```

### 2. Crie uma Branch

```bash
# Atualize a branch main
git checkout main
git pull upstream main

# Crie uma branch para sua feature
git checkout -b feature/descricao-curta
```

**Padrão de nomes:**
- `feature/nome-da-feature` — para novas funcionalidades
- `fix/nome-do-bug` — para correções
- `docs/nome-da-doc` — para documentação
- `refactor/nome-da-refatoracao` — para refatorações

### 3. Faça suas Mudanças

- Siga o estilo de código existente
- Use componentes reutilizáveis
- Adicione comentários em código complexo
- Teste suas mudanças localmente

### 4. Commit com Conventional Commits

```bash
git add .
git commit -m "feat: adiciona novo componente ProjectCard"
```

**Tipos de commit:**
- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` documentação
- `style:` formatação, sem mudança de lógica
- `refactor:` refatoração de código
- `test:` adição ou atualização de testes
- `chore:` tarefas de build, dependências, etc.

### 5. Push e Pull Request

```bash
git push origin feature/descricao-curta
```

Abra um Pull Request no GitHub com:
- Título claro e descritivo
- Descrição detalhada das mudanças
- Referência à issue (ex.: "Closes #5")
- Checklist de verificação

## 📋 Checklist de Pull Request

Antes de submeter, certifique-se de:

- [ ] Código segue o estilo do projeto
- [ ] Testes passam (`npm run test`)
- [ ] Build passa (`npm run build`)
- [ ] README atualizado (se necessário)
- [ ] Commits seguem Conventional Commits
- [ ] Sem console.log ou código de debug
- [ ] Acessibilidade verificada

## 🎯 Padrões de Código

### Componentes React

```jsx
// Nomes em PascalCase
export function ProjectCard({ title, description, stack, links }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* ... */}
    </article>
  );
}
```

### Estilos

- Use CSS Modules ou CSS-in-JS
- Nomes de classes em kebab-case
- Variáveis CSS para cores e espaçamento

### Acessibilidade

- Use tags semânticas (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- Adicione `alt` em todas as imagens
- Use `aria-label` quando necessário
- Teste navegação por teclado

## 🐛 Reportando Bugs

Ao reportar um bug, inclua:

- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado
- Comportamento atual
- Screenshots (se aplicável)
- Ambiente (navegador, SO, versão do Node)

## 💡 Sugestões de Melhorias

Sugestões são bem-vindas! Abra uma issue com:

- Descrição clara da melhoria
- Justificativa
- Exemplos ou mockups (se aplicável)

## 📚 Recursos Úteis

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/)

## ❓ Dúvidas?

Abra uma issue com a tag `question` ou entre em contato conosco.

---

**Obrigado por contribuir! 🎉**
