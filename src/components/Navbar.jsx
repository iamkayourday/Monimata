import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Features", to: "features" },
    { name: "Pricing", to: "pricing" },
    { name: "Technology", to: "technology" },
    { name: "FAQ", to: "faq" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#000211] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer relative z-50">
          <div className="w-10 h-10 bg-[#3B33C0] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">
            Monimata
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-white"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-8">
          <button className="text-gray-300 hover:text-white transition-colors text-sm font-medium cursor-pointer">
            Log In
          </button>
          <button className="bg-[#3B33C0] cursor-pointer hover:bg-[#4338ca] text-white px-7 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-lg active:scale-95">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden relative z-50">
          <button onClick={toggleMenu} className="text-white cursor-pointer">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <div 
        className={`fixed inset-0 bg-[#000211] flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            smooth={true}
            duration={500}
            spy={true}
            onClick={toggleMenu} // Closes menu after clicking
            className="text-gray-400 hover:text-white text-2xl font-semibold cursor-pointer"
          >
            {link.name}
          </Link>
        ))}
        <div className="flex flex-col items-center gap-6 mt-4 w-full px-10">
          <button className="text-gray-300 text-lg font-medium w-full py-3 border border-white/10 rounded-xl">
            Log In
          </button>
          <button className="bg-[#3B33C0] text-white w-full py-4 rounded-xl font-bold text-lg shadow-lg">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;