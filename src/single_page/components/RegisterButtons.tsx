import { Sparkles, ArrowRight } from 'lucide-react';

interface RegisterButtonsProps {
  className?: string;
}

export const RegisterButtons = ({ className = '' }: RegisterButtonsProps) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${className}`}>
      {/* Ecuabet Button */}
      
      <a
        href="https://ecuabet.com/registro/aff/OVA5cFZCRXZBd29xRmxQZHZGN2J6QT09"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-base sm:text-lg rounded-xl transition-all duration-300 overflow-hidden shadow-lg hover:shadow-yellow-400/50 hover:scale-105 animate-pulse-subtle"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-linear-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Constant shine effect for mobile */}
        <div className="absolute inset-0 animate-shine bg-linear-to-r from-transparent via-white/30 to-transparent" />
        
        {/* Shine effect on hover for desktop */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/40 to-transparent" />
        
        {/* Content */}
        <span className="relative flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 animate-sparkle" />
          Regístrate en Ecuabet
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 animate-bounce-x" />
        </span>
        
        {/* Floating particles - always animated */}
        <span className="absolute top-1/2 left-1/4 w-2 h-2 bg-yellow-200 rounded-full animate-float-1" />
        <span className="absolute top-1/2 right-1/4 w-2 h-2 bg-yellow-200 rounded-full animate-float-2" />
      </a>

      {/* DoradoBet Button */}
      
      <a
        href="https://www.doradobet.com/registro"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base sm:text-lg rounded-xl transition-all duration-300 overflow-hidden shadow-lg hover:shadow-orange-500/50 hover:scale-105 animate-pulse-subtle"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-linear-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Constant shine effect for mobile */}
        <div className="absolute inset-0 animate-shine-delayed bg-linear-to-r from-transparent via-white/30 to-transparent" />
        
        {/* Shine effect on hover for desktop */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/40 to-transparent" />
        
        {/* Content */}
        <span className="relative flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 animate-sparkle" />
          Regístrate en DoradoBet
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 animate-bounce-x" />
        </span>
        
        {/* Floating particles - always animated */}
        <span className="absolute top-1/2 left-1/4 w-2 h-2 bg-orange-200 rounded-full animate-float-1" />
        <span className="absolute top-1/2 right-1/4 w-2 h-2 bg-orange-200 rounded-full animate-float-2" />
      </a>
    </div>
  );
};