import { faBasketShopping, faTags } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast } from "react-toastify";
import MenuList from "./MenuList";
import MobMenu from "./MobMenu";

const Header = ({ dmode, setDMode, changeMode }) => {
  let [menu, setMenu] = useState(false);
  const getMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-600">
        <div className="md:w-[80%] mx-auto flex items-center justify-between border-b-3 border-gray-500  text-blue-900 dark:text-blue-100 h-14">
          <div className="md:ml-10 ml-2">
            <FontAwesomeIcon icon={faTags} className="text-2xl" />
            <span className="text-2xl font-bold ml-2">StickerHub</span>
          </div>

          <div>
            <MenuList
              dmode={dmode}
              setDMode={setDMode}
              changeMode={changeMode}
            />
          </div>

          <div className="md:hidden mr-10 text-2xl">
            <button
              onClick={changeMode}
              className="rounded-[50%] border-2 p-1.5 text-xl mr-2"
            >
              {dmode ? (
                <FontAwesomeIcon icon={faSun} />
              ) : (
                <FontAwesomeIcon icon={faMoon} />
              )}
            </button>
            <button onClick={getMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>
      {menu ? (
        <>
          <MobMenu getMenu={getMenu} />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
