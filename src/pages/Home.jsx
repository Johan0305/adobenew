import React, { useState } from "react";
import General from "../components/Home/General";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import GeneralInfo from "../components/Home/GeneralInfo";
import adobeS from "../assets/logotools/as.png";
import NPromociones from "../components/Home/NPromociones";
import AdobeSign from "../components/Home/AdobeSign";
import Eventos from "../components/Home/Eventos";
import NPromocionesInfo from "../components/Home/NPromocionesInfo";
import AdobeSignInfo from "../components/Home/AdobeSignInfo";
import EventosInfo from "../components/Home/EventosInfo";

const Home = () => {
  const [numberSlide, setNumberSlide] = useState(0);
  const [adobeSi, setAdobeSi] = useState(false);

  return (
    <>
      <div className="container-global-home-info">
        <Carousel
          onChange={(args) => setNumberSlide(args)}
          showThumbs={false}
          selectedItem={numberSlide}
          emulateTouch
          className="carousel"
          infiniteLoop
        >
          <div className="slide1">
            <General />
          </div>
          <div>
            <NPromociones />
          </div>
          <div>
            <AdobeSign />
          </div>
          <div>
            <Eventos />
          </div>
        </Carousel>
        <div
          className="sections-selector"
          style={
            numberSlide === 2
              ? {
                  backgroundColor: "#8178D9",
                  borderBottom: "0.5px solid #ffff",
                  borderTop: "0.5px solid #ffff",
                }
              : null
          }
        >
          <p
            onClick={() => setNumberSlide(0)}
            style={numberSlide === 0 ? { color: "#fa0f18" } : null}
          >
            General
          </p>
          <p
            onClick={() => setNumberSlide(1)}
            style={numberSlide === 1 ? { color: "#fa0f18" } : null}
          >
            Nuevas promociones
          </p>
          <p
            className="as"
            onClick={() => setNumberSlide(2)}
            style={numberSlide === 2 ? { color: "#ffff" } : null}
          >
            Adobe Sign
          </p>
          <p
            onClick={() => setNumberSlide(3)}
            style={numberSlide === 3 ? { color: "#fa0f18" } : null}
          >
            Eventos
          </p>
        </div>
        {numberSlide === 0 && <GeneralInfo />}
        {numberSlide === 1 && <NPromocionesInfo />}
        {numberSlide === 2 && <AdobeSignInfo />}
        {numberSlide === 3 && <EventosInfo />}

        <div
          className="adobe-sign"
          onMouseEnter={() => setAdobeSi(true)}
          onMouseLeave={() => setAdobeSi(false)}
        >
          <img src={adobeS} alt="adobe-sign-logo" />
          <div className="text-as">
            {adobeSi === true && (
              <>
                <span />
                <p>
                  ¿Quieres conocer cómo funcionan los flujos de firma con Adobe
                  Sign?
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
