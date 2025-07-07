import React from 'react';
import man_pic from "../assets/home-pic/man_pic.png";
import vanue_bg from "../assets/home-pic/vanue_bg.png";


const SpeakerCard = ({ name, role, image }) => (
    <div className="flex flex-col items-center">
        <div className="relative w-[280px] h-[180px]  rounded-[100px] shadow-md hidden sm:block">
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full border-4 border-blue-500 overflow-hidden  shadow-md">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                <p className="text-sm text-blue-500 font-medium">{role}</p>
            </div>
        </div>

        <div className="sm:hidden flex flex-col items-center mt-20">
            <div className="w-40 h-40 rounded-full border-4 border-blue-500 overflow-hidden bg-white shadow-md">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-4">{name}</h3>
            <p className="text-sm text-blue-500 font-medium">{role}</p>
        </div>
    </div>
);


function Speaker() {
    return (
        <div className='text-center pt-3 bg-cove bg-no-repeat' style={{ backgroundImage: `url(${vanue_bg})` }}>
            <h2 className="text-2xl font-bold mb-3">Meet Our Speaker</h2>
            <p className="text-blue-600 mb-10 relative inline-block">
                <span className="border-t border-blue-400 w-16 inline-block align-middle mr-2"></span>
                Speaker
                <span className="border-t border-blue-400 w-16 inline-block align-middle ml-2"></span>
            </p>
            <div className="py-16 px-4 ">

                <div className="flex flex-col items-center gap-y-12">
                    <div className="flex flex-wrap justify-center gap-8">
                        <SpeakerCard name="Jane Cooper" role="Product Designer" image={man_pic} />
                        <SpeakerCard name="Jane Cooper" role="Product Designer" image={man_pic} />
                        <SpeakerCard name="Jane Cooper" role="Product Designer" image={man_pic} />
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        <SpeakerCard name="Jane Cooper" role="Product Designer" image={man_pic} />
                        <SpeakerCard name="Jane Cooper" role="Product Designer" image={man_pic} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Speaker;
