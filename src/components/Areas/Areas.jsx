import { useReveal } from "../../hooks/useReveal";

const aboutFoto = "/images/aboutFoto.jpeg";

const planet1 = "/images/planets.png";
const planet2 = "/images/planets2.png";
const star = "/images/stars.png";
const scribble = "/images/kids.png";

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
            O Centro Social São Mateus atua em Guariba promovendo acolhimento,
            inclusão social e desenvolvimento humano para crianças e famílias em
            situação de vulnerabilidade. Nosso compromisso é criar oportunidades reais
            por meio da educação, do cuidado e do fortalecimento dos vínculos comunitários.
          </p>

          <p>
            Mais do que atender necessidades imediatas, buscamos construir caminhos
            para um futuro mais digno, oferecendo apoio, aprendizado e esperança para cada criança atendida.
            Cada projeto desenvolvido pelo Centro Social São Mateus tem como propósito transformar vidas e contribuir
            para uma comunidade mais justa, humana e solidária.
          </p>
        </div>

      </div>
    </section>
  );
}