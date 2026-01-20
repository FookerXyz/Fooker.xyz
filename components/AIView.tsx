
import React, { useState, useRef, useEffect } from 'react';
import { getCoinResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIView: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Hey! I'm FookAI. Ready to chat about Fooker, scan your charts, or anything else on your mind? 🤝" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ data: string, mimeType: string, preview: string } | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = (reader.result as string).split(',')[1];
        setSelectedImage({
          data: base64String,
          mimeType: file.type,
          preview: reader.result as string
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSend = async () => {
    if ((!input.trim() && !selectedImage) || isLoading) return;
    const userMessage = input.trim();
    const currentImage = selectedImage;
    setInput('');
    setSelectedImage(null);
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
    const displayContent = userMessage + (currentImage ? "\n[Image attached for analysis]" : "");
    setMessages(prev => [...prev, { role: 'user', content: displayContent }]);
    setIsLoading(true);
    const response = await getCoinResponse(userMessage || "Analyze this chart/image for me.", currentImage || undefined);
    setMessages(prev => [...prev, { role: 'model', content: response }]);
    setIsLoading(false);
  };

  // Helper to render message content with clean formatting
  const renderFormattedMessage = (content: string) => {
    return content.split('\n').map((line, idx) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return <div key={idx} className="h-4" />;

      // Section Headers: Lines that are bolded or all caps
      if ((trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) || (trimmedLine.toUpperCase() === trimmedLine && trimmedLine.length > 3)) {
        return (
          <div key={idx} className="font-black mt-8 mb-3 text-[#0052FF] uppercase tracking-wider text-xs lg:text-sm border-b border-white/5 pb-1">
            {trimmedLine.replace(/\*\*/g, '')}
          </div>
        );
      }

      // Bullet Points: Handling * or • or -
      if (trimmedLine.startsWith('*') || trimmedLine.startsWith('•') || trimmedLine.startsWith('-')) {
        return (
          <div key={idx} className="flex gap-3 ml-1 mb-2 items-start group">
            <span className="text-[#0052FF] font-bold mt-1 text-xs">•</span>
            <p className="flex-1 text-white/80">{trimmedLine.replace(/^[\*\•\-]\s*/, '').replace(/\*\*/g, '')}</p>
          </div>
        );
      }

      // Default text line
      return (
        <p key={idx} className="mb-2 text-white/90 leading-relaxed">
          {trimmedLine.replace(/\*\*/g, '')}
        </p>
      );
    });
  };

  return (
    <div className="flex flex-col h-screen bg-[#050505] pt-16 lg:pt-20 overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 lg:px-10 py-6 lg:py-10 space-y-8 lg:space-y-12">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[90%] lg:max-w-[85%] transition-all ${
                msg.role === 'user' 
                ? 'bg-[#0052FF] text-white rounded-2xl rounded-tr-none px-5 py-3 lg:px-6 lg:py-4 shadow-xl' 
                : 'bg-transparent text-white/90 px-0 py-2 border-none shadow-none w-full'
              }`}>
                <div className="text-sm lg:text-[15px] font-sans">
                  {msg.role === 'model' ? renderFormattedMessage(msg.content) : <p className="whitespace-pre-wrap">{msg.content}</p>}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-transparent px-0 py-2">
                <div className="flex gap-2 items-center">
                  <div className="w-1.5 h-1.5 bg-[#0052FF] rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[#0052FF] rounded-full animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-[#0052FF] rounded-full animate-bounce [animation-delay:-.5s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="p-4 lg:p-8 bg-gradient-to-t from-[#050505] via-[#050505] to-transparent">
        <div className="max-w-4xl mx-auto relative flex flex-col gap-2">
          {selectedImage && (
            <div className="relative inline-block w-20 h-20 mb-2 group">
              <img src={selectedImage.preview} alt="Preview" className="w-full h-full object-cover rounded-lg border border-[#0052FF] shadow-lg shadow-[#0052FF]/20" />
              <button onClick={() => setSelectedImage(null)} className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 shadow-lg hover:bg-red-700 transition-colors">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          )}

          <div className="relative flex items-end gap-1 bg-white/[0.03] border border-white/10 rounded-2xl p-2 focus-within:border-[#0052FF]/50 transition-colors shadow-2xl">
            <button onClick={() => fileInputRef.current?.click()} className="p-2.5 text-white/40 hover:text-[#0052FF] transition-colors" title="Attach Image">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageSelect} />
            <textarea 
              ref={textareaRef} 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }} 
              placeholder="Type a message or drop an image..." 
              className="flex-1 bg-transparent text-white py-3 px-2 focus:outline-none resize-none text-sm lg:text-base min-h-[44px] max-h-[150px] placeholder:text-white/20" 
              rows={1} 
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading || (!input.trim() && !selectedImage)} 
              className="p-3 bg-[#0052FF] text-white rounded-xl disabled:opacity-20 hover:bg-[#0042CC] transition-all shadow-lg shadow-[#0052FF]/20"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
