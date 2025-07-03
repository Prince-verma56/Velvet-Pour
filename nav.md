import React from 'react'
import {navLinks} from './Constants'
function Navbar() {
const [menuOpen, setMenuOpen] = React.useState(false);

return (
    <nav className=" shadow-md fixed w-full z-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
                    <p className="text-2xl font-bold text-white">Velvet Pour</p>
                </a>
                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className=" hover:text-blue-600 font-medium transition"
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex items-center"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-7 h-7 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
            <div className="md:hidden bg-white shadow-md">
                <ul className="flex flex-col gap-4 px-6 py-4">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className="block text-gray-700 hover:text-blue-600 font-medium transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </nav>
);
}

export default Navbar