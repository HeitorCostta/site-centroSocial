import { scrollToId } from "../../utils/scroll";
import logo from "../../../public/images/logo.png"

export default function Hero() {
  return (
    <section className="hero" id="hero">

      {/* overlay */}
      <div className="hero-overlay" />

      <div className="container hero-content">

        {/* LOGO SEPARADO */}
        <img
          src={logo}
          alt="Centro Social São Mateus"
          className="hero-logo"
        />

        <p className="hero-subtitle">
          Capacitando comunidades por meio da educação, emprego, saúde e infraestrutura — gerando mudanças reais e duradouras.
        </p>

        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={() => scrollToId("doacao")}
          >
            ❤️ Doar Agora
          </button>
        </div>

      </div>
    </section>
  );
}