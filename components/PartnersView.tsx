
import React from 'react';

export const PartnersView: React.FC = () => {
  const arialBlackStyle = { fontFamily: '"Arial Black", Gadget, sans-serif', fontWeight: 'bold' };

  return (
    <div className="min-h-screen bg-black">
      <div className="pt-32 pb-24 max-w-6xl mx-auto px-6 font-sans">
        {/* Header Section */}
        <div className="mb-20 border-b border-white/10 pb-16 relative">
          <div className="absolute top-0 right-0">
             <div className="px-4 py-2 border border-yellow-500/50 bg-yellow-500/10 text-yellow-500 text-[10px] font-black uppercase tracking-[0.4em] rounded-sm animate-pulse">
                System Status: Development 🏗️
             </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0052FF]/30 bg-[#0052FF]/10 text-[#0052FF] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            Operational Stack // Infrastructure 🏛️
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-white uppercase leading-[0.9] italic" style={arialBlackStyle}>
            PARTNERS & <br />
            <span className="gradient-text">INFRASTRUCTURE</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed font-light">
            Collaborative technical foundations for the next generation of decentralized AI services. ⚡
          </p>
        </div>

        <div className="space-y-24">
          
          {/* Section 1: Partnerships */}
          <section className="relative">
            <div className="flex items-center gap-4 mb-10 text-[#0052FF]">
               <div className="w-12 h-[1px] bg-current"></div>
               <h2 className="text-3xl font-black text-white tracking-tighter  italic" style={arialBlackStyle}>
                  FookAI & Ecosystem Partnerships 🤝
               </h2>
            </div>
            
            <div className="p-10 bg-white/[0.02] border border-white/10 rounded-2xl">
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                <strong className="text-white">FookAI</strong> is operated by <strong className="text-[#0052FF]">FookerNetwork</strong> and may collaborate with third-party technology providers, infrastructure platforms, or service partners as part of its operational stack.
              </p>
              <p className="text-white/50 mb-10">These collaborations are strictly limited to service delivery, infrastructure, and technical operations.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                   { label: "Financial partnerships", status: "NONE" },
                   { label: "Token endorsements", status: "NONE" },
                   { label: "Revenue-sharing agreements", status: "NONE" },
                   { label: "Token authority", status: "NONE" }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between p-4 bg-black/40 border border-white/5 rounded-lg">
                      <span className="text-[10px] uppercase tracking-widest text-white/40">{item.label}</span>
                      <span className="text-[10px] font-black text-red-500 tracking-widest">{item.status}</span>
                   </div>
                 ))}
              </div>
              <p className="mt-8 text-xs font-mono text-white/30 uppercase tracking-[0.2em] italic">
                 All partnerships exist at the service and infrastructure layer, fully independent from the FOO token.
              </p>
            </div>
          </section>

          {/* Section 2: Data Terminal */}
          <section>
            <div className="flex items-center gap-4 mb-10 text-[#0052FF]">
               <div className="w-12 h-[1px] bg-current"></div>
               <h2 className="text-3xl font-black text-white tracking-tighter  italic" style={arialBlackStyle}>
                  FookAI — Intelligent Data Terminal 🧠
               </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                 <p className="text-white/70 text-lg leading-relaxed">
                   FookAI is an AI service layer built to support developers, institutions, and learners through practical, cost-aware AI access.
                 </p>
                 <div className="inline-block px-6 py-2 bg-[#0052FF] text-white text-[10px] font-black uppercase tracking-widest rounded-sm">
                    COMING SOON: 
                 </div>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: "⚡", text: "Low-latency inference optimized for real-time usage" },
                  { icon: "📉", text: "Cost-efficient computation layers, focused on affordability" },
                  { icon: "🤖", text: "Machine learning assistance for research and development" },
                  { icon: "🖼️", text: "High-quality image generation (Terminal1)" },
                  { icon: "🎙️", text: "Voice and assistant APIs for interactive apps" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 p-4 border border-white/5 bg-white/[0.01] rounded-xl group hover:border-[#0052FF]/30 transition-colors">
                     <span className="text-xl">{item.icon}</span>
                     <span className="text-sm text-white/60 leading-relaxed group-hover:text-white transition-colors">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 3: API Terminal */}
          <section className="p-12 border border-[#0052FF]/20 bg-[#0052FF]/5 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
               <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z"/></svg>
            </div>

            <div className="flex items-center gap-4 mb-8 text-white">
               <h2 className="text-4xl font-black tracking-tighter  italic" style={arialBlackStyle}>
                  FookAI API Terminal 
               </h2>
            </div>
            
            <div className="space-y-10 relative z-10">
              <p className="text-white/80 text-xl leading-relaxed max-w-4xl">
                The <strong className="text-white">FookAI API Terminal</strong> is a developer-facing access layer for interacting with AI models. Designed for builders, researchers, and institutions who need reliable AI access without the noise.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-4">
                    <h4 className="text-white font-black uppercase text-xs tracking-[0.3em]">Cost & Pricing Control 💳</h4>
                    <p className="text-sm text-white/50 leading-relaxed">
                      Pricing is configured at the ecosystem level based on actual computation. No forced tiers or token-ownership requirements. Experimental, affordable, and transparent.
                    </p>
                 </div>
                 <div className="space-y-4">
                    <h4 className="text-white font-black uppercase text-xs tracking-[0.3em]">Access Model 🔑</h4>
                    <p className="text-sm text-white/50 leading-relaxed">
                      Unique, rate-limited API keys issued per wallet. Utility-based service that operates independently from the FOO token contract logic.
                    </p>
                 </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                 <div className="bg-black/40 p-6 rounded-xl border border-white/5 font-mono text-[11px] text-[#0052FF] italic">
                    "FookAI API Terminal exists to lower the barrier to building. If people use it, it grows. If they don’t, it does not force itself into relevance."
                 </div>
              </div>
            </div>
          </section>

          {/* FAQ & Subscription Guide */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
             <div className="lg:col-span-7 space-y-10">
                <h3 className="text-2xl font-black text-white uppercase italic" style={arialBlackStyle}>FAQ: API TERMINAL 📂</h3>
                <div className="space-y-8">
                   {[
                     { q: "Which models are used?", a: "FookAI currently operates on Gemini-based models, optimized at the infrastructure layer." },
                     { q: "Is FOO required?", a: "No. The API is a standalone ecosystem service independent from the token." },
                     { q: "Is it permissionless?", a: "Open access via API keys for fair usage and system stability." },
                     { q: "Can pricing change?", a: "Yes, adjusted to reflect infrastructure and computation costs." }
                   ].map((item, i) => (
                     <div key={i} className="border-l-2 border-[#0052FF] pl-6">
                        <h5 className="text-white font-bold text-sm mb-2 uppercase">{item.q}</h5>
                        <p className="text-white/50 text-xs leading-relaxed">{item.a}</p>
                     </div>
                   ))}
                </div>
             </div>

             <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 p-10 rounded-2xl">
                <h3 className="text-2xl font-black text-[#0052FF] uppercase italic mb-8" style={arialBlackStyle}>SUBSCRIPTION GUIDE </h3>
                <div className="space-y-6">
                   {[
                     "Visit the Pricing Page",
                     "Choose Your Access Method",
                     "Select a Plan",
                     "Complete Payment",
                     "Generate Your API Key",
                     "Start Building"
                   ].map((step, i) => (
                     <div key={i} className="flex items-center gap-4 group">
                        <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-black group-hover:border-[#0052FF] group-hover:text-[#0052FF] transition-colors">{i+1}</span>
                        <span className="text-xs uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{step}</span>
                     </div>
                   ))}
                </div>
                <button className="w-full mt-10 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#0052FF] hover:text-white transition-all rounded-sm shadow-xl">
                   Cooming soon
                </button>
             </div>
          </section>

          {/* Legal Disclaimer Section */}
          <section className="pt-16 border-t border-white/10">
            <div className="bg-red-950/20 border border-red-500/20 p-8 md:p-12 rounded-2xl">
              <h3 className="text-red-500 font-black uppercase text-sm tracking-[0.3em] mb-8 flex items-center gap-3" style={arialBlackStyle}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Legal Disclaimer ⚠️
              </h3>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed font-mono">
                Fooker (FOO) is a public, immutable ERC20 token and is not an investment product, security, financial instrument, or promise of returns. Nothing on this website constitutes financial, legal, or investment advice. The FOO token has no owner, no issuer, and no entity with authority over its supply, rules, or behavior beyond its deployed smart contract. Any services, platforms, tools, or infrastructure referenced herein, including but not limited to FookAI, FookAI API Terminal, marketplaces, or merchandise, are operated independently by third parties such as FookerNetwork and do not modify, manage, or control the FOO token. Participation in the Fooker ecosystem is voluntary and at the sole risk of each participant. Users acknowledge that cryptocurrency assets involve significant risk, including loss of value, volatility, regulatory uncertainty, and technical failure. No guarantees, representations, or warranties are made regarding outcomes, performance, or future development.
              </p>
            </div>
          </section>

        </div>

        <div className="mt-32 text-center">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.8em] font-mono">
            END OF INFRASTRUCTURE DOCUMENTATION // FOOKER ARCHIVE 🏛️
          </p>
        </div>
      </div>
    </div>
  );
};
