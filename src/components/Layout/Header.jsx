import React from "react";
import LogoAdobe from "../../assets/LOGO-ADOBE.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const ubication = window.location.pathname;
  let navigate = useNavigate();
  return (
    <header>
      <div className="container-global-header">
        <div className="container-logo-adobe">
          <img
            src={LogoAdobe}
            alt="logo-adobe-png"
            onClick={() => (ubication === "/" ? null : navigate("/"))}
          />
        </div>
        <div className="principal-sections">
          <p
            style={ubication === "/" ? { color: "#FA0F18" } : null}
            onClick={() => (ubication === "/" ? null : navigate("/"))}
          >
            Home
          </p>
          <p
            style={ubication === "/sectores" ? { color: "#FA0F18" } : null}
            onClick={() =>
              ubication === "/sectores" ? null : navigate("/sectores")
            }
          >
            Sectores
          </p>
          <p
            style={ubication === "/perfiles" ? { color: "#FA0F18" } : null}
            onClick={() =>
              ubication === "/perfiles" ? null : navigate("/perfiles")
            }
          >
            Perfiles
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
