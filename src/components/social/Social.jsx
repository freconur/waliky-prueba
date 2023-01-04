import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook as facebook } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp as whatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTiktok as tiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram as instagram } from "@fortawesome/free-brands-svg-icons";

import "./social.css";
const Social = () => {
  return (
    <div className="social">
      <ul className="social__list">
        <li>
          <FontAwesomeIcon icon={facebook} />
        </li>
        <li>
          <FontAwesomeIcon icon={tiktok} />
        </li>
        <li>
          <FontAwesomeIcon icon={instagram} />
        </li>
        {/* <li>
          <FontAwesomeIcon icon={whatsapp} />
        </li> */}
      </ul>
    </div>
  );
};

export { Social };
