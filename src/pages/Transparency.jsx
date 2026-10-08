const docs = [
  {
    title: "Estatuto Social",
    file: "/docs/EstatutoNovo2023.pdf",
    description: "Estatuto Social do Centro Social São Mateus."
  },
  {
    title: "ATA 2025-2026",
    file: "/docs/ATA_2025a2026.pdf",
    description: "ATA 2025-2026 do Centro Social São Mateus."
  },
  {
    title: "Balancete 2024",
    file: "/docs/BALANCETE_2024.pdf",
    description: "Balancete de 2024 do Centro Social São Mateus."
  },

  {
    title: "Balanço Patrimonial 2025",
    file: "/docs/BALANCO_PATRIMONIAL_2025.pdf",
    description: "Balanço Patrimonial de 2025 do Centro Social São Mateus."
  },

  {
    title: "Plano de Trabalho 2025",
    file: "/docs/PLANO_DE_TRABALHO_2025.pdf",
    description: "Plano de Trabalho de 2025 do Centro Social São Mateus."
  },

  {
    title: "Plano de Trabalho 2026",
    file: "/docs/PLANO_DE_TRABALHO_2026.pdf",
    description: "Plano de Trabalho de 2026 do Centro Social São Mateus."
  },

  {
    title: "Termo de Fomento 2023 - Aditivo",
    file: "/docs/TERMO_DE_FOMENTO_02-2023_ADITIVO.pdf",
    description: "Termo de Fomento de 2023 - Aditivo do Centro Social São Mateus."
  },

  {
    title: "Termo de Fomento 2023 - 2025",
    file: "/docs/TERMO_FOMENTO_02-2023_2025.pdf",
    description: "Termo de Fomento de 2023- 2025 do Centro Social São Mateus."
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