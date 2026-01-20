
import React from 'react';

export const WhyMeme: React.FC = () => {
  const arialBlackStyle = { fontFamily: '"Arial Black", Gadget, sans-serif', fontWeight: 'bold' };

  return (
    <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#0052FF]/5 blur-[140px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Tag */}
        <div className="mb-12">
          <div className="text-[#0052FF] text-[10px] font-black uppercase tracking-[0.5em] mb-6">
            PROTOCOL LOGIC // SOCIAL PRIMITIVE
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-16 italic leading-none pr-8" style={arialBlackStyle}>
            WHY A <br />
            <span className="text-white/20">MEME TOKEN?</span>
          </h2>
        </div>

        {/* Narrative Flow */}
        <div className="space-y-24">
          {/* Section 1: The Core Reason */}
          <div className="space-y-8">
            <p className="text-2xl md:text-4xl text-white font-black italic leading-tight tracking-tighter uppercase max-w-3xl">
              Fooker starts as a meme for one simple reason: <br />
              <span className="text-[#0052FF]">memes are the most honest form of coordination in crypto.</span>
            </p>
            <div className="space-y-6 text-white/50 text-lg md:text-xl leading-relaxed font-bold max-w-2xl">
              <p>
                A meme doesn’t pretend to be perfect. It doesn’t hide behind whitepapers or empty roadmaps. 
                It spreads because people relate to it, use it, and choose it.
              </p>
              <p className="text-white">
                $FOO is a meme token not to become decoration, but to become a starting point.
              </p>
            </div>
          </div>

          {/* Section 2: People Over Products */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <h3 className="text-white font-black uppercase italic text-xl tracking-widest" style={arialBlackStyle}>
                PEOPLE OVER <br /> PRODUCTS
              </h3>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="text-white/80 text-lg md:text-2xl leading-relaxed font-bold italic">
                We believe real ecosystems do not begin with products. They begin with people.
              </p>
              <p className="text-white/40 text-base md:text-lg leading-relaxed font-bold">
                Before marketplaces, before platforms, before software, there must be a community that actually wants them.
              </p>
            </div>
          </div>

          {/* Section 3: Listening First */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <h3 className="text-[#0052FF] font-black uppercase italic text-xl tracking-widest" style={arialBlackStyle}>
                LISTENING <br /> FIRST
              </h3>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="text-white/80 text-lg md:text-xl leading-relaxed font-bold">
                Fooker is built from the ground up by listening first. Ideas come from users. 
                Direction comes from participation. Development follows real needs, not promises.
              </p>
            </div>
          </div>

          {/* Section 4: No False Vision */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <h3 className="text-white font-black uppercase italic text-xl tracking-widest" style={arialBlackStyle}>
                NO FALSE <br /> VISION
              </h3>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="text-white/80 text-lg md:text-xl leading-relaxed font-bold">
                There are no guarantees. No fixed timelines. No financial incentives dressed as vision.
              </p>
            </div>
          </div>

          {/* Section 5: The Seed */}
          <div className="pt-24 border-t border-white/10">
            <div className="space-y-12">
              <p className="text-3xl md:text-6xl font-black uppercase italic tracking-tighter leading-[0.9] text-white" style={arialBlackStyle}>
                THE MEME IS THE SEED. <br />
                <span className="text-[#0052FF]">THE UTILITY IS EARNED.</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white/40 text-sm md:text-base font-bold leading-relaxed">
                <p>
                  If tools are built, they are built because the community needs them. 
                  If software emerges, it exists to help users coordinate, analyze, or operate better, not to sell dreams.
                </p>
                <p>
                  This project does not ask you to believe. It asks you to participate. 
                  Community first. Everything else follows, or it doesn’t.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Status */}
        <div className="mt-32 pt-16 flex flex-col items-center gap-8 opacity-20">
          <div className="h-[1px] w-32 bg-white"></div>
          <p className="font-mono text-[9px] uppercase tracking-[0.8em]">
            SYSTEM_LOG // NARRATIVE_COMPLETE // 0xFOO
          </p>
        </div>
      </div>
    </section>
  );
};
