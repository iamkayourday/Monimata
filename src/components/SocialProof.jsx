const logos = [
  { name: "SDlide", icon: "▲" },
  { name: "Silvodi", icon: "■" },
  { name: "Dazxity", icon: "D" },
  { name: "SONUY.J", icon: "S" },
  { name: "Jaxuarel", icon: "●" },
  { name: "Xaviel", icon: "▲" },
];

const SocialProof = () => {
  return (
    <section className="bg-[#02040a] py-20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-white text-xl md:text-2xl font-medium mb-12 opacity-90">
          Trusted by 14,000 Business Owners
        </h2>

        {/* Logo Grid */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 cursor-default"
            >
              <span className="text-white text-xl font-bold">{logo.icon}</span>
              <span className="text-white text-lg font-semibold tracking-tight">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;