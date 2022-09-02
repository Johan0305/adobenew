import React from "react";
import dd from "../../assets/imgsEvents/info-dc-forrester.png";
import as from "../../assets/imgsEvents/AdobeSignEvent.png";
import adc from "../../assets/imgsEvents/adc.png";

const EventosInfo = () => {
  const webinars = [
    {
      title: "Documentación digital",
      img: dd,
      text: "Estudio presentado por Forrester \n Conoce cómo las organizaciones adoptan la tecnología y estrategias de negocio para apoyar a clientes, socios y colaboradores.",
    },
    {
      title: "Adobe Sign Tour",
      img: as,
      text: "Conoce en este evento sobre la grafología de tu firma y cómo transformarla en firma electrónica para hacer más eficiente tu trabajo y el de tu equipo.",
    },
    {
      title: "Adobe Document Cloud",
      img: adc,
      text: "La digitalización de documentos ya no es una opción para las empresas, sino una necesidad.\n Disfruta nuestros webinars On Demand y entérate cómo.",
    },
  ];

  return (
    <div className="container-global-events">
      <div className="container-webinars">
        <strong>Nuevos webinars</strong>
        <div className="container-grid">
          {webinars.map(({ title, img, text }) => (
            <div className="event-item">
              <strong>{title}</strong>
              <img src={img} alt={title} />
              <p>{text}</p>
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Ver más</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventosInfo;
