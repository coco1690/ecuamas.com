import { useEffect } from 'react';
import { CustomLogo } from './custom/CustomLogo';

interface SplashScreenProps {
    onFinish: () => void;
}

export const SplashScreen = ({ onFinish }: SplashScreenProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 2500);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="fixed inset-0 bg-linear-to-br from-gray-800 via-gray-900 to-gray-950 flex items-center justify-center z-50">
            <div className="flex flex-col items-center gap-6 sm:gap-8">

                {/* Logo con animación - responsive */}
                <div className="scale-100 sm:scale-125 md:scale-150 transition-all duration-700 ease-out animate-[scale-in_0.7s_ease-out]">
                    <CustomLogo subtitle="mas" />
                </div>

                {/* Texto descriptivo */}
                <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium text-center px-4 animate-[fade-in_1s_ease-out_0.3s_both]">
                    Agencia <span className="text-amber-400 font-bold">#1</span> en Ecuador
                </p>

                {/* Loading indicator */}
                <div className="flex gap-2">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-amber-400 rounded-full animate-pulse"
                            style={{
                                animationDelay: `${i * 400}ms`,
                                animationDuration: '1s'
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};