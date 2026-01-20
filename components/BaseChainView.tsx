
import React from 'react';

export const BaseChainView: React.FC = () => {
  const arialBlackStyle = { fontFamily: '"Arial Black", Gadget, sans-serif', fontWeight: 'bold' };

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-6 font-sans">
      <div className="mb-16 border-b border-white/10 pb-12 relative">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#0052FF]/30 bg-[#0052FF]/10 text-[#0052FF] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
          Network Protocol // BASE L2 🔵
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-white uppercase leading-[0.9] italic" style={arialBlackStyle}>
          BUILT ON <br />
          <span className="text-[#0052FF]">BASE MAINNET</span>
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed font-light">
          Base is a secure, low-cost, builder-friendly Ethereum L2 built on the OP Stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8 text-white/70 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white uppercase" style={arialBlackStyle}>What is Base?</h2>
            <p>
              Base is an Ethereum Layer 2 (L2) network offering a secure, low-cost, and developer-friendly environment for decentralized applications (dApps). Incubated by Coinbase and built on the open-source OP Stack in collaboration with Optimism, Base aims to bring the next billion users to the blockchain.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white uppercase" style={arialBlackStyle}>Why Fooker chose Base?</h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-[#0052FF] font-black">01.</span>
                <p><strong className="text-white">Ethereum Security:</strong> Base leverages the underlying security of Ethereum, ensuring that $FOO assets are protected by one of the most robust networks in existence.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#0052FF] font-black">02.</span>
                <p><strong className="text-white">Hyper-Efficiency:</strong> Transactions on Base are significantly faster and cheaper than Ethereum Mainnet, making peer-to-peer payments and micro-transactions viable for the community.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#0052FF] font-black">03.</span>
                <p><strong className="text-white">Coinbase Ecosystem:</strong> Base provides a seamless bridge for users coming from centralized exchanges to decentralized finance, perfectly aligning with Fooker's vision for mass community adoption.</p>
              </li>
            </ul>
          </section>
        </div>

        <div className="lg:col-span-4">
           <div className="p-8 border border-white/10 bg-white/[0.02] rounded-3xl sticky top-32">
              <img 
                src="https://gateway.pinata.cloud/ipfs/bafkreialueb6twhgrcl2k7bzrvifqepaxht4cjbfigmvfgquh4dflkwhda" 
                className="w-20 h-20 mb-6" 
                alt="Base" 
              />
              <h3 className="text-white font-black uppercase text-sm mb-4">Technical Specs</h3>
              <div className="space-y-3 font-mono text-[10px]">
                 <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40 uppercase">Architecture</span>
                    <span className="text-white">Optimistic Rollup</span>
                 </div>
                 <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40 uppercase">Settlement</span>
                    <span className="text-white">Ethereum L1</span>
                 </div>
                 <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40 uppercase">Stack</span>
                    <span className="text-white">OP Stack</span>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <section className="mt-20 pt-16 border-t border-white/10">
        <div className="bg-blue-950/20 border border-[#0052FF]/20 p-8 md:p-12 rounded-2xl">
          <h3 className="text-[#0052FF] font-black uppercase text-sm tracking-[0.3em] mb-6 flex items-center gap-3" style={arialBlackStyle}>
            Professional Disclaimer ⚠️
          </h3>
          <p className="text-white/60 text-xs md:text-sm leading-relaxed font-mono uppercase">
            Fooker is an independent community project. This project is not officially endorsed, sponsored, or managed by the Base network team, Coinbase, or its affiliates. The $FOO token is an independent asset developed by anonymous contributors and is strictly active and deployed on the Base Mainnet. All interactions with the network and token are at the user's own risk.
          </p>
        </div>
      </section>

      <div className="mt-24 text-center">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.8em] font-mono">
          NETWORK ARCHIVE // BASE MAINNET // 0xBASE
        </p>
      </div>
    </div>
  );
};
