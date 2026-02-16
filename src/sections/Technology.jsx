import { Cpu, Globe, Lock, Zap } from "lucide-react";

const techStack = [
  {
    icon: <Lock className="text-indigo-400" />,
    title: "AES-256 Encryption",
    desc: "We use the same encryption standards as global banks to ensure your financial data never touches the open web in plain text."
  },
  {
    icon: <Zap className="text-indigo-400" />,
    title: "Low-Latency Sync",
    desc: "Our proprietary 'Moni-Sync' engine refreshes your accounts every 60 seconds, giving you a true real-time net worth."
  },
  {
    icon: <Globe className="text-indigo-400" />,
    title: "Global API Mesh",
    desc: "Connected to over 12,000 financial institutions worldwide via Plaid and Salt Edge for seamless global coverage."
  },
  {
    icon: <Cpu className="text-indigo-400" />,
    title: "AI Forecasting Engine",
    desc: "Built on custom ML models that predict your end-of-month balance with 98.4% accuracy based on historical spend."
  }
];

const Technology = () => {
  return (
    <section id="features" className="py-24 bg-[#02040a] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Text */}
          <div className="lg:w-1/2">
            <h2 className="text-indigo-500 font-semibold tracking-widest uppercase text-sm mb-4">Our Infrastructure</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Built on the backbone of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">modern finance.</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Monimata isn't just a dashboard; it's a high-performance financial engine designed for reliability and impenetrable security.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {techStack.map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-center gap-3 text-white font-bold">
                    {item.icon}
                    {item.title}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Technical "Visual" */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-indigo-600/10 blur-[100px] rounded-full" />
            <div className="relative border border-white/10 bg-[#0a0c1a] rounded-[2rem] p-8 overflow-hidden group">
               {/* Decorative Code/Graph snippet placeholder */}
               <div className="space-y-4 font-mono text-xs text-indigo-300/50">
                  <p>{"{ \"status\": \"secure\", \"encryption\": \"AES-256\" }"}</p>
                  <div className="h-[1px] w-full bg-white/5" />
                  <p>{"[SYSTEM]: Syncing with 12,402 endpoints..."}</p>
                  <div className="flex gap-2">
                    <div className="h-20 w-1/3 bg-indigo-500/20 rounded-lg animate-pulse" />
                    <div className="h-20 w-2/3 bg-indigo-500/10 rounded-lg" />
                  </div>
                  <p>{"[AI]: Generating wealth forecast for 2026..."}</p>
                  <div className="h-32 w-full bg-gradient-to-t from-indigo-500/5 to-transparent border border-indigo-500/20 rounded-xl" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Technology;