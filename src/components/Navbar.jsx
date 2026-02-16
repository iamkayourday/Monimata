import { Link } from "react-scroll";

const Navbar = () => {
  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Technology", to: "technology" },
    { name: "Pricing", to: "pricing" },
    { name: "Features", to: "features" },
    { name: "FAQ", to: "faq" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#000211]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-[#3B33C0] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">
            Monimata
          </span>
        </div>

        {/* Navigation Links */}
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

        {/* Action Buttons */}
        <div className="flex items-center gap-8">
          <button className="text-gray-300 hover:text-white transition-colors text-sm font-medium cursor-pointer">
            Log In
          </button>
          <button className="bg-[#3B33C0] cursor-pointer hover:bg-[#4338ca] text-white px-7 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-lg active:scale-95">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;