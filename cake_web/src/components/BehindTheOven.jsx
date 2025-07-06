import React from 'react'
import oven from "../assets/home-img/behind-the oven.png";
function BehindTheOven() {
  return (
    <div>
      <section className=" py-16 px-4 ">
        <div className="text-center mb-12">
          <p className="text-xs text-gray-400 tracking-widest uppercase">From Dough To Delight</p>
          <h2 className="text-4xl font-serif text-[#2f2f2f]">Behind The Oven</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-8">

          <div className="relative w-full md:w-1/2 flex justify-center">
            <img
              src={oven} 
              alt="Baking"
              className="w-[90%] md:w-[450px] h-auto object-cover rounded"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-[#5e4a4a] leading-relaxed mb-6">
              Our Story Began With A Simple Love For Baking And A Dream To Share That Joy With Others.
              What Started In A Small Kitchen Has Now Become A Cozy Corner Where Every Treat Is Handmade With Care,
              Using Fresh Ingredients And Family Recipes. From Morning Pastries To Celebration Cakes,
              We Bake To Bring Smiles, One Bite At A Time.
            </p>

            <button className="bg-[#d1c49c] text-[#5e4a4a] px-6 py-3 font-medium tracking-widest hover:bg-[#c3b57e] transition">
              KNOW MORE
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BehindTheOven
