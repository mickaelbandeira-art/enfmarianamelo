
import React from 'react';
import { ServiceDetail } from '../types';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  detail: ServiceDetail | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, detail }) => {
  if (!isOpen || !detail) return null;

  const WHATSAPP_NUMBER = "5582996583509";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-[2rem] w-full max-w-lg overflow-hidden shadow-2xl transform transition-all animate-in fade-in zoom-in duration-300">
        <div className="bg-[#9b51e0] px-6 py-4 flex justify-between items-center text-white">
          <h3 className="text-xl font-bold">{detail.title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <h4 className="text-[#9b51e0] font-semibold mb-2 uppercase text-xs tracking-widest">Sobre o Procedimento</h4>
            <p className="text-gray-700 leading-relaxed">{detail.content}</p>
          </div>
          
          <div>
            <h4 className="text-[#9b51e0] font-semibold mb-3 uppercase text-xs tracking-widest">Benefícios e Diferenciais</h4>
            <ul className="space-y-2">
              {detail.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600">
                  <span className="mt-1 h-2 w-2 rounded-full bg-purple-400 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <button 
            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de agendar: " + detail.title)}`, '_blank')}
            className="w-full bg-[#9b51e0] hover:bg-[#8a44cc] text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-purple-200 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Agendar Agora
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
