import React, { useState } from "react";
import imgV from "../../assets/image-video.png";
import img1 from "../../assets/AdobeStock_335099005.png";
import img2 from "../../assets/AdobeStock_72529251.png";
import office from "../../assets/logotools/office.png";
import ss from "../../assets/logotools/ss.png";
import onedrive from "../../assets/logotools/onedrive.png";
import teams from "../../assets/logotools/teams.png";

const GeneralInfo = () => {
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [tool, setTool] = useState(0);

  const offeroption = [
    {
      title: "Acrobat DC para equipos",
      img: img1,
      apply: "Pequeñas, medianas empresas y departamentos",
      benefits: [
        "Implementación sin complicaciones.",
        "Autenticación de usuarios mediante Adobe ID.",
        "Asistencia técnica avanzada y continua de expertos.",
      ],
    },
    {
      title: "Acrobat DC para empresas",
      img: img2,
      apply: "Grandes, medianas empresas y departamentos.",
      benefits: [
        "Funciones administrativas avanzadas.",
        "Sesión de iniciación exclusiva e individual.",
        "Asistencia profesional ilimitada.",
      ],
    },
  ];

  const tools = [
    {
      name_tool: "Office 365",
      color: "#FF1600",
      content:
        "Crea y comparte PDF con las aplicaciones de Microsoft, envía para firma y rastrea el estado.",
      logo: office,
    },
    {
      name_tool: "Share Point",
      color: "#2C71C9",
      content:
        "Usa Document Cloud con SharePoint para compartir tu flujo de trabajo.",
      logo: ss,
    },
    {
      name_tool: "One Drive",
      color: "#0049B9",
      content:
        "Convierte archivos de Microsoft 365 a PDF y combina documentos en un solo archivo.",
      logo: onedrive,
    },
    {
      name_tool: "Microsoft Teams",
      color: "#5658B0",
      content:
        "Crea, comparte, colabora y aprueba tus documentos electrónicos.",
      logo: teams,
    },
  ];

  console.log(tool);

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
      <div className="container-offer">
        <div className="text-offer">
          <strong>Encuentra una oferta que se adapte a tus necesidades</strong>
        </div>
        <div className="container-offer-options">
          {offeroption.map(({ title, img, apply, benefits }, index) => {
            return (
              <div
                className="offer-option"
                key={index}
                style={{ backgroundImage: `url(${img})` }}
                onMouseEnter={() => {
                  index === 0 ? setOption1(true) : setOption2(true);
                }}
                onMouseLeave={() => {
                  index === 0 ? setOption1(false) : setOption2(false);
                }}
              >
                <strong className="title">{title}</strong>
                {index === 0
                  ? option1 === true && (
                      <div className="appear">
                        <div className="appear-info">
                          <p className="text-appear">¿Para quién aplica</p>
                          <p>{apply}</p>
                          <p className="text-appear">Beneficios</p>
                          <ul>
                            {benefits.map((e, i) => (
                              <li key={i}>{e}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )
                  : option2 === true && (
                      <div className="appear">
                        <div className="appear-info">
                          <p className="text-appear">¿Para quién aplica</p>
                          <p>{apply}</p>
                          <p className="text-appear">Beneficios</p>
                          <ul>
                            {benefits.map((e, i) => (
                              <li key={i}>{e}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="container-tools-global">
        <div className="text-title-tools">
          <strong>Nos integramos al flujo de trabajo</strong>
          <p>Sigue manejando las herramientas que tu equipo y tú ya conocen</p>
        </div>
        <div className="tools-support">
          {tools.map(({ name_tool, color, content, logo }, index) => (
            <div
              className="tool-container"
              onMouseEnter={() => setTool(index + 1)}
              onMouseLeave={() => setTool(0)}
            >
              <strong style={{ color: color }}>{name_tool}</strong>
              <img src={logo} alt={`${name_tool}-logo`} />
              {tool === index + 1 && <p>{content}</p>}
            </div>
          ))}
        </div>
        <a
          href="https://documentcloudforbusiness.com/wp-content/uploads/2022/05/adobe-sign-microsoft-integration-overview-la.pdf"
          target="_blank"
        >
          <button>Ver todas las integraciones</button>
        </a>
      </div>
    </div>
  );
};

export default GeneralInfo;
