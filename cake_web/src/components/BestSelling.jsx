import React from 'react'
import red from '../assets/home-img/red_velvet.png';

function BestSelling() {
  return (
    <div>
      <section className="  py-16 px-4 text-center">
        <p className="text-xs text-gray-400 tracking-widest">BEST-SELLING</p>
        <h2 className="text-3xl md:text-5xl font-serif text-[#5e4a4a] mb-12">A Taste To Remember</h2>

        <div className="flex flex-wrap justify-center gap-8">

          <div className="w-full sm:w-[300px] text-center">
            <img
              src={red}
              alt="Cake 1"
              className="w-full h-auto rounded mb-4"
            />
            
            <p className="text-xs text-[#a58a8a] tracking-widest mb-1">CAKES</p>
            <h3 className="text-xl font-semibold text-[#a58a8a] mb-1">Red Velvet Cake</h3>
            <p className="text-md text-[#a58a8a] mb-4">$34</p>
            <button className="bg-[#C8B67C] text-gray-800 px-6 py-2 rounded hover:bg-[#b6a764] transition">
              BUY NOW
            </button>
          </div>

          <div className="w-full sm:w-[300px] text-center">
            <img
              src={red}
              alt="Cake 2"
              className="w-full h-auto rounded mb-4"
            />
            <p className="text-xs text-[#a58a8a] tracking-widest mb-1">CAKES</p>
            <h3 className="text-xl font-semibold text-[#a58a8a] mb-1">Red Velvet Cake</h3>
            <p className="text-md text-[#a58a8a] mb-4">$34</p>
            <button className="bg-[#C8B67C] text-gray-800 px-6 py-2 rounded hover:bg-[#b6a764] transition">
              BUY NOW
            </button>
          </div>

          <div className="w-full sm:w-[300px] text-center">
            <img
              src={red}
              alt="Cake 3"
              className="w-full h-auto rounded mb-4"
            />
            <p className="text-xs text-[#a58a8a] tracking-widest mb-1">CAKES</p>
            <h3 className="text-xl font-semibold text-[#a58a8a] mb-1">Red Velvet Cake</h3>
            <p className="text-md text-[#a58a8a] mb-4">$34</p>
            <button className="bg-[#C8B67C] text-gray-800 px-6 py-2 rounded hover:bg-[#b6a764] transition">
              BUY NOW
            </button>
          </div>

        </div>
      </section>
    </div>
  )
}

export default BestSelling
