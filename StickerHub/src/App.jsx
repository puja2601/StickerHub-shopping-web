import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import StickersBlock from "./Components/StickersBlock";
import Footer from "./Components/Footer";
import apiClent from "./api/apiClient";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";

const App = () => {
  let [dmode, setDMode] = useState(() => {
    return localStorage.getItem("dmode") === "true";
  });
  useEffect(() => {
    localStorage.setItem("dmode", dmode);
  }, [dmode]);

  const changeMode = (event) => {
    event.preventDefault();
    setDMode(!dmode);
  };

  const navigation = useNavigation();

  return (
    <>
      <div
        className={`min-h-screen ${dmode ? "dark bg-gray-700" : "bg-white"}`}
      >
        <ToastContainer
          position="top-right"
          autoClose={2000}
          style={{ top: "100px", marginRight: "100px" }}
        />
        <Header dmode={dmode} setDMode={setDMode} changeMode={changeMode} />
        <main className="flex-1">
          {navigation.state === "loading" ? (
            <>
              <div className="flex justify-center items-center min-h-75">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-pink-500 rounded-full animate-spin"></div>
              </div>
            </>
          ) : (
            <Outlet />
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
