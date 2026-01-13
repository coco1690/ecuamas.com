import { CustomPartners } from "@/single_page/pages/inicio/components/CustomPartners"
import { CustomJumBotron } from "./components/CustomJumBotron"
import { SorteosCarousel } from "@/single_page/components/SorteosCarousel"
import { Trophy, Gift, Star } from "lucide-react"

export const InicioPage = () => {
  return (
    <div className="min-h-[calc(100vh-(--spacing(16))-(--spacing(20)))] flex flex-col">
      {/* Contenido principal */}
      <CustomJumBotron />

      {/* Sección de Eventos */}
      <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Texto descriptivo con iconos */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 animate-pulse" />
            <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-300 mb-1">
            🎁 Gana <span className="text-amber-400 font-bold">fabulosos premios</span> participando en 🎉
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-center text-amber-400 font-semibold mb-6">
            ✨ Nuestros Eventos Exclusivos ✨
          </p>
          
          {/* Título */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 relative">
            <span className="inline-block animate-pulse">🔥</span>
            {' '}Eventos Activos{' '}
            <span className="inline-block animate-pulse">🔥</span>
          </h2>
          
          <SorteosCarousel />
        </div>
      </section>

      <div className="flex-1" />

      {/* Partners al final */}
      <CustomPartners />
    </div>
  )
}