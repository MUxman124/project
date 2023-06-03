import React from "react";



import TopNav from "./components/TopNav";
import NavBar from "./components/NavBar";

import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
      <TopNav />
      <NavBar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="aboutus" element={<AboutUsPage />} />
      </Routes>

      <Footer />
      <FooterBottom />
    </>
  );
}

export default App;
