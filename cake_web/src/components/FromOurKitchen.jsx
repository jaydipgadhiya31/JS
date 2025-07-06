import React from 'react'
import kitchen from '../assets/home-img/our-kitchen-one.png'
function FromOurKitchen() {
  return (
    <div>
      <section className=" py-12 px-4 text-center">
        <p className="text-sm text-gray-400 tracking-widest uppercase mb-2">
          Delicious. Fresh. Irresistible.
        </p>
        <h2 className="text-4xl font-serif  mb-10">
          From Our Kitchen
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          <img
            src={kitchen}
            alt="cake"
            className="w-[300px] h-[300px] object-cover rounded"
          />
          <img
            src={kitchen}
            alt="cake"
            className="w-[300px] h-[300px] object-cover rounded"
          />
          <img
            src={kitchen}
            alt="cake"
            className="w-[300px] h-[300px] object-cover rounded"
          />
          <img
            src={kitchen}
            alt="cake"
            className="w-[300px] h-[300px] object-cover rounded"
          />
          <img
            src={kitchen}
            alt="cake"
            className="w-[300px] h-[300px] object-cover rounded"
          />
          <img
            src={kitchen}
            alt="cake"
            className="w-[300px] h-[300px] object-cover rounded"
          />
        </div>
      </section>
    </div>
  )
}

export default FromOurKitchen
