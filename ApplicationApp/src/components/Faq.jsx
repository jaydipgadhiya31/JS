import React, { useState } from "react";
import Down_Arrow from "../assets/home-pic/Down_Arrow.svg"
import Up_Arrow from "../assets/home-pic/Up_Arrow.svg"


function Faq() {
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
            <div className="relative text-center mb-10">
                <hr className="border-blue-500 w-40 mx-auto" />
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-3 text-blue-600 font-bold text-sm">
                    FAQ
                </span>
            </div>
            <div className="mb-3 bg-white shadow border border-[#E6E6E6] rounded-[10px] px-4 py-3 w-full">
                <button onClick={() => setOpen1(!open1)} className="flex justify-between items-center w-full">
                    <span className="font-semibold">01. What can I expect form the event program?</span>
                    {open1 ? (
                        <img src={Down_Arrow} alt="Collapse" className="w-5 h-5" />
                    ) : (
                            <img src={Up_Arrow} alt="Expand" className="w-5 h-5" />
                    )}

                </button>
                {open1 && (
                    <p className="text-gray-500 text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget suspendisse faucibus interdum posuere.
                    </p>
                )}
            </div>

            <div className="mb-3 bg-white  shadow border border-[#E6E6E6] rounded-[10px] px-4 py-3">
                <button onClick={() => setOpen2(!open2)} className="flex justify-between items-center w-full">
                    <span className="font-semibold">02. What can I expect form the event program?</span>
                    {open2 ? (
                        <img src={Down_Arrow} alt="Collapse" className="w-5 h-5" />
                    ) : (
                        <img src={Up_Arrow} alt="Expand" className="w-5 h-5" />
                    )}
                </button>
                {open2 && (
                    <p className="text-gray-500 text-sm mt-2">Answer 2 goes here...</p>
                )}
            </div>

            <div className="mb-3 bg-white  shadow border border-[#E6E6E6] rounded-[10px] px-4 py-3">
                <button onClick={() => setOpen3(!open3)} className="flex justify-between items-center w-full">
                    <span className="font-semibold">03. What can I expect form the event program?</span>
                    {/* {open3 ? <FiChevronUp /> : <FiChevronDown />} */}
                    {open3 ? (
                        <img src={Down_Arrow} alt="Collapse" className="w-5 h-5" />
                    ) : (
                        <img src={Up_Arrow} alt="Expand" className="w-5 h-5" />
                    )}
                </button>
                {open3 && (
                    <p className="text-gray-500 text-sm mt-2">Answer 3 goes here...</p>
                )}
            </div>

            <div className="mb-3 bg-white  shadow border border-[#E6E6E6] rounded-[10px] px-4 py-3">
                <button onClick={() => setOpen4(!open4)} className="flex justify-between items-center w-full">
                    <span className="font-semibold">04. What can I expect form the event program?</span>
                    {open4 ? (
                        <img src={Down_Arrow} alt="Collapse" className="w-5 h-5" />
                    ) : (
                        <img src={Up_Arrow} alt="Expand" className="w-5 h-5" />
                    )}
                </button>
                {open4 && (
                    <p className="text-gray-500 text-sm mt-2">Answer 4 goes here...</p>
                )}
            </div>

            <div className="mb-3 bg-white  shadow border border-[#E6E6E6] rounded-[10px] px-4 py-3">
                <button onClick={() => setOpen5(!open5)} className="flex justify-between items-center w-full">
                    <span className="font-semibold">05. What can I expect form the event program?</span>
                    {open5 ? (
                        <img src={Down_Arrow} alt="Collapse" className="w-5 h-5" />
                    ) : (
                        <img src={Up_Arrow} alt="Expand" className="w-5 h-5" />
                    )}
                </button>
                {open5 && (
                    <p className="text-gray-500 text-sm mt-2">Answer 5 goes here...</p>
                )}
            </div>
        </div>
    );
}

export default Faq;
