import foto from "../../../public/images/fundo-cta.jpg"
export default function CTA() {
  return (
<section className="cta" id="cta">

  <img src = {foto} alt="" className="cta-bg" />

  <div className="cta-content">
    <h2>Ajude ao Projetos</h2>

    <p>
      Toda contribuição importa.
    </p>

    <button className="btn-primary">❤️ Doar Agora</button>
  </div>

</section>
  );
}