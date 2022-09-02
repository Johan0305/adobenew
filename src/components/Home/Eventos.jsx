import React from "react";
import background from "../../assets/backgrounds/events.png";

const Eventos = () => {
  return (
    <div className="container-carousel-events">
      <div
        className="container-banner-events"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container-info-banner-general">
          <p className="title-banner">
            Descubre cómo a través de nuestras soluciones puedes enfrentar los
            retos que trae consigo la digitalización.
          </p>
          <button>Ver Webinars</button>
        </div>
      </div>
    </div>
  );
};

export default Eventos;
