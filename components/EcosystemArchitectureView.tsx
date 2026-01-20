
import React from 'react';

export const EcosystemArchitectureView: React.FC = () => {
  const arialBlackStyle = { fontFamily: '"Arial Black", Gadget, sans-serif', fontWeight: 'bold' };

  return (
    <div className="min-h-screen bg-black">
      <div className="pt-32 pb-24 max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-20 border-b border-white/10 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0052FF]/30 bg-[#0052FF]/10 text-[#0052FF] text-[10px] font-bold  tracking-[0.3em] mb-8">
            System Protocol // v1.0 🌐
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-white  leading-[0.9] italic" style={arialBlackStyle}>
            ECOSYSTEM <br />
            <span className="gradient-text">ARCHITECTURE</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed font-light">
            Defining the boundaries between immutable code and voluntary infrastructure. ⚡
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Core Layers Section */}
          <div className="lg:col-span-12 space-y-12">
            <section className="relative p-10 bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                 </svg>
              </div>

              <h2 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase flex items-center gap-3" style={arialBlackStyle}>
                 <span className="text-[#0052FF]">01.</span> The Two-Layer Paradigm ⚡
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-white/80 leading-relaxed text-lg">
                    Fooker consists of two clearly separated layers: the <strong className="text-white">FOO token</strong>, and the <strong className="text-[#0052FF]">ecosystem built around it</strong>.
                  </p>
                  <div className="p-6 border border-[#0052FF]/20 bg-[#0052FF]/5 rounded-xl">
                    <h4 className="text-[#0052FF] font-black text-sm uppercase mb-3 tracking-widest">LAYER: FOO TOKEN</h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      A public, immutable ERC20 asset. No owner, no administrator, no governance mechanism. Behavior is enforced entirely by code.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-[#0052FF] rounded-full"></span>
                     Ecosystem Scope 🧠
                  </h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {[
                      "FookAI & FookAI API Terminal",
                      "Peer-to-peer marketplaces on Base",
                      "Merchandise and community goods",
                      "Developer-facing services & tools",
                      "Educational initiatives"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-white/70 uppercase">
                         <span className="text-[#0052FF]">{" >> "}</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* FookerNetwork Role Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <div className="p-10 border border-white/10 bg-white/[0.03] rounded-2xl flex flex-col justify-center">
                <h2 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase" style={arialBlackStyle}>
                  Role of FookerNetwork 🧠
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  FookerNetwork is an independent organization operating infrastructure. It acts as an <strong className="text-white">ecosystem operator</strong>, not a token authority.
                </p>
                <div className="space-y-4 font-mono text-xs">
                   <div className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">[DOES]</span>
                      <span className="text-white/50">Develop FookAI Terminal, maintain marketplaces, and coordinate experimental initiatives.</span>
                   </div>
                   <div className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">[DOES NOT]</span>
                      <span className="text-white/50">Control the FOO token, hold administrative privileges, or set supply rules.</span>
                   </div>
                </div>
              </div>

              <div className="p-10 bg-[#0052FF] text-white rounded-2xl relative overflow-hidden flex flex-col justify-center shadow-[0_0_50px_rgba(0,82,255,0.2)]">
                 <div className="absolute top-0 right-0 p-6 opacity-20">
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5M2 12l10 5 10-5" />
                    </svg>
                 </div>
                 <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter" style={arialBlackStyle}>Independence ⚡</h3>
                 <p className="text-white/80 font-medium leading-relaxed">
                   Use of FookerNetwork-operated services is <span className="underline decoration-2 underline-offset-4">optional</span> and completely independent from holding FOO tokens.
                 </p>
              </div>
            </section>

            {/* Sustainability & Coordination Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 border border-white/10 bg-black/40 rounded-2xl space-y-6">
                <h3 className="text-xl font-black text-[#0052FF] uppercase tracking-widest flex items-center gap-3">
                   Value Flow 💹
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Activity within ecosystem services (API usage, marketplaces, merch) generates revenue. A portion <strong className="text-white italic">may be allocated</strong> toward infrastructure maintenance and community initiatives.
                </p>
                <p className="text-[10px] text-white/30 uppercase tracking-widest font-mono">
                  Allocation is discretionary // Not encoded in contract // No profit-sharing for FOO holders.
                </p>
              </div>

              <div className="p-10 border border-white/10 bg-black/40 rounded-2xl space-y-6">
                <h3 className="text-xl font-black text-[#0052FF] uppercase tracking-widest flex items-center gap-3">
                   Future Coordination 🏛️
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  At scale, formal coordination structures such as a <strong className="text-white">DAO-managed treasury</strong> may emerge. These will be community-driven and remain separate from the FOO contract.
                </p>
                <p className="text-[10px] text-white/30 uppercase tracking-widest font-mono">
                  No predetermined timelines // Opt-in community governance // Preserving token immutability.
                </p>
              </div>
            </section>

            {/* Separation by Design Section */}
            <section className="py-20 text-center border-t border-white/10 mt-12">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic" style={arialBlackStyle}>
                 SEPARATION BY DESIGN 🔒
              </h2>
              <p className="max-w-4xl mx-auto text-xl text-white/60 leading-relaxed italic">
                "This separation is intentional. FOO remains neutral and permissionless. FookerNetwork remains accountable for its services. The token rules are fixed. The ecosystem evolves only if people choose to build it."
              </p>
              <div className="mt-16 flex justify-center gap-4">
                 <div className="px-7 py-4 bg-white/5 border border-white/10 text-[10px] font-bold text-white  tracking-[0.2em] rounded-sm">
                    Permissionless
                 </div>
                 <div className="px-7 py-4 bg-white/5 border border-white/10 text-[10px] font-bold text-white  tracking-[0.2em] rounded-sm">
                    Infrastructure
                 </div>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.8em] font-mono">
            END OF ECOSYSTEM ARCHITECTURE NOTES // FOOKER ARCHIVE 🌐
          </p>
        </div>
      </div>
    </div>
  );
};
