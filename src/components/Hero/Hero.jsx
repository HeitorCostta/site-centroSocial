import { scrollToId } from "../../utils/scroll";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      
      {/* Overlay de fundo */}
      <div className="hero-overlay" />

      <div className="container hero-content">
        
        <p className="hero-subtitle">
          Capacitando comunidades por meio da educação, emprego, saúde e infraestrutura — gerando mudanças reais e duradouras.
        </p>

        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={() => alert("Redirecionando para a página de doação")}
          >
            ❤️ Doar Agora
          </button>


        </div>

      </div>
    </section>
  );
}