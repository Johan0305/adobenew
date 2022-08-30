import React from "react";
import imgV from "../../assets/image-video.png";

const GeneralInfo = () => {
  return (
    <div className="container-info-generalInfo">
      <div className="container-video-info">
        <div className="video-image">
          <img src={imgV} alt="ToddVideo" />
          <div className="text-img">
            <h3>
              Conoce la experiencia de quienes han implementado Document Cloud
            </h3>
            <p>
              Gestiona, diligencia, compara, almacena y controla los documentos
              en cualquier momento y desde cualquier dispositivo.
            </p>
          </div>
        </div>
      </div>

      <div className="text-porcent">
        <p>
          El <strong className="red-text"> 97% </strong> de las organizaciones
          con capacidades mínimas de
          <strong className="red-text"> documentos digitales </strong> están
          experimentando un impacto negativo en la
          <strong className="red-text">
            {" "}
            productividad de los empleados.{" "}
          </strong>
        </p>
      </div>
    </div>
  );
};

export default GeneralInfo;
