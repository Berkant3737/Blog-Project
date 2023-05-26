import React from "react";
import { BsGithub, BsLinkedin, BsInstagram, BsDiscord } from "react-icons/bs";
function SocialsIcon() {
  return (
    <div className="SocialsIcon">
      <ul className="p-0 m-0">
        <li>
          <a href="https://github.com/Berkant3737">
            <BsGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/berkant-hurma-a060b8214/">
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/berkant3737__/">
            <BsInstagram />
          </a>
        </li>
        <li>
          <a href="Stanchii#6582">
            <BsDiscord />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialsIcon;
