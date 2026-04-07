import { PROJECTS } from "../../data/content";
import { useReveal } from "../../hooks/useReveal";

export default function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section className="projects" id="projects" ref={ref}>
      
      <div className={`section-header ${visible ? "visible" : ""}`}>
        <span className="section-tag">Projetos</span>
        <h2>Nossas Iniciativas</h2>
        <p>
          Descubra alguns dos projetos que estão transformando comunidades e criando oportunidades reais.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <div key={index} className="project-card">
            
            <div
              className="project-image"
              style={{ background: project.bg }}
            >
              {project.emoji}
            </div>

            <div className="project-content">
              <span className="project-tag">{project.tag}</span>

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              <button className="btn-sm">
                Saiba Mais →
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}