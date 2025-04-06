import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import Productpage from "./landing_page/products/Productpage";
import Pricingpage from "./landing_page/pricing/Pricingpage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
      <Route path="About" element={<AboutPage />}></Route>
      <Route path="/Products" element={<Productpage />}></Route>
      <Route path="/Pricing" element={<Pricingpage />}></Route>
      <Route path="/Support" element={<SupportPage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
