import React from "react";
import { Carousel } from "react-responsive-carousel";

const NPromocionesInfo = () => {
  return (
    <div className="global-container-NPromociones">
      <div className="container-npromo">
        <strong>Tenemos una promoción a tu medida</strong>
        <p>
          Sabemos que las necesidades de cada sector son diferentes, además, los
          flujos de trabajo y gestión de documentos de cada equipo son únicos.
          Por eso, buscamos impulsar procesos a través de promociones
          imperdibles.
        </p>
        <strong>Algunas de las promociones:</strong>

        <Carousel
          infiniteLoop
          emulateTouch
          autoPlay
          showThumbs={false}
          className="carousel-np"
        >
          <div className="item-np-carousel">
            <p>1</p>
          </div>
          <div className="item-np-carousel">
            <p>1</p>
          </div>
          <div className="item-np-carousel">
            <p>1</p>
          </div>
          <div className="item-np-carousel">
            <p>1</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default NPromocionesInfo;
