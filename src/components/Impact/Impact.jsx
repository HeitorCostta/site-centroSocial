function Impact() {
  const images = [
    "https://images.unsplash.com/photo-1588072432836-e10032774350",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  ];

  return (
    <section className="impact" id="impact">
      <h2>Nosso Impacto na Comunidade</h2>

      <div className="impact-grid">
        {images.map((img, i) => (
          <div key={i} className="impact-card">
            <img src={img} alt="Impacto social" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Impact;