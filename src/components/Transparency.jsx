const docs = [
  {
    title: "Estatuto Social",
    file: "/docs/estatuto.pdf",
  },
  {
    title: "Prestação de Contas",
    file: "/docs/prestacao-contas.pdf",
  },
  {
    title: "Regulamento Interno",
    file: "/docs/regulamento.pdf",
  },
];

export default function Transparency() {
  return (
    <section className="transparency" id="transparency">
      <div className="container">
        <div className="section-header">
          <div className="section-divider"></div>

          <h2>Transparência</h2>

          <p>
            Acompanhe documentos, relatórios e informações institucionais do
            Centro Social São Mateus.
          </p>
        </div>

        <div className="transparency-grid">
          {docs.map((doc, index) => (
            <a
              key={index}
              href={doc.file}
              target="_blank"
              rel="noreferrer"
              className="transparency-card"
            >
              <span className="doc-icon">📄</span>

              <h3>{doc.title}</h3>

              <p>Visualizar documento</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}