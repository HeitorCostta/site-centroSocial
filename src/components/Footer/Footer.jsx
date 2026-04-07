import { FOOTER_LINKS, SOCIAL_ICONS } from "../../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-container">

        {/* Marca */}
        <div className="footer-brand">
          <h3>Centro Social São Mateus</h3>
          <p>
            Construindo um futuro melhor por meio da educação, saúde e oportunidades.
            Juntos, podemos transformar vidas.
          </p>

          <div className="socials">
            {SOCIAL_ICONS.map((icon, index) => (
              <span key={index} className="social-icon">
                {icon}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          
          <div>
            <h4>Programas</h4>
            <ul>
              {FOOTER_LINKS.programs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Organização</h4>
            <ul>
              {FOOTER_LINKS.organization.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Receba atualizações e histórias de impacto.</p>

          <div className="newsletter-box">
            <input type="email" placeholder="Seu email" />
            <button>→</button>
          </div>

          <p className="footer-contact">
            📍 São Paulo, Brasil <br />
            ✉️ contato@hopeforward.org
          </p>
        </div>

      </div>

      {/* Rodapé inferior */}
      <div className="footer-bottom">
        <p>© 2026 Heitor Costa. Todos os direitos reservados.</p>
      </div>

    </footer>
  );
}