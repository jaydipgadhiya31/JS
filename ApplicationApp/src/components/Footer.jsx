import React from "react";
import vanue_bg from "../assets/home-pic/vanue_bg.png";
import crm_harbor_logo from "../assets/home-pic/crm_harbor_logo.png";

function Footer() {
    return (
        <footer className=" py-4 text-center text-gray-600 mt-10 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${vanue_bg})` }}>
            <p>Copyright © 2024 Vyetech Enterprise. All rights reserved.</p>
            <p>Powered By <img src={crm_harbor_logo} alt="Events Logo" className="inline" /></p>
        </footer>
    );
}

export default Footer;
