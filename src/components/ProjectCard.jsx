import './ProjectCard.css'

export default function ProjectCard({ title, description, stack, githubLink, deployLink, image }) {
  return (
    <article className="project-card">
      {image && (
        <div className="project-image">
          <img src={image} alt={`Imagem do projeto ${title}`} />
        </div>
      )}
      <div className="project-content">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        {stack && stack.length > 0 && (
          <div className="stack">
            <strong>Stack:</strong>
            <div className="tags">
              {stack.map((tech, index) => (
                <span key={index} className="tag">{tech}</span>
              ))}
            </div>
          </div>
        )}
        <div className="project-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-github">
              GitHub
            </a>
          )}
          {deployLink && (
            <a href={deployLink} target="_blank" rel="noopener noreferrer" className="btn btn-deploy">
              Ver Deploy
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
