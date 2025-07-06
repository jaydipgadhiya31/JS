import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/hero';
import BestSelling from './components/BestSelling';
import OurPromise from './components/OurPromise';
import FromOurKitchen from './components/FromOurKitchen';
import BehindTheOven from './components/BehindTheOven';
import Testimonial from './components/Testimonial';
import GiftSection from './components/GiftSection';
import InstagramSection from './components/InstagramSection'; 


function App() {
  return (
<BrowserRouter>
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <BestSelling />
            <OurPromise />
            <FromOurKitchen />
            <BehindTheOven />
            <Testimonial />
            <GiftSection />
            <InstagramSection />
          </>
        } />
        <Route path="/products" element={<h1>Products Page</h1>} />
        <Route path="/about" element={<h1>About Us Page</h1>} />
        <Route path="/contact" element={<h1>Contact Us Page</h1>} />
      </Routes>
    </main>
    <Footer />
  </div>
</BrowserRouter>
  );
}
export default App;

