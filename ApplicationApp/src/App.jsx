import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Expertise from "./components/Expertise";
import Testimonial from "./components/Testimonial";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Expertise />
      <Testimonial />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;