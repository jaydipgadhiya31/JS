import React from 'react';
import company_tag from "../assets/home-pic/company_tag.png";
import vanue_bg from "../assets/home-pic/vanue_bg.png";

function Sponsor() {
    return (
        <div>
            <section className="py-12 mb-10 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${vanue_bg})` }}>
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-3">Our Sponsor</h2>
                    <p className="text-blue-600 mb-10 relative inline-block">
                        <span className="border-t border-blue-400 w-16 inline-block align-middle mr-2"></span>
                        Event Sponsor
                        <span className="border-t border-blue-400 w-16 inline-block align-middle ml-2"></span>
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <div className=" p-6 rounded-lg shadow flex items-center justify-center w-full sm:w-[50%] md:w-[20%] h-36">
                            <img src={company_tag} alt="company" className="max-h-20 object-contain" />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center w-full sm:w-[50%] md:w-[20%] h-36">
                            <img src={company_tag} alt="company" className="max-h-20 object-contain" />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center w-full sm:w-[50%] md:w-[20%] h-36">
                            <img src={company_tag} alt="company" className="max-h-20 object-contain" />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center w-full sm:w-[50%] md:w-[20%] h-36">
                            <img src={company_tag} alt="company" className="max-h-20 object-contain" />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center w-full sm:w-[50%] md:w-[20%] h-36">
                            <img src={company_tag} alt="company" className="max-h-20 object-contain" />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center w-full sm:w-[50%] md:w-[20%] h-36">
                            <img src={company_tag} alt="company" className="max-h-20 object-contain" />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center w-full sm:w-[50%] md:w-[20%] h-36">
                            <img src={company_tag} alt="company" className="max-h-20 object-contain" />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center w-full sm:w-[50%] md:w-[20%] h-36">
                            <img src={company_tag} alt="company" className="max-h-20 object-contain" />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center w-full sm:w-[50%] md:w-[20%] h-36">
                            <img src={company_tag} alt="company" className="max-h-20 object-contain" />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center w-full sm:w-[50%] md:w-[20%] h-36">
                            <img src={company_tag} alt="company" className="max-h-20 object-contain" />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center w-full sm:w-[50%] md:w-[20%] h-36">
                            <img src={company_tag} alt="company" className="max-h-20 object-contain" />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center w-full sm:w-[50%] md:w-[20%] h-36">
                            <img src={company_tag} alt="company" className="max-h-20 object-contain" />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center w-full sm:w-[50%] md:w-[20%] h-36">
                            <img src={company_tag} alt="company" className="max-h-20 object-contain" />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center w-full sm:w-[50%] md:w-[20%] h-36">
                            <img src={company_tag} alt="company" className="max-h-20 object-contain" />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center w-full sm:w-[50%] md:w-[20%] h-36">
                            <img src={company_tag} alt="company" className="max-h-20 object-contain" />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center w-full sm:w-[50%] md:w-[20%] h-36">
                            <img src={company_tag} alt="company" className="max-h-20 object-contain" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sponsor;
