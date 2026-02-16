import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

// Custom X (Twitter) Icon since Lucide's default varies
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#02040a] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#4338ca] rounded flex items-center justify-center text-white font-bold">M</div>
              <span className="text-white font-semibold text-lg">Monimata</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Monimata brings institutional-grade wealth management to your fingertips.
            </p>
            <div className="flex gap-3">
              {[<Facebook size={18}/>, <XIcon />, <Linkedin size={18}/>, <Instagram size={18}/>].map((icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-bold mb-6">Home</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Products Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How To Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Key Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Home</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Desktop App</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">All Pages</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">App</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Download Column */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6">Download Our App</h4>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2 hover:bg-white/10 transition-all text-left group">
                <div className="text-indigo-500 group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,14.11C20.31,13.17 20.31,10.83 18.66,9.89L16.81,8.88L14.39,11.3L16.81,15.12M13.69,12L15.4,10.29L13.69,8.58L12,10.29L13.69,12Z"/></svg>
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase">Get it on</div>
                  <div className="text-sm font-bold text-white">Google Play</div>
                </div>
              </button>
              
              <button className="w-full flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2 hover:bg-white/10 transition-all text-left group">
                <div className="text-white group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.07,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/></svg>
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase">Download on the</div>
                  <div className="text-sm font-bold text-white">App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center justify-center text-gray-500 text-sm">
          <p>© {currentYear} Monimata. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;