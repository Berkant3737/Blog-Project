import React from "react";
import Logo from "../../images/logo.jpg";
import Cv from "./BerkantHurmaCv.pdf"
function BannerText() {
  return (
    <>
      <div className="banner-text d-flex justify-content-center align-items-center flex-column h-75">
        <div className="banner-logo mb-3">
          <img src={Logo} className="img-fluid" />
        </div>
        <h1>Berkant Hurma</h1>
        <p className="typewriter">Front-End Developer</p>
        <a href={Cv} className="button-cv btn btn-outline">CV'mi Görüntüle</a>
      </div>
    </>
  );
}

export default BannerText;