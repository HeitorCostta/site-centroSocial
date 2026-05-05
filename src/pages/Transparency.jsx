const docs = [
  {
    title: "Estatuto Social",
    file: "/docs/estatuto.pdf",
    description: "Documento oficial com as diretrizes e funcionamento da instituição."
  },
  {
    title: "Prestação de Contas",
    file: "/docs/prestacao-contas.pdf",
    description: "Relatórios financeiros e informações de transparência administrativa."
  },
  {
    title: "Regulamento Interno",
    file: "/docs/regulamento.pdf",
    description: "Normas internas e orientações gerais do Centro Social."
  },
];

export default function Transparency() {
  return (
    <section className="transparency" id="transparency">
      <div className="container">

        <div className="transparency-header">
          <span className="transparency-tag">
            Transparência & Credibilidade
          </span>

          <h2>
            Compromisso com ética, responsabilidade e prestação de contas
          </h2>

          <p>
            Disponibilizamos documentos institucionais para garantir acesso
            às informações e fortalecer a confiança da comunidade no trabalho
            realizado pelo Centro Social São Mateus.
          </p>
        </div>

        <div className="transparency-grid">
          {docs.map((doc, index) => (
            <div className="transparency-card" key={index}>

              <div className="doc-icon">
                📄
              </div>

              <h3>{doc.title}</h3>

              <p>{doc.description}</p>

              <a
                href={doc.file}
                target="_blank"
                rel="noreferrer"
                className="doc-button"
              >
                Abrir PDF
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}