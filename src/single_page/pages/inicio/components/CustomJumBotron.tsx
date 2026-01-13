// import { RegisterButtons } from "@/single_page/components/RegisterButtons"


// export const CustomJumBotron = () => {
//     return (
//         <>
//             <section className="py-12 sm:py-20 px-4">
//                 <div className="container mx-auto max-w-4xl text-center">
//                     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
//                         Somos la Agencia <span className="text-amber-400">#1</span> en Ecuador
//                     </h1>
//                     <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
//                         Agencia oficial y líder de <span className="text-amber-400 font-semibold">Ecuabet</span> y{' '}
//                         <span className="text-amber-400 font-semibold">DoradoBet</span> en todo el país
//                     </p>
//                 </div>
//             </section>

//             <section className="py-12 sm:py-20 px-4">
//                 <div className="container mx-auto max-w-3xl text-center">
//                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
//                         ¡Regístrate Hoy mismo y participa en nuestros Eventos!
//                     </h2>
//                     <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
//                         Únete a la agencia #1 de apuestas en Ecuador y disfruta de todos nuestros beneficios
//                     </p>
//                     <RegisterButtons />
//                 </div>
//             </section>
//         </>
//     )
// }
import { RegisterButtons } from "@/single_page/components/RegisterButtons"
import { MessageCircle } from "lucide-react"
import { useWhatsApp } from "@/hooks/useWhatsApp"

export const CustomJumBotron = () => {
    const { openWhatsApp } = useWhatsApp();

    return (
        <>
            <section className="py-8 sm:py-12 md:py-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                        Somos la Agencia <span className="text-amber-400">#1</span> en Ecuador
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                        Agencia oficial y líder de <span className="text-amber-400 font-semibold">Ecuabet</span> y{' '}
                        <span className="text-amber-400 font-semibold">DoradoBet</span> en todo el país
                    </p>
                </div>
            </section>

            {/* Nota Destacada de WhatsApp - Compacta */}
            <section className="py-4 sm:py-6 px-4">
                <div className="container mx-auto max-w-3xl">
                    <div 
                        onClick={() => openWhatsApp()}
                        className="relative bg-linear-to-r from-green-500 to-green-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
                    >
                        {/* Efectos sutiles */}
                        <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                        <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                        
                        <div className="relative z-10">
                            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-2">
                                {/* Icono */}
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-lg shrink-0 animate-pulse">
                                    <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
                                </div>

                                {/* Texto */}
                                <div className="text-center sm:text-left flex-1">
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                                        ¿Para Recargas o Pagos de nota de retiro?
                                    </h3>
                                    <p className="text-xs sm:text-sm text-white/90">
                                        Contáctanos por WhatsApp{' '}
                                        <span className="font-bold">24/7</span> - Te atendemos de inmediato
                                    </p>
                                </div>

                                {/* Indicador */}
                                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full shrink-0">
                                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                    <span className="text-white text-xs font-medium">
                                        Disponible
                                    </span>
                                </div>
                            </div>

                            {/* Clic aquí - Aviso */}
                            <div className="flex items-center justify-center gap-2 pt-2 border-t border-white/20">
                                <span className="text-white text-sm sm:text-base font-bold animate-pulse">
                                    👆 CLIC AQUÍ PARA CONTACTAR 👆
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 sm:py-12 md:py-20 px-4">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                        ¡Regístrate Hoy Mismo y Participa en Nuestros Eventos!
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 md:mb-8">
                        Únete a la agencia #1 de apuestas en Ecuador y disfruta de todos nuestros beneficios
                    </p>
                    <RegisterButtons />
                </div>
            </section>
        </>
    )
}