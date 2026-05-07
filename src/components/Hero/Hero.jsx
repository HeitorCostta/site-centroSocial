import { scrollToId } from "../../utils/scroll";
import logo from "../../../public/images/logo.png"
import { Link } from "react-router-dom";

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

        <Link to="/doacao" className="btn-primary">
          ❤️ Transforme Vidas
        </Link>

      </div>

      </div>
    </section>
  );
}