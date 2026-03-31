import { useState } from 'react'
import './Contato.css'

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode adicionar lógica para enviar o formulário
    console.log('Formulário enviado:', formData)
    setSubmitted(true)
    setFormData({ nome: '', email: '', assunto: '', mensagem: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="contato">
      <h1>Entre em Contato</h1>
      <p className="intro">
        Tem alguma pergunta ou gostaria de trabalhar juntos? 
        Envie uma mensagem e entrarei em contato em breve!
      </p>

      <div className="contato-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder="Seu nome"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu.email@exemplo.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="assunto">Assunto</label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              required
              placeholder="Assunto da mensagem"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
              placeholder="Sua mensagem aqui..."
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">Enviar Mensagem</button>

          {submitted && (
            <div className="success-message">
              ✓ Mensagem enviada com sucesso!
            </div>
          )}
        </form>

        <div className="contact-info">
          <h2>Informações de Contato</h2>
          <div className="info-item">
            <h3>Email</h3>
            <a href="mailto:seu.email@exemplo.com">seu.email@exemplo.com</a>
          </div>
          <div className="info-item">
            <h3>Redes Sociais</h3>
            <div className="social-links">
              <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://twitter.com/seu-usuario" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
          <div className="info-item">
            <h3>Localização</h3>
            <p>Sua Cidade, Seu Estado, Brasil</p>
          </div>
        </div>
      </div>
    </div>
  )
}
