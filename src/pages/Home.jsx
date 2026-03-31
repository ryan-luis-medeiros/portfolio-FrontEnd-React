import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Olá! Sou Seu Nome</h1>
          <p className="subtitle">Desenvolvedor Full Stack apaixonado por criar soluções web inovadoras</p>
          <p className="description">
            Com experiência em React, Node.js e desenvolvimento responsivo, 
            transformo ideias em aplicações web de alta qualidade.
          </p>
          <div className="cta-buttons">
            <a href="/projetos" className="btn btn-primary">Ver Meus Projetos</a>
            <a href="/contato" className="btn btn-secondary">Entrar em Contato</a>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>Sobre Mim</h2>
        <div className="about-content">
          <p>
            Sou um desenvolvedor apaixonado por tecnologia com foco em criar experiências 
            de usuário excepcionais. Tenho experiência com as mais modernas tecnologias 
            web e estou sempre buscando aprender e melhorar minhas habilidades.
          </p>
          <div className="skills">
            <h3>Habilidades Principais</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <h4>Frontend</h4>
                <p>React, JavaScript, CSS, HTML, Responsive Design</p>
              </div>
              <div className="skill-item">
                <h4>Backend</h4>
                <p>Node.js, Express, REST APIs, Banco de Dados</p>
              </div>
              <div className="skill-item">
                <h4>Ferramentas</h4>
                <p>Git, GitHub, VS Code, Figma, DevTools</p>
              </div>
              <div className="skill-item">
                <h4>Metodologias</h4>
                <p>Agile, Clean Code, TDD, Acessibilidade</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
