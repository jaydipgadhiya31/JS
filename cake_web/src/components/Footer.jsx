import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/home-img/logo.png';

function Footer() {
  return (
    <div>
          <footer className="bg-[#523936] text-white pt-16 pb-6 px-4 md:px-12 lg:px-24">
              <div className="flex flex-col lg:flex-row justify-between gap-12 border-b border-white/30 pb-10">

                  <div className="lg:w-1/4">
                      <img src={logo} alt="Lil French Dough Logo" className="h-30 mb-4" />
                      <p className="text-sm mb-6">
                          Our Story Began With A Simple Love For Baking And A Began With That Joy
                      </p>
                      <button className="bg-white text-[#523936] font-semibold px-5 py-2 rounded mb-6">
                          Order Now
                      </button>
                      <div className="flex items-center gap-2 text-sm mb-2">
                          <FaPhoneAlt className="text-lg" />
                          <span>+91 1234567891</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm mb-2">
                          <FaEnvelope className="text-lg" />
                          <span>lilfrenchdough@abc.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                          <FaMapMarkerAlt className="text-lg" />
                          <span>Ahmedabad</span>
                      </div>
                  </div>

                  <div className="flex flex-1 justify-between flex-wrap gap-8 text-sm">
                      <div>
                          <h4 className="font-semibold mb-6">Products</h4>
                          <ul className="space-y-2">
                              <li>Custom Cakes</li>
                              <li>French Loafs</li>
                              <li>Cheesecakes</li>
                              <li>Madelines</li>
                              <li>Tarts</li>
                              <li>French Dishes</li>
                              <li>Cookies</li>
                          </ul>
                      </div>

                      <div className="w-px bg-white/40 hidden lg:block" />

                      <div>
                          <h4 className="font-semibold mb-6">Quick Links</h4>
                          <ul className="space-y-2">
                              <li>Home</li>
                              <li>Products</li>
                              <li>About us</li>
                              <li>Contact us</li>
                              <li>Giftings</li>
                              <li>Terms & conditions</li>
                          </ul>
                      </div>

                      <div className="w-px bg-white/40 hidden lg:block" />

                      <div>
                          <h4 className="font-semibold mb-6">My Account</h4>
                          <ul className="space-y-2">
                              <li>My Account</li>
                              <li>Order History</li>
                              <li>Contact us</li>
                              <li>Giftings</li>
                              <li>Wishlist</li>
                              <li>Privacy Policy</li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div className="text-xs text-center text-white/80 mt-6">
                  © 2024 Transparent. All rights reserved &nbsp; | &nbsp;
                  Cookie Settings, Anti-Spam, Privacy, User agreement, Legal Notice and Responsible Disclosure
              </div>
          </footer>
    </div>
  )
}

export default Footer
