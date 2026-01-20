
import React from 'react';

export const FAQView: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="pt-28 pb-20 lg:pt-32 lg:pb-24 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-10 lg:mb-16">
          <h2 
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-8 lg:mb-12 uppercase tracking-tighter italic"
            style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}
          >
            Ecosystem FAQ
          </h2>
        </div>

        <div className="space-y-10 sm:space-y-12">
          <section className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-snug" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
              What is Fooker (FOO)?
            </h3>
            <p className="text-white/70 leading-relaxed text-sm sm:text-lg">
              Fooker (FOO) is a public ERC20 memecoin born from degen culture and community participation. It is not a company, not a protocol, and not an investment product. It exists as immutable code on the Base (Ethereum L2) network and lives or dies by community usage.
            </p>
          </section>

          <hr className="border-white/10" />

          <section className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-snug" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
              Is Fooker officially managed by a team?
            </h3>
            <p className="text-white/70 leading-relaxed text-sm sm:text-lg">
              No. <br />
              Fooker does not have an official team, leadership structure, or controlling entity. Anonymous contributors were involved only in the initial creation and deployment of the token. Beyond that point, FOO exists as a public asset with no special privileges granted to any party.
            </p>
          </section>

          <hr className="border-white/10" />

          <section className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-snug" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
              How does merchandise relate to FOO?
            </h3>
            <p className="text-white/70 leading-relaxed text-sm sm:text-lg">
              Merchandise exists to support culture and community identity, not to fund token mechanics.
            </p>
            <div className="space-y-2 text-white/50 text-xs sm:text-base">
              <p>Merchandise activity:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Is separate from the token contract</li>
                <li>Does not affect token supply or rules</li>
                <li>Does not guarantee any benefit to token holders</li>
              </ul>
            </div>
          </section>

          <hr className="border-white/10" />

          <section className="space-y-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-snug" style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}>
              Final clarification
            </h3>
            <p className="text-white/70 leading-relaxed text-sm sm:text-lg font-bold italic">
              FOO is immutable code. <br />
              Everything around it — culture, tools, marketplaces, merchandise — is optional.
            </p>
            <div className="space-y-1 text-white/50 text-[10px] sm:text-xs uppercase tracking-widest font-mono">
              <p>Nothing is promised.</p>
              <p>Nothing is enforced.</p>
              <p className="mt-4 text-[#0052FF] font-bold">That is intentional.</p>
            </div>
          </section>
        </div>

        <div className="mt-16 sm:mt-20 text-center border-t border-white/10 pt-10 sm:pt-12">
          <p className="text-[9px] sm:text-[10px] text-white/20 uppercase tracking-[0.6em] sm:tracking-[0.8em] font-mono">
            END OF ECOSYSTEM FAQ // FOOKER ARCHIVE
          </p>
        </div>
      </div>
    </div>
  );
};
