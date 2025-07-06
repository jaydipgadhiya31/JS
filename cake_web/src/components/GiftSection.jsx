import React from 'react'
import giftImage from '../assets/home-img/gift_image.png';

function GiftSection() {
  return (
    <div>
      <section className=" py-16 px-4 md:px-12 lg:px-24">

        <div className="text-center mb-12">
          <p className="uppercase text-sm tracking-widest text-gray-400 mb-2">
            Treat, Wrap, Repeat
          </p>
          <h2 className="text-4xl font-serif font-semibold text-[#70575A]">
            Gift With Us
          </h2>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          <div className="lg:w-1/2">
            <p className="text-[#70575A] text-lg leading-relaxed mb-8">
              Our Story Began With A Simple Love For Baking And A Dream To Share That Joy With Others.
              What Started In A Small Kitchen Has Now Become A Cozy Corner Where Every Treat Is Handmade With Care,
              Using Fresh Ingredients And Family Recipes. From Morning Pastries To Celebration Cakes,
              We Bake To Bring Smiles, One Bite At A Time.
            </p>
            <button className="bg-[#d1c5a2] text-black font-semibold px-6 py-3 rounded hover:bg-[#bcae8a] transition">
              KNOW MORE
            </button>
          </div>

          <div className="lg:w-1/2 relative">
            <img src={giftImage} alt="Gift Box" className="w-full rounded shadow-lg" />
          </div>

        </div>
      </section>
    </div>
  )
}

export default GiftSection
