import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="text-l flex items-center justify-center dark:text-white">
      Build with
      <FontAwesomeIcon
        icon={faHeart}
        className="text-[#E40714] text-3xl mr-1 ml-1 animate-pulse"
      />
      by <a href="\">Puja Solanke</a>
    </div>
  );
};

export default Footer;
