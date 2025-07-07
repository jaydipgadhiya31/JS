import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import '@fontsource/poppins';
import Section from "./components/section";
import Speaker from "./components/Speaker";
import Sponsor from "./components/Sponsor";
import Vanue from "./components/Vanue";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Faq from "./components/Faq";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from "./components/Error404";



function App() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }} className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessions" element={<Section />} />
          <Route path="/speakers" element={<Speaker />} />
          <Route path="/sponsors" element={<Sponsor />} />
          <Route path="/venue" element={<Vanue />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/Faq" element={<Faq />} /> */}
          <Route path="/*" element={<Error404/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;