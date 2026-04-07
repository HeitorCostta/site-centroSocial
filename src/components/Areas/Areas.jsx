import { useReveal } from "../../hooks/useReveal";
import aboutFoto from "../../../public/images/aboutFoto.jpg"

export default function Areas() {
  const [ref, visible] = useReveal();

  return (
    <section className="areas" id="areas" ref={ref}>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      
      <div className={`about-container ${visible ? "visible" : ""}`}>
        
        {/* Imagem */}
        <div className="about-image">
          <img src={aboutFoto} alt="Centro Social" />
        </div>

        {/* Conteúdo */}
        <div className="about-content">
          <span className="about-tag">Conheça o Centro Social</span>
          
          <h2>
            Transformando vidas através de ações sociais e desenvolvimento comunitário
          </h2>

          <p>
            O Centro Social atua diretamente na comunidade, promovendo inclusão,
            educação e apoio às famílias em situação de vulnerabilidade. Nosso
            trabalho é voltado para gerar oportunidades reais, fortalecendo vínculos
            e construindo um futuro mais justo e sustentável para todos.
          </p>

          <p>
            Com projetos voltados para crianças, jovens e adultos, buscamos não
            apenas atender necessidades imediatas, mas também criar caminhos para o
            crescimento pessoal e social.
          </p>
        </div>

      </div>
    </section>
  );
}