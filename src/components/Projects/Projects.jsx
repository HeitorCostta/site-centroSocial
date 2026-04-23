import { PROJECTS } from "../../data/content";
import { useReveal } from "../../hooks/useReveal";

export default function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section className="projects" id="projects" ref={ref}>
      
      {/* HEADER */}
      <div className={`section-header ${visible ? "visible" : ""}`}>
        <div className="section-divider"></div>

        <h2>Nossas Atividades</h2>

        <p>
          Conheça algumas das atividades que ajudam no desenvolvimento das crianças
          e fortalecem a comunidade.
        </p>
      </div>

      {/* GRID */}
      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <div key={index} className="project-card">

            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
            </div>

            <div className="project-content">
              <span className="project-tag">{project.tag}</span>

              <h3>{project.title}</h3>

              <p>{project.desc}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}