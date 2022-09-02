import React from "react";
import background from "../../assets/backgrounds/adobes.png";

const AdobeSign = () => {
  return (
    <div className="container-carousel-adobes">
      <div
        className="container-banner-adobes"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container-info-banner-general">
          <p className="title-banner">
            <strong className="text1">Descubre</strong> cuánto puedes ahorrar
            con
            <strong className="text2"> Adobe Sign</strong>
          </p>
          <p className="info-banner">
            Visita nuestra
            <strong className="text3"> calculadora de recursos</strong>
          </p>
          <button>Calcular ahorro</button>
        </div>
      </div>
    </div>
  );
};

export default AdobeSign;
