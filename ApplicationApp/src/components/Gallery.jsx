import React from 'react';
import Gallery_pic from "../assets/home-pic/Gallery_pic.png";
import Gallery_two from "../assets/home-pic/Gallery_two.png";
import Gallery_three from "../assets/home-pic/Gallery_three.png";
import Gallery_four from "../assets/home-pic/Gallery_four.png";
import Gallery_five from "../assets/home-pic/Gallery_five.png";
import Gallery_six from "../assets/home-pic/Gallery_six.png";

function Gallery() {
    return (
        <div>
            <section className="py-12 mb-10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                    <p className="text-blue-600 mb-10 relative inline-block">
                        <span className="border-t border-blue-400 w-16 inline-block align-middle mr-2"></span>
                        Event photos
                        <span className="border-t border-blue-400 w-16 inline-block align-middle ml-2"></span>
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <img src={Gallery_pic} alt="Event photo" className="w-full sm:w-[48%] md:w-[30%] h-48 object-cover rounded-lg" />
                        <img src={Gallery_two} alt="Event photo" className="w-full sm:w-[48%] md:w-[30%] h-48 object-cover rounded-lg" />
                        <img src={Gallery_three} alt="Event photo" className="w-full sm:w-[48%] md:w-[30%] h-48 object-cover rounded-lg" />
                        <img src={Gallery_four} alt="Event photo" className="w-full sm:w-[48%] md:w-[30%] h-48 object-cover rounded-lg" />
                        <img src={Gallery_five} alt="Event photo" className="w-full sm:w-[48%] md:w-[30%] h-48 object-cover rounded-lg" />
                        <img src={Gallery_six} alt="Event photo" className="w-full sm:w-[48%] md:w-[30%] h-48 object-cover rounded-lg" />
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Gallery;
