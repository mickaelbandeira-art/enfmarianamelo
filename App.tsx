
import React, { useState } from 'react';
import ServiceCard from './components/ServiceCard';
import ServiceDetailView from './components/ServiceDetailView';
import { getServiceInfo } from './services/geminiService';
import { ServiceDetail } from './types';

const SERVICES = [
  "Body Piercing",
  "Verrugas, e Sinais",
  "ESP, EEG, ECG",
  "Diu",
  "Implanon"
];

const WHATSAPP_NUMBER = "5582996583509";

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'detail'>('home');
  const [selectedDetail, setSelectedDetail] = useState<ServiceDetail | null>(null);
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleServiceClick = async (serviceName: string) => {
    setIsLoading(serviceName);
    try {
      const detail = await getServiceInfo(serviceName);
      setSelectedDetail(detail);
      setView('detail');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(null);
    }
  };

  const handleBack = () => {
    setView('home');
    setSelectedDetail(null);
  };

  const handleContactClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá Mariana, gostaria de agendar uma consulta.")}`, '_blank');
  };

  // Foto de alta qualidade da Mariana Melo
  const profileImage = "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&w=1000&q=80";

  if (view === 'detail' && selectedDetail) {
    return <ServiceDetailView detail={selectedDetail} onBack={handleBack} whatsappNumber={WHATSAPP_NUMBER} />;
  }

  return (
    <div className="max-w-[450px] mx-auto min-h-screen flex flex-col p-6 pb-24 relative overflow-hidden bg-[#f8fafc]">
      
      {/* Decoração de Fundo */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#e0e7ff] rounded-full opacity-30 blur-[80px] z-0" />
      
      {/* Profile Section Centralizada */}
      <div className="relative mt-10 mb-8 flex flex-col items-center z-10 animate-fade-in">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#9b51e0] to-[#c084fc] rounded-full scale-105 blur-[2px] opacity-20" />
          <div className="w-44 h-44 rounded-full border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden relative z-10">
            <img 
              src={profileImage} 
              alt="Mariana Melo" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute bottom-2 right-2 bg-white p-2.5 rounded-full shadow-lg z-20 border border-indigo-50">
             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9b51e0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22a7 7 0 0 0 7-7V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v11a7 7 0 0 0 7 7z"/>
                <path d="M12 11h.01"/>
                <path d="M10 14h4"/>
             </svg>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-[#6366f1] text-xs font-bold tracking-[0.4em] uppercase mb-1">Enfermeira Especialista</p>
          <h1 className="text-[#1e293b] text-3xl font-extrabold tracking-tight">
            Mariana <span className="text-[#9b51e0]">Melo</span>
          </h1>
          <p className="text-[#64748b] text-sm mt-1 max-w-[280px]">Cuidado Humanizado e Procedimentos Especializados</p>
        </div>
      </div>

      {/* Lista de Links */}
      <div className="flex flex-col gap-3.5 mt-4 animate-fade-in relative z-10 w-full max-w-[360px] mx-auto">
        {SERVICES.map((service, index) => (
          <div key={service} style={{ animationDelay: `${index * 100}ms` }} className="animate-fade-in opacity-0">
            <ServiceCard 
              title={service} 
              onClick={() => handleServiceClick(service)} 
              isLoading={isLoading === service}
            />
          </div>
        ))}
      </div>

      {/* Botão de Rodapé Fixo */}
      <div className="fixed bottom-6 left-0 right-0 px-6 flex justify-center z-30">
        <button 
          onClick={handleContactClick}
          className="w-full max-w-[380px] bg-[#1e293b] hover:bg-black text-white rounded-2xl py-4 shadow-xl flex items-center justify-center gap-3 transition-all active:scale-95"
        >
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <span className="text-sm font-bold tracking-[0.2em] uppercase">Agendar Consulta</span>
        </button>
      </div>
    </div>
  );
};

export default App;
