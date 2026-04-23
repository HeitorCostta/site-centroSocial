export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          
          {/* Marca e Redes Sociais */}
          <div className="footer-brand">
            <h3>Centro Social São Mateus</h3>
            <p>
              Transformando realidades através da solidariedade. Sua participação é o que nos move.
            </p>
            <div className="socials">
              {/* Ícones SVG diretos (Online/Inline) */}
              <a href="https://instagram.com" target="_blank" className="social-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://facebook.com" target="_blank" className="social-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://youtube.com" target="_blank" className="social-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Ações e Contato */}
          <div className="footer-actions">
            <div className="footer-col">
              <h4>Faça a Diferença</h4>
              <ul>
                <li><a href="#cta">Doar Agora</a></li>
                <li><a href="#">Ser Voluntário</a></li>
                <li><a href="#">Parcerias</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Fale Conosco</h4>
              <ul className="contact-list">
                <li>📞 (16) 3251-6001</li>
                <li>✉️ Socialsaomateus@gmail.com</li>
              </ul>
            </div>
          </div>

          {/* Mapa e Endereço */}
          <div className="footer-map">
            <h4>Nossa Sede</h4>
            <div className="map-canvas">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.444390076728!2d-48.2324706!3d-21.391696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b942358f2f4553%3A0x6b1f24d776891636!2sR.%20Jorn.%20Alexandre%20da%20Costa%20Roma%2C%20400%20-%20Nova%20Guariba%2C%20Guariba%20-%20SP%2C%2014840-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000" 
                width="100%" 
                height="150" 
                style={{ border: 0, borderRadius: '12px' }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
            <div className="address-box">
              <p>📍 Rua Jornalista Alexandre da Costa Roma, 400</p>
              <p>Nova Guariba – Guariba – SP</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Centro Social São Mateus. Criado por <b>Heitor Costa</b>.</p>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp (Ícone SVG online) */}
      <a 
        href="https://wa.me/5516996156433" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 448 512" width="30" height="30" fill="currentColor">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.3-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.7 5.5-9.4 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>
    </>
  );
}