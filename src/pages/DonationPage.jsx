function DonationPage() {
  return (
    <section className="donation-page">

      <div className="container">

        <span className="donation-tag">
          Apoie nossa missão
        </span>

        <h1>
          Sua contribuição transforma vidas
        </h1>

        <p>
          Cada doação fortalece nossos projetos sociais e ajuda
          a levar mais acolhimento, educação, cultura e esperança
          para crianças, jovens e famílias da comunidade.
        </p>

        <div className="donation-content">

          <img
            src="/images/qrcode-pix.png"
            alt="QR Code PIX da instituição"
            className="pix-qrcode"
          />

          <div className="pix-box">

            <strong>
              Chave PIX (CNPJ)
            </strong>

            <span>
              00.000.000/0001-00
            </span>

            <small>
              Escaneie o QR Code ou utilize a chave PIX acima
              para contribuir com nossa causa.
            </small>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DonationPage;