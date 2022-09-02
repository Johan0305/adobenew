import React from "react";
import { useState } from "react";
import imgV from "../../assets/image-vas.png";

const AdobeSignInfo = () => {
  const [texthover, setTextHover] = useState(false);

  return (
    <div className="container-global-as">
      <div className="container-video-info">
        <div className="video-image">
          <img src={imgV} alt="ToddVideo" />
          <div className="text-img">
            <h3>Evoluciona tus flujos de firma con Adobe Sign</h3>
            <p>
              Con esta solución los procesos que antes tardaban más tiempo,
              ahora son más sencillos, logrando que el trabajo colaborativo sea
              todo un éxito.
            </p>
          </div>
        </div>
      </div>
      <div className="strip">
        <p>
          <strong>Adobe Sign</strong> es la aplicación de{" "}
          <strong>firma electrónica </strong>
          mejor valorada en <strong className="salesforce">Salesforce*</strong>
        </p>
      </div>
      <div
        className="container-advantage"
        onMouseEnter={() => setTextHover(true)}
        onMouseLeave={() => setTextHover(false)}
      >
        <div className="advantageinfo">
          <p>Ventajas de tener Adobe Sign</p>
        </div>
        {texthover === true && (
          <div className="list-advantage">
            <ul>
              <li>Firmas en cualquier momento y en cualquier dispositivo.</li>
              <li>
                Cuentas con todos los requisitos legales y normativas del
                sector.
              </li>
              <li>Automatiza procesos.</li>
            </ul>
          </div>
        )}
      </div>
      <div className="container-solutions">
        <p>Conoce más sobre digitalización con nuestras soluciones:</p>
        <div className="grid-solutions"></div>
      </div>
    </div>
  );
};

export default AdobeSignInfo;
