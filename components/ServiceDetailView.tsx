
import React, { useEffect } from 'react';
import { ServiceDetail } from '../types';

interface ServiceDetailViewProps {
  detail: ServiceDetail;
  onBack: () => void;
  whatsappNumber: string;
}

const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({ detail, onBack, whatsappNumber }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookClick = () => {
    const message = encodeURIComponent(`Olá Mariana, acabei de ler sobre o serviço de ${detail.title} e gostaria de agendar um horário.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col relative animate-slide-in">
      {/* Header com Botão Voltar */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md z-40 border-b border-gray-100 px-6 py-5 flex items-center gap-4">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors text-[#9b51e0]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-xl font-bold text-[#1e293b]">{detail.title}</h2>
      </div>

      {/* Conteúdo da Página */}
      <div className="flex-1 p-8 pb-32">
        <div className="max-w-md mx-auto space-y-8">
          
          {/* Ilustração ou Detalhe Visual */}
          <div className="w-20 h-20 bg-[#f5f0ff] rounded-[2rem] flex items-center justify-center text-[#9b51e0] shadow-inner mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M2 12h20" />
            </svg>
          </div>

          <section className="space-y-3">
            <h3 className="text-[#9b51e0] text-xs font-bold tracking-widest uppercase opacity-70">O que é este serviço?</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {detail.content}
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-[#9b51e0] text-xs font-bold tracking-widest uppercase opacity-70">Principais Benefícios</h3>
            <div className="grid gap-3">
              {detail.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-[#f8fafc] p-4 rounded-2xl border border-indigo-50/50 flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-[#9b51e0] flex-shrink-0" />
                  <span className="text-gray-600 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-4 p-6 rounded-3xl bg-indigo-50/50 border border-indigo-100">
             <p className="text-indigo-900 text-sm italic">
               "Nossa prioridade é o seu bem-estar, com atendimento humanizado e técnicas de última geração."
             </p>
          </section>
        </div>
      </div>

      {/* Botão de Agendamento Fixo na Detail Page */}
      <div className="fixed bottom-6 left-0 right-0 px-6 flex justify-center z-50">
        <button 
          onClick={handleBookClick}
          className="w-full max-w-[400px] bg-[#9b51e0] hover:bg-[#8a44cc] text-white rounded-2xl py-5 shadow-2xl flex items-center justify-center gap-3 transition-transform active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-lg font-bold tracking-wide">Agendar este Serviço</span>
        </button>
      </div>
    </div>
  );
};

export default ServiceDetailView;
