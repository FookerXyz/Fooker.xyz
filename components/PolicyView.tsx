
import React from 'react';

export const PolicyView: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="pt-32 pb-24 max-w-5xl mx-auto px-6 font-mono">
        {/* Header Section */}
        <div className="mb-16 border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0052FF]/30 bg-[#0052FF]/10 text-[#0052FF] text-[10px] font-bold uppercase tracking-widest mb-6">
            System Protocol // Context Notes
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white uppercase leading-none">
            FOOKER <span className="gradient-text">POLICIES</span> NOTES
          </h1>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl leading-relaxed">
            Context, Norms, and Boundaries — Final
          </p>
        </div>

        {/* Intro Warning */}
        <div className="mb-16 p-6 border border-white/10 bg-white/[0.02] text-white/50 text-sm italic leading-relaxed">
          <p>This document exists to describe context, not authority. It does not override the smart contract. It does not grant power. Code remains the only rule.</p>
        </div>

        <div className="space-y-16 text-white/70">
          
          {/* Token Context Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-4 text-[#0052FF]">
              <div className="w-8 h-[1px] bg-current"></div>
              <h2 className="text-xl font-black uppercase tracking-widest text-white">Token Context</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p>Fooker (FOO) is an on-chain ERC20 token. The token:</p>
                <ul className="space-y-2 text-xs text-white/40">
                  <li>• DOES NOT KNOW WHO YOU ARE</li>
                  <li>• DOES NOT COLLECT DATA</li>
                  <li>• DOES NOT TRACK BEHAVIOR</li>
                  <li>• DOES NOT INTERACT WITH WEBSITES, ANALYTICS, OR OFF-CHAIN SYSTEMS</li>
                </ul>
                <p className="text-[10px] text-white/40">
                  This limitation applies to the FOO token itself; external websites or ecosystem services may implement their own operational monitoring independent of the token.
                </p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                <p className="text-sm leading-relaxed italic">
                  FOO only responds to valid on-chain transactions. All activity is publicly visible on the Base network by design. This is a property of blockchain systems, not a feature added by Fooker.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-4 text-[#0052FF]">
              <div className="w-8 h-[1px] bg-current"></div>
              <h2 className="text-xl font-black uppercase tracking-widest text-white">Privacy</h2>
            </div>
            <div className="bg-white/5 p-8 border border-white/10">
              <p className="mb-6">Fooker does not maintain user accounts or databases.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 border border-white/5 bg-black/20">
                  <span className="block text-[10px] text-white/20 mb-1 uppercase">Names</span>
                  <span className="text-red-500 font-bold">NONE</span>
                </div>
                <div className="p-4 border border-white/5 bg-black/20">
                  <span className="block text-[10px] text-white/20 mb-1 uppercase">Emails</span>
                  <span className="text-red-500 font-bold">NONE</span>
                </div>
                <div className="p-4 border border-white/5 bg-black/20">
                  <span className="block text-[10px] text-white/20 mb-1 uppercase">Locations</span>
                  <span className="text-red-500 font-bold">NONE</span>
                </div>
                <div className="p-4 border border-white/5 bg-black/20">
                  <span className="block text-[10px] text-white/20 mb-1 uppercase">IDs</span>
                  <span className="text-red-500 font-bold">NONE</span>
                </div>
              </div>
              <p className="mt-8 text-sm text-white/40 italic">
                Holding or interacting with FOO requires no personal information of any kind.
              </p>
            </div>
          </section>

          {/* Community Norms Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-4 text-[#0052FF]">
              <div className="w-8 h-[1px] bg-current"></div>
              <h2 className="text-xl font-black uppercase tracking-widest text-white">Community Norms</h2>
            </div>
            <div className="space-y-6 leading-relaxed">
              <p>Fooker has no admin, moderators, or privileged roles. There is no enforcement layer beyond social consensus. Behavior is shaped by participation, not control.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 border border-red-500/20 bg-red-500/5">
                  <span className="block text-white font-bold mb-2 text-xs uppercase">No Key Requests</span>
                  <p className="text-[10px] text-white/40">Fooker will never ask for private keys, seed phrases, or wallet access.</p>
                </div>
                <div className="p-6 border border-white/10 bg-white/5">
                  <span className="block text-white font-bold mb-2 text-xs uppercase">Self-Security</span>
                  <p className="text-[10px] text-white/40">Security is an individual responsibility. Trust is verifiable, not blind.</p>
                </div>
                <div className="p-6 border border-white/10 bg-white/5">
                  <span className="block text-white font-bold mb-2 text-xs uppercase">Voluntary participation</span>
                  <p className="text-[10px] text-white/40">Community contributions and cultural extensions are open and voluntary.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Governance & Direction Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-4 text-[#0052FF]">
              <div className="w-8 h-[1px] bg-current"></div>
              <h2 className="text-xl font-black uppercase tracking-widest text-white">Governance & Direction</h2>
            </div>
            <div className="border-l-2 border-[#0052FF] pl-8 space-y-4">
              <p>There is no formal governance system. No DAO, no token voting, no leadership hierarchy.</p>
              <p>Any future coordination structures, if they emerge, would exist outside the token contract and do not retroactively redefine governance or token behavior.</p>
              <p>Direction emerges organically through usage, holding behavior, and collective participation. If people stay, things evolve. If people leave, things slow down or stop.</p>
              <p className="text-white font-bold italic uppercase tracking-tighter">No mandates. No guarantees.</p>
            </div>
          </section>

          {/* Brand & Culture Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-4 text-[#0052FF]">
              <div className="w-8 h-[1px] bg-current"></div>
              <h2 className="text-xl font-black uppercase tracking-widest text-white">Brand & Culture</h2>
            </div>
            <p className="leading-relaxed">
              The Fooker name and culture are open for community expression, including memes, art, and merchandise, provided they do not falsely claim authority or misrepresent the protocol.
            </p>
          </section>

          {/* Final Statement Section */}
          <section className="pt-16 border-t border-white/10 text-center space-y-8">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Final Statement</h2>
            <p className="max-w-3xl mx-auto text-lg italic text-white/60">
              "These notes describe understanding, not control. They create no obligations and promise no outcomes. FOO exists as immutable code. Everything else is optional context."
            </p>
            <div className="pt-12">
              <div className="text-[10px] text-white/20 uppercase tracking-[0.6em] mb-4">
                END OF SYSTEM NOTES // FOOKER ARCHIVE
              </div>
              <div className="flex justify-center gap-2">
                <div className="w-1 h-1 bg-[#0052FF]"></div>
                <div className="w-1 h-1 bg-[#0052FF]/50"></div>
                <div className="w-1 h-1 bg-[#0052FF]/20"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
