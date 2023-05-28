import React from "react";
import { BsGithub, BsLinkedin, BsInstagram, BsDiscord } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div className="container text-white py-3">
        <div className="row">
        <div className="col-12 col-md-6 text-start">
                <h3>BERKANT HURMA</h3>
                <p>
                  Genel ürünün başarısına yol açan Web Sitelerinin <br /> ve Web
                  Uygulamalarının Ön Uçunu oluşturan <br /> Ön Uç odaklı bir Web
                  Geliştiricisi
                </p>
              </div>
              <div className="col-12 col-md-6 social-icons text-start text-md-end">
                <h3 className="me-4">İletişim</h3>
                <ul className="p-0 m-0 w-100">
                    <li>
                      <a href="https://github.com/Berkant3737">
                        <i><BsGithub /></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/berkant-hurma-a060b8214/">
                        <i><BsLinkedin /></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/berkant3737__/">
                        <i><BsInstagram /></i>
                      </a>
                    </li>
                    <li>
                      <a href="Stanchii#6582">
                        <i><BsDiscord /></i>
                      </a>
                    </li>
                  </ul>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
