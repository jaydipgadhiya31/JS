import React from "react";

function Testimonial() {
    return (
        <section className="bg-gray-100 py-16 text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h4 className="text-blue-600 text-sm font-semibold mb-2">TESTIMONIALS</h4>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">What Our Clients Say</h2>
                <p className="text-gray-600 mb-10">Real feedback from our satisfied customers.</p>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <p className="text-gray-700 italic">"Vytech Enterprise provided exceptional service and helped grow our business online. Highly recommended!"</p>
                    <p className="mt-4 font-semibold text-blue-700">– Rakesh Patel, CEO of TechFarm</p>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
