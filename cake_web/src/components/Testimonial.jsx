import React from 'react';
import arrowleft from '../assets/home-img/arrow-left.png';
import arrowright from '../assets/home-img/arrow-right.png';
function Testimonial() {
  return (
    <section className="py-16 text-center px-4 bg-white">
      <p className="text-xs text-gray-400 uppercase tracking-widest">
        Their Joy Says It All
      </p>
      <h2 className="text-3xl md:text-4xl font-serif text-[#2f2f2f] mb-10">
        What They Say
      </h2>

      <div className="max-w-3xl mx-auto relative">

        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#5e4a4a] text-3xl ">
          <img src={arrowleft} alt="" />
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#5e4a4a] text-3xl ">
         <img src={arrowright} alt="" />
        </div>

        <p className="text-lg md:text-xl font-medium text-[#2f2f2f] leading-relaxed mb-8 px-4">
          Our Story Began With A Simple Love For Baking And A Dream To Share That Joy With Others. Started In A Small Kitchen
        </p>

        <div className="flex items-center justify-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="MILLON ZAHINO"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-left">
            <h4 className="font-bold text-[#5e4a4a]">MILLON ZAHINO</h4>
            <p className="text-sm text-gray-400">Happy customer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
