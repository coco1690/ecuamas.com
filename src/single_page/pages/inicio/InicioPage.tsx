import { CustomPartners } from "@/single_page/pages/inicio/components/CustomPartners"
import { CustomJumBotron } from "./components/CustomJumBotron"
import { SorteosCarousel } from "@/single_page/components/SorteosCarousel"

export const InicioPage = () => {
  return (
    <div className="min-h-[calc(100vh-(--spacing(16))-(--spacing(20)))] flex flex-col">
      {/* Contenido principal - ocupa todo el espacio disponible */}
       <CustomJumBotron />

        <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Eventos Activos
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