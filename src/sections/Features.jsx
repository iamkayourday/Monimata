import { 
  BarChart3, 
  Briefcase, 
  Lightbulb, 
  Target, 
  LayoutDashboard, 
  ShieldCheck 
} from "lucide-react";

const featuresData = [
  {
    icon: <BarChart3 size={22} />,
    title: "Smart Budget Tracking",
    desc: "Automatically categorize expenses and track spending patterns across all your accounts in real-time.",
    isHighlighted: true,
  },
  {
    icon: <Briefcase size={22} />,
    title: "Portfolio Management",
    desc: "Monitor your investments, track performance, and get AI-powered recommendations to optimize your portfolio.",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Financial Insights & Analytics",
    desc: "Discover hidden spending patterns, predict cash flow, and receive personalized insights to make smarter decisions.",
  },
  {
    icon: <Target size={22} />,
    title: "Automated Savings Goals",
    desc: "Set goals, automate contributions, and watch your progress with visual timelines that keep you motivated.",
  },
  {
    icon: <LayoutDashboard size={22} />,
    title: "Net Worth Dashboard",
    desc: "See your complete financial picture, all assets, liabilities, and investments, in one comprehensive view.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Bank-Level Security",
    desc: "Your data is protected with 256-bit encryption, multi-factor authentication, and real-time fraud monitoring.",
  },
];

const Features = () => {
  return (
    <section id="technology" className="py-24 bg-[#02040a] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Track, Grow, and Master Your Money
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Powerful tools designed for the modern investor who demands more from their money.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuresData.map((f, i) => (
            <div
              key={i}
              className={`relative p-10 rounded-[2.5rem] border transition-all duration-300 flex flex-col items-center text-center group
                ${f.isHighlighted 
                  ? "bg-gradient-to-br from-[#121431] to-[#05070a] border-white/20 shadow-[0_0_40px_rgba(79,70,229,0.1)]" 
                  : "bg-[#05070a] border-white/10 hover:border-white/20"
                }`}
            >
              {/* Feature Glow (Top right corner of the highlighted card) */}
              {f.isHighlighted && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/30 blur-[50px] rounded-full -mr-10 -mt-10" />
              )}

              {/* Icon Container */}
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 text-gray-300 group-hover:text-white group-hover:scale-110 transition-all">
                {f.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-white mb-4">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;