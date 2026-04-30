import { useState } from "react";
import { useNavScroll } from "../../hooks/useNavScroll";

export default function Navbar() {
  const scrolled = useNavScroll(60);
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
   <header className="nav">
      <div className="nav-inner">

        {/* Links Desktop */}
        <nav className="nav-links">
          <button onClick={() => scrollTo("about")} className="nav-link">
            Sobre
          </button>
          <button onClick={() => scrollTo("areas")} className="nav-link">
            Atividades
          </button>
          <button onClick={() => scrollTo("projects")} className="nav-link">
            Projetos
          </button>
          <button onClick={() => scrollTo("cta")} className="nav-link">
            Doar
          </button>
        </nav>

        {/* Botão Mobile */}
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="nav-mobile">
          <button onClick={() => scrollTo("about")} className="nav-mobile-link">
            Sobre
          </button>
          <button onClick={() => scrollTo("areas")} className="nav-mobile-link">
            Atividades
          </button>
          <button onClick={() => scrollTo("projects")} className="nav-mobile-link">
            Projetos
          </button>
          <button onClick={() => scrollTo("cta")} className="nav-mobile-link">
            Doar
          </button>
        </div>
      )}
    </header>
  );
}