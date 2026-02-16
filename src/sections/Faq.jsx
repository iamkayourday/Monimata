import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "1. How is Monimata different from finance apps?",
    answer: "Monimata is an all-in-one wealth management platform that helps you track spending, manage budgets, and achieve your financial goals—all in one place."
  },
  {
    question: "2. How is Monimata different from finance apps?",
    answer: "Unlike traditional apps, we focus on institutional-grade analytics and long-term wealth building rather than just simple expense logging."
  },
  {
    question: "3. Is my financial data safe?",
    answer: "Yes. We use bank-level AES-256 encryption and multi-factor authentication to ensure your data remains private and secure."
  },
  {
    question: "4. Can Monimata access my money or make transactions?",
    answer: "No. Monimata has read-only access to your accounts via secure APIs. We can never move your money or authorize transactions."
  },
  {
    question: "5. How long does it take to set up?",
    answer: "Setup usually takes less than 2 minutes. Simply connect your primary accounts and our AI will begin analyzing your wealth immediately."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-[#02040a] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 mb-5">
          
          {/* Left Side */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 mb-8">Everything you need to know about Monimata</p>
            <button className="bg-[#4338ca] hover:bg-[#3730a3] text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/10">
              Contact Us
            </button>
          </div>

          {/* Right Side - Accordion */}
          <div className="lg:w-2/3 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="rounded-2xl overflow-hidden transition-all duration-300 border border-white/5"
                style={{ 
                  background: 'linear-gradient(to right, #1e293b, #4338ca)',
                  opacity: openIndex === index ? 1 : 0.8 
                }}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full p-6 flex items-center justify-between text-left text-white font-semibold"
                >
                  <span className="text-lg">{faq.question}</span>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-2 text-indigo-100/80 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Footer Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-20 border-t border-white/5">
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-md leading-tight">
            Never miss a wealth-building opportunity
          </h2>
          
          <div className="w-full max-w-xl">
            <p className="text-gray-400 text-sm mb-4">Get weekly tips and updates delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your Email" 
                className="flex-1 bg-[#0a0c1a] border border-white/10 rounded-xl px-10 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button className="bg-[#4338ca] hover:bg-[#3730a3] text-white px-8 py-3 rounded-xl font-bold transition-all">
                Contact Us
              </button>
            </div>
            <p className="text-[10px] text-gray-500 mt-4">
              By subscribing, you agree to our <span className="underline cursor-pointer">privacy policy</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;