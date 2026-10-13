import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import LoginPage from "./Pages/LoginPage";
import CartPage from "./Pages/CartPage";
import StickersBlock from "./Components/StickersBlock";
import ErrorPage from "./Pages/ErrorPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { produtLoader } from "./Components/StickersBlock.jsx";
import { getContactedInfo } from "./Pages/Contact.jsx";
import StickerDetails from "./Components/StickerDetails.jsx";

const routdegination = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route
      index
      element={<StickersBlock />}
      loader={produtLoader}
      errorElement={<ErrorPage />}
    />
    <Route
      path="home"
      element={<StickersBlock />}
      loader={produtLoader}
      errorElement={<ErrorPage />}
    />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} action={getContactedInfo} />
    <Route path="login" element={<LoginPage />} />
    <Route path="cart" element={<CartPage />} />
    <Route path="*" element={<ErrorPage />} />
    <Route path="home/:productId" element={<StickerDetails />} />,
  </Route>,
);

const AppRoutes = createBrowserRouter(routdegination);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={AppRoutes} />
  </StrictMode>,
);
