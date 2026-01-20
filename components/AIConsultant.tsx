
import React, { useState, useRef, useEffect } from 'react';
import { getCoinResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "FOOKER_OS v1.0 INITIALIZED... HELLO DEGEN. HOW CAN I ASSIST YOUR JOURNEY?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: `> ${userMessage}` }]);
    setIsLoading(true);

    const response = await getCoinResponse(userMessage);
    setMessages(prev => [...prev, { role: 'model', content: response.toUpperCase() }]);
    setIsLoading(false);
  };

  return (
    <section className="py-24 max-w-5xl mx-auto px-6">
      <div className="border border-white/10 bg-[#0A0A0A] overflow-hidden">
        <div className="px-6 py-3 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
          </div>
          <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase">Fooker Neural Terminal</span>
        </div>
        
        <div ref={scrollRef} className="h-[450px] overflow-y-auto p-8 space-y-4 font-mono text-sm">
          {messages.map((msg, i) => (
            <div key={i} className={`${msg.role === 'user' ? 'text-[#0052FF]' : 'text-white/80'}`}>
              <span className="mr-2">{msg.role === 'user' ? '' : '[AI]:'}</span>
              <span className="leading-relaxed">{msg.content}</span>
            </div>
          ))}
          {isLoading && (
            <div className="animate-pulse text-[#0052FF]">EXECUTING QUERY...</div>
          )}
        </div>
        
        <div className="p-6 border-t border-white/10 bg-white/[0.02]">
          <div className="flex gap-4">
            <span className="text-[#0052FF] font-bold font-mono py-3">$</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="ENTER COMMAND..."
              className="flex-1 bg-transparent border-none text-white font-mono focus:outline-none placeholder:text-white/20"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="text-[10px] font-bold uppercase tracking-widest border border-white/10 px-6 hover:bg-white/5 transition-colors"
            >
              Execute
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
