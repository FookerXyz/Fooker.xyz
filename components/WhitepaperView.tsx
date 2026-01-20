import React from 'react';

export const WhitepaperView: React.FC = () => {
  return (
    <div className="pt-28 pb-20 lg:pt-32 lg:pb-24 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="bg-white text-black rounded-sm p-8 md:p-16 shadow-2xl space-y-8 font-sans leading-relaxed border border-black/5">
        
        {/* Header Section */}
        <div className="border-b-2 border-black/10 pb-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tighter mb-2 uppercase">
                📄 FOOKER (FOO) WHITEPAPER
              </h1>
              <div className="text-sm font-bold uppercase tracking-widest text-black/60 space-y-1">
                <p>Version 0.01 – Final</p>
                <p>Community-Driven Meme Token with Long-Term Web3 Vision</p>
              </div>
            </div>
            
            <a 
              href="https://gold-raw-gecko-403.mypinata.cloud/ipfs/bafybeiedqsnijfzsvc36lrbgs432k6rkusqpn3h4cjntbzg6shnchpmzcq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-colors shrink-0 shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>

        {/* Executive Summary */}
        <section>
          <h2 className="text-xl md:text-2xl font-black mb-6 uppercase tracking-tight border-l-4 border-blue-600 pl-4">
            FOOKER (FOO) – Executive Summary
          </h2>
          <div className="space-y-4 text-base md:text-lg text-black/80">
            <p>
              <strong>Fooker (FOO)</strong> is a community-driven memecoin rooted in degen culture, but built with a
              long-term view toward sustainability in Web3. What started as a meme is not positioned as a
              promise-driven project or a centrally controlled experiment, but as an ecosystem that grows
              organically through community trust, continued participation, and real usage over time.
            </p>
            <p>
              FOO is an ERC20 token with a <strong>permanently fixed supply of 270,000,000 tokens</strong>, minted
              once at deployment and fully immutable thereafter. There are no mint functions, no burn
              mechanisms, no pause or blacklist features, and no administrative privileges of any kind. All
              token behavior is enforced by code, not by people. This structure is intentionally designed to
              eliminate supply manipulation, hidden control, and mid-course rule changes.
            </p>
            <p>
              Fooker’s tokenomics do not rely on distribution schedules, vesting contracts, or future unlock
              events. Instead, the project operates under a <strong>HODL-based trust milestone framework</strong>,
              where progress only continues if the community demonstrates sustained belief through
              long-term holding, active participation, and actual use of the token. If that trust does not
              materialize, the project slows down or stops naturally, without compromising the integrity of
              the token itself.
            </p>
            <p>
              The Fooker roadmap is narrative rather than time-based. Early phases focus on identity,
              humor, and community formation. As the ecosystem matures, Fooker explores simple and
              logical use cases, including positioning FOO as an internal payment token within the Fooker
              ecosystem, such as for community merchandise and apparel. Later stages allow room for
              Web3 experiments, community platforms, and creator collaborations, while strictly
              maintaining the principles of immutable tokenomics and the absence of centralized control.
            </p>
            <p>
              Fooker makes no claims of financial returns, does not present itself as an investment
              product, and offers no guarantees of outcomes. The value of FOO is entirely determined by
              open markets and by a community that chooses whether or not to use it. The long-term
              objective is not market dominance, but <strong>resilience, relevance, and survival beyond hype
              cycles</strong>.
            </p>
            <p className="font-black pt-4 text-black">
              Fooker is a code-based social experiment.
            </p>
            <p className="italic text-black/60">
              If it endures, it is because the community chose to trust and stay.<br />
              If it fails, it is because the market decided.<br />
              That is decentralization in its most honest form.
            </p>
          </div>
        </section>

        <hr className="border-black/5" />

        {/* Detailed Sections */}
        <div className="space-y-12 py-6 text-black/80">
          <section>
            <h3 className="text-xl font-black mb-4 uppercase text-black">## 1. Abstract</h3>
            <p>
              Fooker (FOO) started the same way most things in crypto start: as a meme. But behind the
              meme is a very deliberate decision to do less, promise less, and remove as many points of
              failure as possible. In a space obsessed with speed, hype, and constant announcements,
              Fooker takes the opposite approach. Trust is not something we ask for. Trust is something
              that either survives over time or disappears on its own.
            </p>
            <p className="mt-4">
              FOO is a community-driven ERC20 token with a permanently fixed supply and no
              centralized control. There is no owner, no admin role, and no mechanism to change the rules
              after deployment. The project does not advance based on dates or marketing plans, but on a
              single observable signal: whether people choose to stay, hold, and participate. If they do,
              Fooker evolves. If they do not, it stops. No artificial life support.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-black mb-4 uppercase text-black">## 2. The Problem We’ve All Seen Before</h3>
            <p className="italic text-black/60 mb-4">
              "Crypto is full of projects that say the right things and do the wrong ones.<br />
              Decentralized, but one wallet still decides everything.<br />
              Fixed supply, until it isn’t.<br />
              Community-first, but the community is only useful during hype.<br />
              Roadmaps that look impressive and mean nothing."
            </p>
            <p>
              Most memecoins don’t fail because the idea was bad. They fail because trust was borrowed
              instead of earned. Once that borrowed trust runs out, there’s nothing underneath.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-black mb-4 uppercase text-black">## 3. Why Fooker Exists</h3>
            <p className="mb-4">
              Fooker exists because not every token needs to be clever.
              We are not trying to reinvent finance.
              We are not trying to out-engineer the market.
              We are not trying to convince anyone with charts or promises.
            </p>
            <p>
              The idea is simple: remove as many human-controlled variables as possible, lock the rules,
              and let behavior decide the outcome.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-1 font-bold text-black">
              <li>Memes bring people in.</li>
              <li>Code defines the boundaries.</li>
              <li>The community decides whether it’s worth continuing.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-black mb-4 uppercase text-black">## 4. Token Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-black/5 p-4 rounded border border-black/5">
                <p><strong>Name:</strong> Fooker</p>
                <p><strong>Symbol:</strong> FOO</p>
                <p><strong>Standard:</strong> ERC20</p>
              </div>
              <div className="bg-black/5 p-4 rounded border border-black/5">
                <p><strong>Decimals:</strong> 18</p>
                <p><strong>Network:</strong> Base (EVM-compatible)</p>
              </div>
            </div>
            <div className="space-y-4">
                <div>
                  <p className="font-bold text-black mb-2">Contract Address:</p>
                  <code className="block bg-black/5 p-4 rounded text-xs md:text-sm break-all border border-black/5 font-mono text-blue-600">
                    0xc991Ba6675f3b07974c343564C2aE3E4bDf959FD
                  </code>
                </div>
                <p><strong>Total Supply:</strong> 270,000,000 FOO</p>
                <p>
                  All tokens are minted once at deployment and the supply is permanently fixed. There is no
                  burn function, no mint function, and no mechanism to alter the supply in the future. Inflation
                  is permanently set to zero.
                </p>
                <div>
                  <p className="font-bold text-black mb-2">There is no technical backdoor to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Increase supply</li>
                    <li>Reduce supply</li>
                    <li>Modify transfer rules</li>
                  </ul>
                </div>
                <p className="italic font-medium">What you see in the contract is what exists. Forever.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-black mb-4 uppercase text-black">## 5. Contract Philosophy</h3>
            <p>
              The Fooker contract is intentionally boring.
              It uses a standard OpenZeppelin ERC20 implementation and Solidity ^0.8.x. No ownership.
              No admin roles. No governance hooks. No pause switches. No blacklists. No emergency
              controls.
            </p>
            <p className="mt-4">
              Once deployed, the contract does not care who you are, what you believe, or what the
              market is doing. It executes the same logic every time. That predictability is the feature.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-black mb-4 uppercase text-black">## 6. Tokenomics Without Theater</h3>
            <p>
              Fooker does not have tokenomics theater.
              There are no hidden allocations, no vesting schedules, no future unlocks, and no emissions
              planned “later.” There is also no narrative that claims value will magically appear.
            </p>
            <div className="mt-4">
                <p className="font-bold text-black mb-2">Any value FOO ever has comes from three things only:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>People choosing to hold it</li>
                  <li>People choosing to use it</li>
                  <li>People choosing not to leave</li>
                </ul>
            </div>
            <p className="mt-4">Nothing else is injected.</p>
          </section>

          <section>
            <h3 className="text-xl font-black mb-4 uppercase text-black">## 7. HODL as a Signal, Not a Promise</h3>
            <p>
              Fooker does not follow a calendar roadmap.
              Progress is tied to behavior, not dates.
              If holders stay, participate, and use the token, that signals trust. When trust exists,
              exploration continues. When it doesn’t, things naturally slow down or stop. No forced
              development. No artificial milestones.
            </p>
            <div className="mt-4">
                <p className="font-bold text-black mb-2">Key signals we observe:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Holder count and distribution</li>
                  <li>Holding duration</li>
                  <li>Organic community activity</li>
                  <li>Actual usage of FOO</li>
                </ul>
            </div>
            <p className="mt-4">This is not designed to guarantee success. It’s designed to avoid lying about it.</p>
          </section>

          <section>
            <h3 className="text-xl font-black mb-4 uppercase text-black">## 8. How the Roadmap Actually Works</h3>
            <div className="space-y-6">
              <div className="p-4 border border-black/5 bg-black/[0.02]">
                <p className="font-black uppercase text-sm mb-1 text-black">Phase 1: Meme, Chaos, Community</p>
                <p className="text-sm">Fooker begins exactly where it should: memes, culture, identity. No products. No utilities. FOO is a social object, a coordination token, and a shared joke that may or may not become something more.</p>
              </div>
              <div className="p-4 border border-black/5 bg-black/[0.02]">
                <p className="font-black uppercase text-sm mb-1 text-black">Phase 2: Simple Use, Real Touchpoints</p>
                <p className="text-sm">If the community holds together, simple and obvious use cases are explored. One example is using FOO as an internal payment token for Fooker-related merchandise like apparel and community products. Nothing fancy. Just usage that makes sense.</p>
              </div>
              <div className="p-4 border border-black/5 bg-black/[0.02]">
                <p className="font-black uppercase text-sm mb-1 text-black">Phase 3: Experiments, Platforms, Identity</p>
                <p className="text-sm">If usage exists, experimentation follows. Community platforms, creator collaborations, Web3-native ideas tied to degen culture. Some will fail. That’s expected. What doesn’t change is the token itself.</p>
              </div>
              <div className="p-4 border border-black/5 bg-black/[0.02]">
                <p className="font-black uppercase text-sm mb-1 text-black">Phase 4: Longevity Over Dominance</p>
                <p className="text-sm">The end goal is not market control. It’s survival. Still being around, still being used, after the hype has moved elsewhere. If that happens, the roadmap worked.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-black mb-4 uppercase text-black">## 9. Governance (Or the Lack of It)</h3>
            <p>
              There is no formal governance system.
              No DAO votes.
              No token-weighted power.
              No leadership hierarchy.
              Direction emerges from what people actually do, not what they vote for on paper.
            </p>
          </section>

          <section className="bg-red-50 p-6 md:p-10 border-l-8 border-red-600">
            <h3 className="text-xl font-black mb-4 uppercase text-red-600">## 10. Risk, Plain and Simple</h3>
            <p className="font-black text-black mb-4">
              FOO is a memecoin.
            </p>
            <div className="space-y-2 text-sm md:text-base">
              <p>It is not an investment product.</p>
              <p>It is not a financial instrument.</p>
              <p>It does not promise returns.</p>
            </div>
            <p className="mt-4 text-sm font-medium">
              You can lose money. You can lose all of it. Markets are volatile, liquidity changes, regulations
              evolve. Participation is voluntary and entirely at your own risk.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-black mb-4 uppercase text-black">## 11. Legal Reality</h3>
            <p className="italic text-sm">
              This document is informational only. It is not financial advice, not a securities offering, and
              not a development guarantee. There is no entity promising outcomes and no obligation to
              continue building.
            </p>
            <p className="mt-4 text-sm">
              If you interact with Fooker, you do so because you want to, not because you were promised
              anything.
            </p>
          </section>

          <section className="text-center pt-16 border-t border-black/10">
            <h3 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tighter italic text-black">## 12. Closing</h3>
            <div className="max-w-xl mx-auto space-y-6">
              <p className="text-lg italic font-medium">
                "Fooker doesn’t sell a future. It only locks the rules and steps out of the way. If people care, it lives. If they don’t, it fades. That’s not a flaw. That’s the point."
              </p>
              <p className="text-xl font-black uppercase tracking-[0.2em] text-blue-600 pt-4">
                Welcome to Fooker.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
