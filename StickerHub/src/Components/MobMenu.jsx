import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const MobMenu = ({ getMenu }) => {
  return (
    <div className="fixed top-0 right-0 h-screen w-[60%] bg-blue-100 z-50">
      <button
        onClick={getMenu}
        className="absolute top-5 left-8 text-3xl font-extrabold"
      >
        X
      </button>
      <ul className="text-black font-bold text-2xl px-10 py-12 space-y-7 text-right">
        <li>
          <Link to={"/home"} onClick={getMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/about"} onClick={getMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to={"/contact"} onClick={getMenu}>
            Contact
          </Link>
        </li>
        <li>
          <Link to={"/login"} onClick={getMenu}>
            Login
          </Link>
        </li>
        <li>
          <Link to={"/cart"} onClick={getMenu}>
            <FontAwesomeIcon icon={faBasketShopping} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobMenu;
