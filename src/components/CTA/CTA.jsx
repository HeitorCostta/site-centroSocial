import { Link } from "react-router-dom";
const foto = "/images/fotoFooter.jpeg";

export default function CTA() {
  return (
    <section className="cta" id="cta">

      {/* 1. Imagem */}
      <img
        src={foto}
        alt="Projeto"
        className="cta-bg"
      />

      {/* 2. Overlay */}
      <div className="cta-overlay"></div>

      {/* 3. Conteúdo */}
      <div className="cta-content">

        <p>
          Sua contribuição transforma vidas.
          Faça parte dessa história.
        </p>

        <Link to="/doacao" className="btn-donate">
          Apoie esta Causa
        </Link>

      </div>

    </section>
  );
}