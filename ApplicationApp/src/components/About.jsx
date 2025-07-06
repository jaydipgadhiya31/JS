import React from "react";
import webDevlopment from "../assets/webDevlopment.png"
import textline from "../assets/abouttextline.png"
import clientlogo from "../assets/client-logo.png"
import WBclientlogo from "../assets/WBclientlogo.png"

function About() {
    return (
        <section className="py-20 bg-white text-center">
            <div className="max-w-6xl mx-auto px-4">
                <h4 className="text-blue-600 text-sm font-semibold mb-2">ABOUT US</h4>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">There Are Many Variations</h2>
                <p className="flex justify-center">
                    <img src={textline} alt="" />
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <div className="flex gap-5">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src={webDevlopment}
                            alt="Web Development"
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2">Web Development</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src={webDevlopment}
                            alt="Web Development"
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2">Web Development</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src={webDevlopment}
                            alt="Web Development"
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2">Web Development</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="flex items-center justify-center mt-12 space-x-4">
                    <img
                        src={WBclientlogo}
                        alt="Client Logo"
                    />
                    <img
                        src={WBclientlogo}
                        alt="Client Logo"
                    />
                    <img
                        src={clientlogo}
                        alt="Client Logo"
                    />
                    <img
                        src={WBclientlogo}
                        alt="Client Logo"
                    />
                    <img
                        src={WBclientlogo}
                        alt="Client Logo"
                    />
                    <img
                        src={WBclientlogo}
                        alt="Client Logo"
                    />

                </div>
            </div>
        </section>
    );
}

export default About;
