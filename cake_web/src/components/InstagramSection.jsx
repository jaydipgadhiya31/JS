import React from 'react'
import img1 from '../assets/home-img/catch_cake_one.png';

function InstagramSection() {
  return (
    <div>
      <section className="py-16 px-4 md:px-12 lg:px-24">

        <div className="text-center mb-12">
          <p className="uppercase text-sm tracking-widest text-gray-400 mb-2">
            From Our Oven To Your Feed
          </p>
          <h2 className="text-4xl font-serif font-semibold text-[#3d3d3d]">
            Catch Us On Insta!
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 max-w-6xl mx-auto">
          <img src={img1} alt="Cake 1" className="w-full sm:w-1/3 rounded shadow-lg" />
          <img src={img1} alt="Cake 2" className="w-full sm:w-1/3 rounded shadow-lg" />
          <img src={img1} alt="Cake 3" className="w-full sm:w-1/3 rounded shadow-lg" />
        </div>
      </section>
    </div>
  )
}

export default InstagramSection
