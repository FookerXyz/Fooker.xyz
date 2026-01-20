import React from 'react';

export const DisclosureView: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-6 font-mono">
      <div className="mb-16 border-b border-white/10 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-widest mb-6">
          Identity // Anonymous Architecture
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white uppercase leading-none">
          TEAM <span className="gradient-text">DISCLOSURE</span>
        </h1>
        <p className="text-white/40 text-xs tracking-widest uppercase">
          Protocol Origins and Human Context
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Core Narrative */}
        <div className="lg:col-span-7 space-y-8 text-white/70 leading-relaxed">
          <p className="text-xl text-white font-medium italic border-l-4 border-[#0052FF] pl-6">
            Fooker is initiated and supported by anonymous contributors.
          </p>
          <p>
            The individuals involved in the early formation of Fooker chose to remain anonymous by design. Their role was limited to defining the initial intent, principles, and deployment of the FOO token. This decision aligns with the values of decentralization, permissionless participation, and reduced reliance on individual identity.
          </p>
          <p>
            Beyond this initial context-setting phase, FOO exists as a public token. There is no official team, no leadership structure, and no entity with special authority over the token or its smart contract.
          </p>
        </div>

        {/* Status Grid */}
        <div className="lg:col-span-5">
          <div className="p-8 border border-white/10 bg-white/[0.02] rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <svg className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3m0 18a10.003 10.003 0 01-9.571-5.944M12 21c3.517 0 6.799-1.009 9.571-2.753m0 0l-.09-.054A10.003 10.003 0 0121 12m0 0c0-3.517-1.009-6.799-2.753-9.571m-3.44 2.04l.054.09A10.003 10.003 0 0012 3m0 0c-3.517 0-6.799 1.009-9.571 2.753" />
               </svg>
            </div>
            
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
               <span className="w-2 h-2 bg-[#0052FF] rounded-full"></span>
               Contributor Constraints
            </h3>
            
            <ul className="space-y-6">
              {[
                "Do not control the token",
                "Do not have ongoing power",
                "Do not possess special privileges",
                "Do not guarantee outcomes"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <span className="text-[#0052FF] font-black text-xs">0{i+1}</span>
                  <span className="text-xs uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Final Disclaimer */}
        <div className="lg:col-span-12 mt-12">
          <div className="p-10 border border-[#0052FF]/20 bg-[#0052FF]/5 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h4 className="text-white font-black uppercase tracking-tight text-xl mb-2">Decentralized Responsibility</h4>
              <p className="text-sm text-white/40 leading-relaxed max-w-xl">
                All participation is voluntary. Users interact with Fooker based on their own judgment and at their own risk.
              </p>
            </div>
            <div className="flex gap-4">
               <div className="px-6 py-3 border border-white/10 bg-black/40 text-[10px] font-bold text-white uppercase tracking-[0.2em]">
                  Status: Autonomous
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
        <p className="text-[9px] text-white/20 uppercase tracking-[0.8em]">
          ARCHIVE REF: ANONYMOUS_ORIGINS_DISCLOSURE
        </p>
      </div>
    </div>
  );
};