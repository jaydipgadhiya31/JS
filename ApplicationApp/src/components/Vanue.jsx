import React from 'react';
import map_pic from "../assets/home-pic/map_pic.png";
import vanue_bg from "../assets/home-pic/vanue_bg.png";

function Venue() {
    return (
        <div>
            <section className="py-12 bg-cover bg-center" style={{ backgroundImage: `url(${vanue_bg})`}}>
                <div className="container mx-auto px-4 bg-opacity-80">
                    <div className='text-center'>
                        <h2 className="text-2xl font-bold mb-3">Venue</h2>
                        <p className="text-blue-600 mb-10 relative inline-block">
                            <span className="border-t border-blue-400 w-16 inline-block align-middle mr-2"></span>
                            Get Directions
                            <span className="border-t border-blue-400 w-16 inline-block align-middle ml-2"></span>
                        </p>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-6'>
                        <img src={map_pic} alt="Venue Map" className="w-full md:w-1/2 mb-4 object-cover" />
                        <div className='text-center md:text-left'>
                            <p className='mt-4 md:mt-0'>Address: 2972 Westheimer Rd, Santa Ana, Illinois 85486</p>
                            <div className='mt-6 md:mt-10'>
                                <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block">Get Directions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Venue;