import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Free Plan",
    price: "0",
    description: "Best for: Getting started with money management",
    features: [
      "Connect up to 3 accounts",
      "Basic budget tracking",
      "Expense categorization",
      "Financial health score",
      "Mobile app access",
    ],
    buttonText: "Get Started",
    isFeatured: false,
  },
  {
    name: "Pro Plan",
    price: "12",
    description: "Best for: Serious investors looking to scale",
    features: [
      "Unlimited account connections",
      "Investment portfolio tracking",
      "Custom savings goals (unlimited)",
      "Advanced analytics & reports",
      "Priority customer support",
    ],
    buttonText: "Upgrade to Pro",
    isFeatured: true,
  },
  {
    name: "Elite Plan",
    price: "29",
    description: "Best for: High net-worth individuals and families",
    features: [
      "Everything in Pro",
      "Dedicated financial advisor (1 session/month)",
      "Multi-currency support",
      "Family account sharing (up to 5 members)",
      "API access for integrations",
    ],
    buttonText: "Go Elite",
    isFeatured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-[#02040a] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Everything You Need To Master Your Wealth
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Powerful tools designed for the modern investor who demands more from their money.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-[2rem] p-8 border transition-all duration-500 flex flex-col h-full overflow-hidden
                ${plan.isFeatured 
                  ? "bg-gradient-to-b from-[#0f172a] to-[#020617] border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.15)] scale-105 z-10" 
                  : "bg-[#0a0c14] border-white/5 hover:border-white/10"
                }`}
            >
              {/* Top Spotlight Glow (Matches the screenshot's top-center light) */}
              {plan.isFeatured && (
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-400/20 blur-[80px] rounded-full pointer-events-none" />
              )}

              {/* Plan Details */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed min-h-[40px]">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  {plan.price !== "0" && <span className="text-gray-400 text-lg">/Month</span>}
                </div>

                {/* Action Button */}
                <button
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm mb-10 transition-all active:scale-[0.98] border
                    ${plan.isFeatured 
                      ? "bg-[#d1d5db] text-black border-transparent hover:bg-white" 
                      : "bg-transparent text-white border-white/20 hover:bg-white/5"
                    }`}
                >
                  {plan.buttonText}
                </button>

                {/* Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center 
                        ${plan.isFeatured ? "bg-blue-500/20" : "bg-white/5"}`}>
                        <Check 
                          size={14} 
                          className={plan.isFeatured ? "text-blue-400" : "text-gray-400"} 
                        />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;