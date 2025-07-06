import React from "react";

function Expertise() {
    const items = [
        "Web App Development",
        "Mobile App Development",
        "Custom Software",
        "Cloud Solutions",
        "DevOps & Automation",
        "UI/UX Design"
    ];

    return (
        <section className="py-20 bg-white text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h4 className="text-blue-600 text-sm font-semibold mb-2">OUR EXPERTISE</h4>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">We Are Expert In</h2>
                <p className="text-gray-600 mb-10">
                    Our team is skilled in various technologies and solutions tailored to meet business needs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-blue-50 rounded-lg py-4 px-6 font-medium text-blue-800 shadow-sm"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Expertise;
