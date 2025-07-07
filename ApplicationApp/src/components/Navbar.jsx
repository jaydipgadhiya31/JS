import { Link } from 'react-router-dom';
import crm_harbor_logo from "../assets/home-pic/crm_harbor_logo.png";

function Navbar() {
    const toggleMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenu.classList.toggle('hidden');
    };

    return (
        <nav className="bg-white border-b border-[#3353E0]/30">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={crm_harbor_logo} alt="CRM Harbor Logo" className="mr-2 h-10 w-auto" />
                </div>
                <div className="md:flex hidden space-x-8">
                    <Link to="/" className="hover:text-[#6883FD]">Home</Link>
                    <Link to="/sessions" className="hover:text-[#6883FD]">Sessions</Link>
                    <Link to="/speakers" className="hover:text-[#6883FD]">Speakers</Link>
                    <Link to="/sponsors" className="hover:text-[#6883FD]">Sponsors</Link>
                    <Link to="/gallery" className="hover:text-[#6883FD]">Gallery</Link>
                    <Link to="/venue" className="hover:text-[#6883FD]">Venue</Link>
                    {/* <Link to="/FAQ" className="hover:text-[#6883FD]">FAQ</Link> */}
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="md:hidden" id="mobileMenu">
                <div className="px-4 py-2 space-y-2">
                    <Link to="/" className="block hover:text-blue-500" onClick={toggleMenu}>Home</Link>
                    <Link to="/sessions" className="block hover:text-[#6883FD]" onClick={toggleMenu}>Sessions</Link>
                    <Link to="/speakers" className="block hover:text-[#6883FD]" onClick={toggleMenu}>Speakers</Link>
                    <Link to="/sponsors" className="block hover:text-[#6883FD]" onClick={toggleMenu}>Sponsors</Link>
                    <Link to="/venue" className="block hover:text-[#6883FD]" onClick={toggleMenu}>Venue</Link>
                    <Link to="/gallery" className="block hover:text-[#6883FD]" onClick={toggleMenu}>Gallery</Link>
                </div>
            </div>
        </nav>
        
    );
}

export default Navbar;