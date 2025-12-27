
import React from 'react';

interface ServiceCardProps {
  title: string;
  onClick: () => void;
  isLoading?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`
        w-full relative group
        px-6 py-4 rounded-2xl
        bg-white/80 backdrop-blur-sm border border-indigo-50/50
        hover:bg-white hover:border-[#9b51e0]
        transition-all duration-300 ease-in-out
        text-[#475569] hover:text-[#9b51e0]
        text-base font-semibold
        shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]
        hover:shadow-[0_10px_15px_-3px_rgba(155,81,224,0.1)]
        active:scale-[0.98]
        flex items-center justify-between
      `}
    >
      <span className="tracking-tight">{title}</span>
      {isLoading ? (
        <div className="animate-spin h-4 w-4 border-2 border-[#9b51e0] border-t-transparent rounded-full" />
      ) : (
        <div className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </button>
  );
};

export default ServiceCard;
