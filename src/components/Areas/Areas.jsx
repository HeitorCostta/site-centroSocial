import { useReveal } from "../../hooks/useReveal";

import aboutFoto from "../../../public/images/aboutFoto.jpg";

import planet1 from "../../../public/images/planets.png";
import planet2 from "../../../public/images/planets2.png";
import star from "../../../public/images/stars.png";
import scribble from "../../../public/images/kids.png";

export default function Areas() {
  const [ref, visible] = useReveal();

  return (
    <section className="areas" id="about" ref={ref}>

      {/* ELEMENTOS DECORATIVOS */}
      <img src={planet1} alt="" className="decor decor-planet-1" />
      <img src={planet2} alt="" className="decor decor-planet-2" />
      <img src={star} alt="" className="decor decor-star" />
      <img src={scribble} alt="" className="decor decor-scribble" />

      <div className={`about-container ${visible ? "visible" : ""}`}>

        {/* IMAGEM */}
        <div className="about-image">
          <img src={aboutFoto} alt="Centro Social" />
        </div>

        {/* CONTEÚDO */}
        <div className="about-content">
          <span className="about-tag">
            Conheça o Centro Social
          </span>

          <h2>
            Transformando vidas através de ações sociais e desenvolvimento comunitário
          </h2>

          <p>
            O Centro Social atua diretamente na comunidade, promovendo inclusão,
            educação e apoio às famílias em situação de vulnerabilidade.
            Nosso trabalho é voltado para gerar oportunidades reais,
            fortalecendo vínculos e construindo um futuro mais justo
            e sustentável para todos.
          </p>

          <p>
            Com projetos voltados para crianças, buscamos não apenas atender
            necessidades imediatas, mas também criar caminhos para o crescimento
            pessoal e social.
          </p>
        </div>

      </div>
    </section>
  );
}