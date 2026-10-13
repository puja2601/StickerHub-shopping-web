import React, { useState } from "react";
import {
  faBasketShopping,
  faMoon,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const MenuList = ({ dmode, setDMode, changeMode }) => {
  return (
    <>
      <div className="md:mr-10">
        <ul className="hidden md:flex md:gap-5 gap-2 font-bold text-l cursor-pointer">
          <li>
            <button
              onClick={changeMode}
              className="rounded-[50%] border-2 p-1.5"
            >
              {dmode ? (
                <FontAwesomeIcon icon={faSun} />
              ) : (
                <FontAwesomeIcon icon={faMoon} />
              )}
            </button>
          </li>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/cart"}>
              <FontAwesomeIcon icon={faBasketShopping} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuList;
