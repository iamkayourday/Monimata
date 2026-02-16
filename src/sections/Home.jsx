import { Play } from "lucide-react";
import SocialProof from "../components/SocialProof";

const Home = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 overflow-hidden bg-[#02040a]"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8">
          <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]" />
          <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">
            Be wise with your money
          </span>
        </div>

        {/* Hero Content */}
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-6 leading-[1.1]">
          Where Smart Money <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">
            Gets Smarter
          </span>
        </h1>

        <p className="text-gray-400 text-center max-w-2xl text-lg mb-10 leading-relaxed">
          Monimata brings institutional-grade wealth management to your
          fingertips. Track every dollar, multiply your investments, and build
          the financial future you deserve.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
          <button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20 cursor-pointer active:scale-95">
            Get Started for Free
          </button>
          <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-3.5 rounded-xl font-bold transition-all cursor-pointer active:scale-95">
            <Play size={18} fill="currentColor" />
            Watch Demo
          </button>
        </div>

        {/* Dashboard Image Mockup */}
        <div className="relative w-full max-w-5xl group">
          {/* Outer Glow for the Image */}
          {/* <div className="absolute -inset-1 bg-linear-to-b from-indigo-500/20 to-transparent rounded-[2.5rem] blur-2xl opacity-50 transition duration-1000 group-hover:opacity-75" /> */}

          <div className="relative rounded-4xl border-b border-white/10 bg-[#15171c] overflow-hidden shadow-2xl drop-shadow-[0_10px_20px_rgba(255,255,255,0.3)]">
            <img
              src="/home.avif"
              alt="Monimata Dashboard"
              className="w-full rounded-[1.5rem] md:h-110 h-40 opacity-90 object-cover object-top"
            />

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#02040a] via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
      <SocialProof />
    </section>
  );
};

export default Home;
