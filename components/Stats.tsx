
import React from 'react';

export const Stats: React.FC = () => {
  const metrics = [
    { label: "Transactions per second", value: "65,241", detail: "Real-time TPS" },
    { label: "Total Transactions", value: "34.1B+", detail: "On-chain activity" },
    { label: "Avg. Cost per Tx", value: "$0.00025", detail: "Fixed gas fee" },
    { label: "Validator Nodes", value: "1,842", detail: "Global distribution" },
  ];

  return (
    <section className="py-20 border-y border-black/5 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((m, i) => (
            <div key={i} className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#58667E] opacity-60">
                {m.label}
              </p>
              <h4 className="text-3xl md:text-4xl font-extrabold text-[#0A0B0D] tracking-tight">
                {m.value}
              </h4>
              <p className="text-xs font-semibold text-[#0052FF]">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
