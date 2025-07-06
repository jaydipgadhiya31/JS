import React from "react";
import logo from "../assets/LOGO-01.png"
import icon from "../assets/Frame 57.png"
import line from "../assets/navbarLine.png"

function Navbar() {
    return (
        <nav className="bg-white px-4 py-2 flex items-center ">
            <div class=" absolute top-0 w-3/4 right-0 flex border-b-2 border-l-2 border-[#0673B9] bg-[#18304B] text-white w--1360px  md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0 mb-2 md:mb-0 text-sm md:text-base">
                <span class="flex items-center font-normal ml-10">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clip-rule="evenodd"></path></svg>
                    Mon-Fri 9:00 am to 7:00 pm
                </span>
                <span class="flex items-center font-normal "> 
                    <p className="px-6 pr-10">\</p>
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.9.692l1.214 3.643a1 1 0 01-.176.995l-1.481 1.481a5 5 0 006.928 6.928l1.48-1.48a1 1 0 01.996-.176l3.643 1.214a1 1 0 01.692.9V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                    +91 7926300990
                </span>
                <span class="flex items-center font-normal">
                    <p className="px-6 pr-10">\</p>
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    info@vytechenterprise.com
                </span>
            </div>
            <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="h--100px w--100px ml-12" />
            </div>
            <div class="container mx-auto flex flex-col md:flex-row items-center justify-between  px-4 md:px-0">

                <ul className="hidden md:flex gap-6 text-sm font-medium text-[#18304B] ml-56">
                    <li className="text-[#0673B9] flex flex-col">Home <li><img className="ml-1.5" src={line} alt=""/></li></li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Case Studies</li>
                    <li>Methodology</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <button className=" mr-12 w-66 border border-[#0673B9] text-[#0673B9] px-3 py-1  flex items-center rounded text-sm">
                <img className="w--40px h--35px pr-1" src={icon} alt="" />
                Hire Devlopment
            </button>
        </nav>
    );
}

export default Navbar;