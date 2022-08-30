import React, { useState } from "react";
import General from "../components/Home/General";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import GeneralInfo from "../components/Home/GeneralInfo";

const Home = () => {
  const [numberSlide, setNumberSlide] = useState(0);

  console.log(numberSlide);
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
            <p>pagina 2</p>
          </div>
          <div>
            <p>pagina 3</p>
          </div>
          <div>
            <p>pagina 4</p>
          </div>
        </Carousel>
        <div className="sections-selector">
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
            onClick={() => setNumberSlide(2)}
            style={numberSlide === 2 ? { color: "#584CCC" } : null}
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
        {numberSlide === 1 && <div>desde pagina 2</div>}
        {numberSlide === 2 && <div>desde pagina 3</div>}
        {numberSlide === 3 && <div>desde pagina 4</div>}
      </div>
    </>
  );
};

export default Home;
