import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useNavScroll } from "../../hooks/useNavScroll";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const scrolled = useNavScroll(60);
  const [open, setOpen] = useState(false);

  // Função inteligente que decide se faz scroll ou se muda de página primeiro
  const handleNavClick = (id) => {
    if (pathname !== "/") {
      // Se não estiver na Home, navega para a Home primeiro
      navigate("/");
      
      // Aguarda um pequeno instante para a página carregar e faz o scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Se já estiver na Home, apenas faz o scroll suave
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpen(false); // Fecha o menu mobile se estiver aberto
  };

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        
<div className="nav-logo">

  <Link
    to="/"
    className="nav-logo-link"
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  >
    <span className="logo-main">
      Centro Social
    </span>

    <span className="logo-dot">
      
    </span>

    <span className="logo-accent">
      São Mateus
    </span>
  </Link>

</div>
        {/* Links Desktop */}
        <nav className="nav-links">
          <button onClick={() => handleNavClick("about")} className="nav-link">
            Sobre
          </button>
          <button onClick={() => handleNavClick("conheca")} className="nav-link">
            Conheça-nos
          </button>
          <button onClick={() => handleNavClick("projects")} className="nav-link">
            Projetos
          </button>
          
          {/* Link para a página de Transparência */}
              <Link 
                to="/transparency" 
                className="nav-link"
              >
                Transparência
              </Link>

          <button onClick={() => handleNavClick("cta")} className="nav-link nav-btn-doar">
            Doar
          </button>
        </nav>

        {/* Botão de Menu Mobile */}
      <button
        className="nav-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
      >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="nav-mobile">
          <button onClick={() => handleNavClick("about")} className="nav-mobile-link">
            Sobre
          </button>
          <button onClick={() => handleNavClick("conheca")} className="nav-mobile-link">
            Conheça-nos
          </button>
          <button onClick={() => handleNavClick("projects")} className="nav-mobile-link">
            Projetos
          </button>
          
          <Link 
            to="/transparency" 
            className="nav-mobile-link" 
            onClick={() => setOpen(false)}
          >
            Transparência
          </Link>

          <button onClick={() => handleNavClick("cta")} className="nav-mobile-link">
            Doar
          </button>
        </div>
      )}
    </header>
  );
}