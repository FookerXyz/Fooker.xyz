
import React from 'react';

export const LegalView: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="pt-28 pb-20 lg:pt-32 lg:pb-24 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-6">
            Critical Disclosure // HIGH RISK
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 text-white uppercase leading-none">
            LEGAL <br /><span className="text-red-600">DISCLAIMER</span>
          </h1>
          <p className="text-white/40 font-mono text-[10px] sm:text-xs tracking-widest uppercase">
            READ CAREFULLY BEFORE PROCEEDING WITH FOOKER ECOSYSTEM
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <section className="p-6 sm:p-8 bg-white/[0.02] border border-white/10 rounded-sm leading-relaxed text-white/60 text-xs sm:text-base">
            <h2 className="text-lg sm:text-xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tight">01. NOT AN INVESTMENT</h2>
            <p className="mb-4">
              FOOKER (FOO) is a memecoin created for community participation and entertainment within the decentralized economy. FOO has <strong className="text-white">NO INTRINSIC VALUE</strong> and no expectation of financial return. It is not a security, not a financial instrument, and not a stake in any legal entity.
            </p>
            <p>
              Purchasing FOO carries a risk of <strong className="text-red-500 uppercase">total capital loss</strong>. Markets for decentralized tokens are extremely volatile and often illiquid.
            </p>
          </section>

          <section className="p-6 sm:p-8 bg-white/[0.02] border border-white/10 rounded-sm leading-relaxed text-white/60 text-xs sm:text-base">
            <h2 className="text-lg sm:text-xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tight">02. NO FINANCIAL ADVICE</h2>
            <p>
              The information provided on this website, in the whitepaper, or through the AI Consultant does not constitute financial, investment, or legal advice. Every individual is solely responsible for their own decisions. The "Fooker AI Consultant" is a large language model and may provide inaccurate, speculative, or incomplete information.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 bg-red-900/10 border border-red-500/20 rounded-sm">
              <h3 className="text-white font-black mb-4 uppercase text-sm">Risk Warning</h3>
              <ul className="space-y-2 sm:space-y-3 text-[9px] sm:text-xs text-white/50 font-mono">
                <li>• SMART CONTRACT RISK (AUDITED BUT NOT GUARANTEED)</li>
                <li>• LIQUIDITY VOLATILITY</li>
                <li>• REGULATORY UNCERTAINTY</li>
                <li>• NETWORK CONGESTION (BASE L2)</li>
              </ul>
            </div>
            <div className="p-6 sm:p-8 bg-white/5 border border-white/10 rounded-sm">
              <h3 className="text-white font-black mb-4 uppercase text-sm">No Liability</h3>
              <p className="text-[9px] sm:text-xs text-white/50 leading-relaxed uppercase">
                TO THE FULLEST EXTENT PERMITTED BY LAW, THE FOOKER DEVELOPERS AND COMMUNITY SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, OR CONSEQUENTIAL LOSSES ARISING FROM THE USE OF FOO TOKENS OR THIS INTERFACE.
              </p>
            </div>
          </section>
        </div>

        <footer className="mt-16 sm:mt-24 pt-10 sm:pt-12 border-t border-white/10 text-center">
          <p className="text-[9px] sm:text-xs text-white/20 uppercase tracking-[0.4em] sm:tracking-[0.5em] font-mono">
            Document Hash: 0x82...E921 // System Exit
          </p>
        </footer>
      </div>
    </div>
  );
};
