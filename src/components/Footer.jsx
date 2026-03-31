import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; {currentYear} Seu Nome. Todos os direitos reservados.</p>
          <div className="social-links">
            <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              GitHub
            </a>
            <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="mailto:seu.email@exemplo.com" aria-label="Email">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
