import { RegisterButtons } from "../components/RegisterButtons";

export const QuienesSomosPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Somos la Agencia <span className="text-amber-400">#1</span> en Ecuador
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
            Agencia oficial y líder de <span className="text-amber-400 font-semibold">Ecuabet</span> y{' '}
            <span className="text-amber-400 font-semibold">DoradoBet</span> en todo el país
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            ¿Qué Ofrecemos?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-amber-400/50 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-400/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">📝</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">Registro Rápido</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Regístrate directamente en las plataformas de Ecuabet y DoradoBet en minutos. Proceso 100% digital y seguro.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-amber-400/50 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-400/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">💰</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">Recargas Instantáneas</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Realiza recargas a tu cuenta de manera rápida y segura. Múltiples métodos de pago disponibles.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-amber-400/50 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-400/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">🎯</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">Cobro de Apuestas</h3>
              <p className="text-sm sm:text-base text-gray-400">
                ¿Ganaste? Cobra tus premios de forma inmediata y sin complicaciones. Tu dinero cuando lo necesites.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-amber-400/50 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-400/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">🎁</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">Bonos Exclusivos</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Accede a promociones y bonos especiales exclusivos para clientes de EcuaMAS. Más oportunidades de ganar.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-amber-400/50 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-400/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">💬</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">Soporte 24/7</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Nuestro equipo está disponible todos los días para ayudarte con cualquier duda o inconveniente.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-amber-400/50 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-400/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">🔒</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">100% Seguro</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Todas tus transacciones están protegidas. Agencia oficial y autorizada con años de experiencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 px-4 bg-gray-950/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            ¿Por Qué Elegirnos?
          </h2>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-amber-400 rounded-full flex items-center justify-center shrink-0 mt-1">
                <span className="text-gray-900 text-sm sm:text-base font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 sm:mb-2">Experiencia Comprobada</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">
                  Años de trayectoria siendo la agencia líder en Ecuador. Miles de clientes satisfechos nos respaldan.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-amber-400 rounded-full flex items-center justify-center shrink-0 mt-1">
                <span className="text-gray-900 text-sm sm:text-base font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 sm:mb-2">Cobertura Nacional</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">
                  Presencia en todo Ecuador. No importa donde estés, siempre estaremos cerca para atenderte.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-amber-400 rounded-full flex items-center justify-center shrink-0 mt-1">
                <span className="text-gray-900 text-sm sm:text-base font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 sm:mb-2">Transparencia Total</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">
                  Sin comisiones ocultas ni sorpresas. Lo que ves es lo que obtienes, simple y directo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-amber-400 rounded-full flex items-center justify-center shrink-0 mt-1">
                <span className="text-gray-900 text-sm sm:text-base font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 sm:mb-2">Atención Personalizada</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">
                  Cada cliente es importante para nosotros. Te brindamos un servicio personalizado y de calidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            ¡Comienza Hoy Mismo!
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
            Únete a la agencia #1 de apuestas en Ecuador y disfruta de todos nuestros beneficios
          </p>
          <RegisterButtons />
        </div>
      </section>
    </div>
  );
};