import { scrollToId } from "../../utils/scroll";
import logo from "../../../public/images/logo.png"

export default function Hero() {
  return (
    <section className="hero" id="hero">

      {/* overlay */}
      <div className="hero-overlay" />

      <div className="hero-content">

        {/* LOGO SEPARADO */}
        <img
          src={logo}
          alt="Centro Social São Mateus"
          className="hero-logo"
        />

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