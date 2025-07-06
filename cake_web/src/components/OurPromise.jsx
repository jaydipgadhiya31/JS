import React from 'react'
import proicon from '../assets/home-img/promise_icon.png';

function OurPromise() {
    return (
        <div>
            <section className="bg-white py-16 px-4 text-center">
                <p className="text-xs text-gray-500 tracking-widest uppercase">Pure Taste, Every Time</p>
                <h2 className="text-3xl md:text-4xl font-serif text-[#5e4a4a] mb-12">Our Promise</h2>

                <div className="flex flex-wrap justify-center gap-6">

                    <div className="w-full sm:w-[300px] bg-white p-6 rounded ">
                        <div className="flex justify-center mb-4">
                            <img src={proicon} alt="icon" className="w-12 h-15" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#5e4a4a] mb-2">Premium Quality</h3>
                        <p className="text-sm text-gray-600">
                            From Our Oven To Your Doorstep, Lightning-Fast Delivery So Your Treats Arrive Just As Fresh.
                        </p>
                    </div>
                    <div className="w-full sm:w-[300px] bg-white p-6 rounded ">
                        <div className="flex justify-center mb-4">
                            <img src={proicon} alt="icon" className="w-12 h-15" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#5e4a4a] mb-2">Freshly Baked</h3>
                        <p className="text-sm text-gray-600">
                            From Our Oven To Your Doorstep, Lightning-Fast Delivery So Your Treats Arrive Just As Fresh.
                        </p>
                    </div>

                    <div className="w-full sm:w-[300px] bg-white p-6 rounded ">
                        <div className="flex justify-center mb-4">
                            <img src={proicon} alt="icon" className="w-12 h-15" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#5e4a4a] mb-2">Secure Packaging</h3>
                        <p className="text-sm text-gray-600">
                            From Our Oven To Your Doorstep, Lightning-Fast Delivery So Your Treats Arrive Just As Fresh.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default OurPromise
