import foto from "../../../public/images/SaoMateus.png";

export default function CTA() {
  return (
    <section className="cta" id="cta">
      {/* 1. A Imagem */}
      <img src={foto} alt="Fachada do Projeto Social" className="cta-bg" />
      
      {/* 2. O Escurecimento (Overlay) */}
      <div className="cta-overlay"></div>

      {/* 3. O Texto e Botão */}
      <div className="cta-content">
        <h2>Ajude o Projeto</h2>
        <p>Sua contribuição transforma vidas. Faça parte dessa história.</p>
        <button className="btn-donate"> Doar Agora</button>
      </div>
    </section>
  );
}