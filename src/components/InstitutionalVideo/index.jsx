import { useState } from "react";

import videoThumb from "../../../public/images/video-thumb.jpeg";
import institucionalVideo from "../../../public/videos/videoInstitucional.mp4";

export default function InstitutionalVideo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="institutional-video" id="conheca">

        {/* DECOR */}
        <div className="video-decor video-star"></div>
        <div className="video-decor video-circle"></div>

        <div className="video-container">

          {/* TEXTO */}
          <div className="video-content">
            <span className="video-tag">
              Nossa História
            </span>

            <h2>
              Veja de perto o impacto que estamos construindo juntos
            </h2>

            <p>
              Cada atividade, sorriso e conquista representa uma oportunidade
              criada através da solidariedade e do cuidado com nossa comunidade.
            </p>

            <div className="video-stats">
              <div className="video-stat">
                <strong>+50</strong>
                <span>Famílias atendidas</span>
              </div>

              <div className="video-stat">
                <strong>+100</strong>
                <span>Crianças impactadas</span>
              </div>
            </div>
          </div>

          {/* VIDEO CARD */}
          <div
            className="video-card"
            onClick={() => setOpen(true)}
          >
            <img src={videoThumb} alt="Vídeo Institucional" />

            <div className="video-overlay">
              <div className="play-button">
                ▶
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="video-modal" onClick={() => setOpen(false)}>

          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <video
              src={institucionalVideo}
              controls
              autoPlay
            />
          </div>

        </div>
      )}
    </>
  );
}