import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import error from "../assets/images/error.png";

const ErrorPage = () => {
  const navigate = useNavigate();
  const backtoHome = () => {
    navigate("/home");
  };
  const routeError = useRouteError();
  return (
    <>
      <div className="h-150 w-100 mx-auto bg-cover overflow-hidden text-center py-25">
        <h3 className="dark:text-stone-50 text-blue-500 text-center mt-5 text-2xl font-semibold">
          {routeError?.status || 404}
        </h3>
        <p className="text-black dark:text-amber-50">
          {routeError?.data || "Page not found..!!"}
        </p>
        <img src={error} className="h-full w-full" />
      </div>
      <div className="flex justify-center mb-5">
        <button onClick={backtoHome} className="p-3 rounded-full bg-blue-300">
          Back to Main Page
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
