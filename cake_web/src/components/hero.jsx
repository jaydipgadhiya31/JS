import React from 'react'
import cake_1 from '../assets/home-img/cake_1.png'
import cake_2 from '../assets/home-img/cake_2.png'
import cake_3 from '../assets/home-img/cake_3.png'
import cake_4 from '../assets/home-img/cake_4.png'

function hero() {
  return (
    <div>
      <section className="bg-white py-10 px-4 md:px-10">
        <div className="flex flex-wrap justify-center gap-4">

          <div className="flex flex-col gap-4 w-full sm:w-[48%] lg:w-[30%]">
            <img
              src={cake_1}
              alt="Cake 1"
              className="w-full h-auto object-cover rounded"
            />
            <img
              src={cake_4}
              alt="cake_4"
              className="w-full h-auto object-cover rounded"
            />
          </div>

          <div className="flex flex-col gap-4 w-full sm:w-[48%] lg:w-[30%] justify-between">
            <img
              src={cake_2}
              alt="cake_2"
              className="w-full h-auto object-cover rounded"
            />
            <div className="bg-[#f9f6f1] text-center flex flex-col justify-center items-center p-6 rounded pt-8">
              <p className="text-xs tracking-widest text-gray-500 mb-1">DON'T MISS</p>
              <h2 className="text-2xl font-serif text-gray-800 mb-4 leading-snug">
                The Best cakes<br />in your town
              </h2>
              <button className="bg-[#C8B67C] hover:bg-[#b6a764] text-gray-800 px-6 py-2 rounded transition">
                ORDER NOW
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[30%]">
            <img
              src={cake_3}
              alt="cake_3"
              className="w-full h-auto object-cover rounded"
            />
          </div>

        </div>
      </section>
    </div>
  )
}

export default hero
