import React from "react";
import background from "../../assets/backgrounds/banner-np.png";

const NPromociones = () => {
  return (
    <div className="container-carousel-np">
      <div
        className="container-banner2"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container-info-banner-general">
          <p className="title-banner">¡Aprovecha estos grandes descuentos!</p>
          <p className="info-banner">
            Tenemos una solución a la medida de tus necesidades y una promoción
            que encaja dentro de tu presupuesto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NPromociones;
