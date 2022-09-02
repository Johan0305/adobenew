import React from "react";
import background from "../../assets/backgrounds/banner-doc-cloud-2.png";

const General = () => {
  return (
    <div className="container-carousel-general">
      <div
        className="container-banner1"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container-info-banner-general">
          <p className="title-banner">
            Alcanza un retorno de inversión del 420%*
          </p>
          <p className="info-banner">
            Implemeta Adobe Document Cloud en tus flujos de trabajo.
          </p>
          <button>Descubre cómo</button>
          <p className="small-banner">
            *Fuente: Resolución de Brief Adobe Document Cloud para Microsoft
            Teams. Maximiza la productividad y la colaboración,
            independientemente de dónde trabaja tu equipo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default General;
