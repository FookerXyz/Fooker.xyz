
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TokenDetails } from './components/TokenDetails';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';
import { SmartContractsView } from './components/SmartContractsView';
import { WhitepaperView } from './components/WhitepaperView';
import { PolicyView } from './components/PolicyView';
import { LegalView } from './components/LegalView';
import { DisclosureView } from './components/DisclosureView';
import { MarketplaceView } from './components/MarketplaceView';
import { EventsView } from './components/EventsView';
import { AIView } from './components/AIView';
import { FAQView } from './components/FAQView';
import { EcosystemArchitectureView } from './components/EcosystemArchitectureView';
import { PartnersView } from './components/PartnersView';
import { BaseChainView } from './components/BaseChainView';

type ViewType = 'home' | 'smart-contracts' | 'whitepaper' | 'policy' | 'legal' | 'disclosure' | 'marketplace' | 'events' | 'ai' | 'faq' | 'ecosystem-architecture' | 'partners' | 'base-chain';

function App() {
  const [view, setView] = useState<ViewType>('home');

  useEffect(() => {
    // Reveal animation logic
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [view]);

  const navigateTo = (newView: ViewType) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-[#0052FF] selection:text-white bg-transparent">
      <Navbar onNavigate={navigateTo as any} currentView={view} />
      
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            
            <div className="reveal">
              <TokenDetails />
            </div>

            <div className="reveal">
              <Roadmap />
            </div>
          </>
        ) : view === 'ai' ? (
          <AIView />
        ) : view === 'faq' ? (
          <FAQView />
        ) : view === 'marketplace' ? (
          <MarketplaceView />
        ) : view === 'events' ? (
          <EventsView />
        ) : view === 'smart-contracts' ? (
          <SmartContractsView />
        ) : view === 'whitepaper' ? (
          <WhitepaperView />
        ) : view === 'policy' ? (
          <PolicyView />
        ) : view === 'disclosure' ? (
          <DisclosureView />
        ) : view === 'ecosystem-architecture' ? (
          <EcosystemArchitectureView />
        ) : view === 'partners' ? (
          <PartnersView />
        ) : view === 'base-chain' ? (
          <BaseChainView />
        ) : (
          <LegalView />
        )}
      </main>

      {view !== 'ai' && <Footer onNavigate={navigateTo as any} />}
    </div>
  );
}

export default App;
