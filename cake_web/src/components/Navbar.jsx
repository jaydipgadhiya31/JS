import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/home-img/logo.png';
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm py-4">
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img src={logo} alt="Logo" className="h-12 object-contain" />
                </div>

                <ul className="hidden md:flex items-center gap-10 text-gray-800 font-medium">
                    <li><Link to="/" className="hover:text-yellow-800">Home</Link></li>
                    <li><Link to="/products" className="hover:text-yellow-800">Products</Link></li>
                    <li><Link to="/about" className="hover:text-yellow-800">About Us</Link></li>
                    <li><Link to="/contact" className="hover:text-yellow-800">Contact Us</Link></li>
                </ul>

                <div className="hidden md:flex items-center gap-6">
                    <Search className="w-5 h-5 cursor-pointer" />
                    <User className="w-5 h-5 cursor-pointer" />
                    <ShoppingCart className="w-5 h-5 cursor-pointer" />
                    <button className="bg-[#C8B67C] hover:bg-[#b6a764] text-gray-800 px-5 py-2 rounded font-medium">
                        Order Now
                    </button>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden px-6 pt-4 pb-6 space-y-4 bg-white shadow-sm">
                    <ul className="flex flex-col gap-4 text-gray-800 font-medium">
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
                        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
                    </ul>
                    <div className="flex items-center gap-6 mt-4">
                        <Search className="w-5 h-5 cursor-pointer" />
                        <User className="w-5 h-5 cursor-pointer" />
                        <ShoppingCart className="w-5 h-5 cursor-pointer" />
                        <button className="bg-[#C8B67C] text-gray-800 px-4 py-2 rounded font-medium">
                            Order Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
export default Navbar;
