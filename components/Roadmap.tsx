
import React, { useState } from 'react';

interface RoadmapItemProps {
  phase: string;
  title: string;
  content: string;
  icon: React.ReactNode;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ phase, title, content, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[#0052FF]/50 mb-3 rounded-lg group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-5">
          <div className={`p-2.5 rounded-lg border transition-all duration-500 ${isOpen ? 'bg-[#0052FF] border-[#0052FF] shadow-[0_0_15px_rgba(0,82,255,0.4)]' : 'bg-white/5 border-white/10 group-hover:border-[#0052FF]/50'}`}>
            {icon}
          </div>
          <div>
            <span className="text-[9px] font-mono text-[#0052FF] uppercase tracking-[0.4em] font-black mb-1 block">
              {phase}
            </span>
            <h3 className="text-lg md:text-xl font-black text-white tracking-tighter uppercase italic pr-4" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
              {title}
            </h3>
          </div>
        </div>
        <div className={`transition-all duration-500 ${isOpen ? 'rotate-180 text-[#0052FF]' : 'text-white/20'}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 border-t border-white/10' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="p-6 text-white/70 leading-relaxed text-base font-bold">
          {content}
        </div>
      </div>
    </div>
  );
};

export const Roadmap: React.FC = () => {
  const [activePhilosophy, setActivePhilosophy] = useState<null | number>(null);

  const philosophies = [
    {
      title: "ENDURE",
      short: "Surviving cycles is the ultimate utility. We choose longevity over noise.",
      detail: "In a market where 99% of tokens vanish within 12 months, the act of remaining is a revolutionary utility. FOO is engineered on the Base L2 stack with immutable code to ensure that as long as the blockchain exists, FOO exists. We architect for resilience.",
      color: "#0052FF"
    },
    {
      title: "UTILIZE",
      short: "Built for movement. From internal rails to community merchandise.",
      detail: "Speculation is the entry point, but utility is the anchor. FOO is designed to move. We are developing seamless payment rails for the Fooker ecosystem—enabling peer-to-peer commerce for apparel and digital assets without intermediaries.",
      color: "#6E00FF"
    },
    {
      title: "EVOLVE",
      short: "Growing surely alongside a community that actually cares.",
      detail: "Decentralized systems are biological. We do not force adoption through paid marketing; we nurture growth through cultural relevance. Evolution means the community builds tools and art we haven't even imagined yet.",
      color: "#00C2FF"
    }
  ];

  const roadmapData = [
    {
      phase: "Phase 1",
      title: "Chaos & Culture",
      content: "Fooker begins with memes and degen culture. Our focus is forging a solid identity. In this phase, FOO acts as a symbol of unity and the fuel for social interaction. No empty promises—just organic growth.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      phase: "Phase 2",
      title: "Logical Utility",
      content: "Experimenting with practical use-cases. Exploring FOO as a payment tool within the Fooker ecosystem, specifically for apparel and community branded products.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      phase: "Phase 3",
      title: "Ecosystem Growth",
      content: "Anticipating community platforms, creator collaborations, and Web3 experiments relevant to degen culture beyond just a token.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      phase: "Phase 4",
      title: "Sustainability",
      content: "Resilience. To remain relevant when hype cycles shift and to thrive because the community chooses to use it.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const arialBlackStyle = { fontFamily: '"Arial Black", Gadget, sans-serif', fontWeight: 'bold' };

  return (
    <section className="py-10 max-w-7xl mx-auto px-6 relative">
      <div className="mb-8 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-2 italic pr-6" style={arialBlackStyle}>
          Fooker <span className="gradient-text">Roadmap</span>
        </h2>
        <p className="text-lg text-white/50 max-w-2xl font-bold">
          Directional journey built with the community, moving with market energy.
        </p>
      </div>

      {/* Roadmap List Dropdown (Compact) */}
      <div className="max-w-4xl mx-auto mb-16">
        {roadmapData.map((item, index) => (
          <RoadmapItem 
            key={index}
            phase={item.phase}
            title={item.title}
            content={item.content}
            icon={item.icon}
          />
        ))}
      </div>

      {/* Protocol Philosophy (Horizontal Cards with Hook Effect) */}
      <div className="mt-10">
        <div className="max-w-5xl mx-auto mb-8">
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic border-l-4 border-[#0052FF] pl-6 pr-6" style={arialBlackStyle}>
            Protocol <span className="text-[#0052FF]">Philosophy</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophies.map((p, i) => (
            <div 
              key={i} 
              onClick={() => setActivePhilosophy(i)}
              className="flex flex-col bg-white/[0.02] border border-white/10 p-8 rounded-2xl transition-all duration-500 cursor-pointer group hover:-translate-y-3 hover:bg-white/[0.04] hover:border-[#0052FF]/50 hover:shadow-[0_20px_50px_rgba(0,82,255,0.1)] relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0052FF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="space-y-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#0052FF] rounded-full animate-pulse group-hover:scale-125 transition-transform"></div>
                </div>
                
                <h4 className="text-3xl font-black italic uppercase tracking-tighter text-white group-hover:text-[#0052FF] transition-colors leading-none pr-4" style={arialBlackStyle}>
                  {p.title}
                </h4>
                
                <p className="text-sm md:text-base text-white/50 leading-relaxed font-bold flex-1">
                  {p.short}
                </p>
                
                <div className="pt-6 border-t border-white/5">
                  <button 
                     className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0052FF] group-hover:text-white transition-colors flex items-center gap-3"
                  >
                     <span>LEARN MORE</span>
                     <span className="text-lg group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FUTURE MARKETPLACE SECTION */}
      <div className="mt-20 border-t border-white/10 pt-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-yellow-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6 animate-pulse">
              System Objective // Marketplace 🔓
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-4 italic leading-none pr-8" style={arialBlackStyle}>
              FUTURE <br />
              <span className="gradient-text">MARKETPLACE</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
              <div className="lg:col-span-7 space-y-6">
                <p className="text-xl md:text-2xl text-white font-bold italic leading-tight">
                  The Fooker marketplace is not launched by hype. <br />
                  <span className="text-white/40">It activates when the community proves it is alive.</span>
                </p>
                
                <div className="p-8 border border-[#0052FF]/20 bg-[#0052FF]/5 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                    <svg className="w-20 h-20 text-[#0052FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <p className="text-lg text-white/80 leading-relaxed font-bold relative z-10">
                    Once the ecosystem reaches <span className="text-[#0052FF] underline decoration-2 underline-offset-4">5,000 holders</span> and shows sustained on-chain and off-chain activity, the Fooker marketplace begins its next phase.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-white/40 font-black uppercase tracking-widest text-xs">Primary Function:</p>
                  <p className="text-lg text-white/90 leading-relaxed font-bold">
                    This marketplace is not designed for speculation. <br />
                    It is designed for <span className="text-[#0052FF] italic uppercase tracking-tighter pr-2">use</span>.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl space-y-6">
                  <p className="text-xs font-mono text-white/30 uppercase tracking-[0.4em]">Protocol Rails // Coordination</p>
                  <div className="space-y-4">
                    {[
                      { icon: "🛍️", text: "Community merchandise" },
                      { icon: "🎨", text: "Meme assets and digital culture" },
                      { icon: "🛠️", text: "Peer-to-peer services and experiments" },
                      { icon: "💧", text: "Creator-driven drops decided by demand" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:bg-[#0052FF]/20 group-hover:border-[#0052FF]/40 transition-all">
                          {item.icon}
                        </div>
                        <span className="text-xs sm:text-sm font-black text-white/70 uppercase tracking-widest group-hover:text-white transition-colors">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              { title: "No central curator", desc: "Logic dictates the shelf." },
              { title: "No featured listings", desc: "Organic visibility only." },
              { title: "No forced utility", desc: "Value is purely voluntary." }
            ].map((card, i) => (
              <div key={i} className="p-6 border border-white/5 bg-white/[0.01] rounded-xl hover:border-white/10 transition-colors">
                <h4 className="text-white font-black uppercase tracking-tighter text-lg mb-2 italic pr-2">{card.title}</h4>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* EXPERIMENTAL MEME PAYMENTS IMAGE SECTION */}
          <div className="mt-12 pt-8 border-t border-white/5 relative group">
            <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,82,255,0.1)] transition-all duration-700 hover:border-[#0052FF]/40 hover:scale-[1.01] bg-black/40">
              <div className="relative aspect-[21/9] md:aspect-[3/1]">
                <img 
                  src="https://gateway.pinata.cloud/ipfs/bafkreifhn5g6v6wx43rp3sc2o7rj4x57hqy6ysdnd5umcv5dgtmaihriyq" 
                  alt="Experimental Meme Payments" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 blur-[0.5px] group-hover:blur-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#0052FF] font-mono text-[8px] md:text-[10px] font-black tracking-[0.4em] uppercase">Experimental Meme Payments</span>
                    <h3 className="text-white text-xl md:text-4xl font-black italic uppercase tracking-tighter" style={arialBlackStyle}>
                      FOR <span className="text-[#0052FF]">ECOSYSTEM</span>
                    </h3>
                  </div>
                </div>
                
                {/* Tech scanline effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#0052FF]/20 blur-sm animate-[scan_4s_linear_infinite] pointer-events-none"></div>
              </div>
            </div>
            
            <style>{`
              @keyframes scan {
                0% { top: 0%; }
                100% { top: 100%; }
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* Compact Philosophy Modal */}
      {activePhilosophy !== null && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-3xl" onClick={() => setActivePhilosophy(null)}></div>
          <div className="relative max-w-lg w-full bg-[#050505] border border-white/10 p-8 rounded-2xl shadow-[0_0_60px_rgba(0,82,255,0.15)]">
            <button onClick={() => setActivePhilosophy(null)} className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            
            <span className="text-[#0052FF] font-mono text-[10px] font-black tracking-widest mb-4 block">TERMINAL_DETAIL_SECURE</span>
            <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-4 pr-4" style={arialBlackStyle}>
              {philosophies[activePhilosophy].title}
            </h3>
            <p className="text-base text-white/70 leading-relaxed font-bold mb-8">
              {philosophies[activePhilosophy].detail}
            </p>
            <button 
              onClick={() => setActivePhilosophy(null)}
              className="w-full py-3 bg-[#0052FF] text-white font-black uppercase tracking-widest rounded-lg hover:bg-[#0042CC] transition-all"
            >
              Exit Terminal
            </button>
          </div>
        </div>
      )}

      <div className="mt-10"></div>
    </section>
  );
};
