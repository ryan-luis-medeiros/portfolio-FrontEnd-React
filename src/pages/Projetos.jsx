import ProjectCard from '../components/ProjectCard'
import './Projetos.css'

export default function Projetos() {
  const projects = [
    {
      id: 1,
      title: 'Portfólio Profissional em React',
      description: 'Um portfólio responsivo e moderno desenvolvido com React e Vite, apresentando projetos, habilidades e formas de contato.',
      stack: ['React', 'Vite', 'CSS', 'React Router'],
      githubLink: 'https://github.com/seu-usuario/portfolio-react',
      deployLink: 'https://seu-portfolio.vercel.app'
    },
    {
      id: 2,
      title: 'API REST para Gerenciamento de Biblioteca',
      description: 'Uma API robusta desenvolvida com Node.js e Express para gerenciar livros, autores e empréstimos com CRUD completo.',
      stack: ['Node.js', 'Express', 'Jest', 'REST API'],
      githubLink: 'https://github.com/seu-usuario/biblioteca-api',
      deployLink: 'https://biblioteca-api.herokuapp.com'
    },
    {
      id: 3,
      title: 'Aplicação de Tarefas com React',
      description: 'Um gerenciador de tarefas interativo com funcionalidades de criar, editar, deletar e marcar tarefas como concluídas.',
      stack: ['React', 'Context API', 'LocalStorage', 'CSS Modules'],
      githubLink: 'https://github.com/seu-usuario/todo-app',
      deployLink: 'https://todo-app-seu-usuario.vercel.app'
    }
  ]

  return (
    <div className="projetos">
      <h1>Meus Projetos</h1>
      <p className="intro">
        Aqui estão alguns dos meus projetos mais recentes. Cada um demonstra minha experiência 
        com diferentes tecnologias e práticas de desenvolvimento.
      </p>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            stack={project.stack}
            githubLink={project.githubLink}
            deployLink={project.deployLink}
          />
        ))}
      </div>
    </div>
  )
}
