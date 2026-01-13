import { RegisterButtons } from "@/single_page/components/RegisterButtons"


export const CustomJumBotron = () => {
    return (
        <>
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

            <section className="py-12 sm:py-20 px-4">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                        ¡Regístrate Hoy mismo y participa en nuestros Eventos!
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
                        Únete a la agencia #1 de apuestas en Ecuador y disfruta de todos nuestros beneficios
                    </p>
                    <RegisterButtons />
                </div>
            </section>
        </>
    )
}
