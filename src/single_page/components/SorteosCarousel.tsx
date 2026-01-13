import { useEffect } from 'react';
import { useSorteosStore } from '@/store/useSorteosStore';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MousePointerClick } from 'lucide-react';

import 'swiper/swiper-bundle.css';

export const SorteosCarousel = () => {
  const { loading, error, fetchSorteos, getSorteosActivos } = useSorteosStore();

  useEffect(() => {
    fetchSorteos();
  }, [fetchSorteos]);

  const sorteosActivos = getSorteosActivos().filter(
    sorteo => sorteo.imagenes && sorteo.imagenes.length > 0
  );

  if (loading && sorteosActivos.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-800/50 rounded-2xl flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-96 bg-gray-800/50 rounded-2xl flex items-center justify-center">
        <p className="text-red-400">Error: {error}</p>
      </div>
    );
  }

  if (sorteosActivos.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-800/50 rounded-2xl flex items-center justify-center">
        <p className="text-gray-400">No hay sorteos activos</p>
      </div>
    );
  }

  const sorteoActivo = sorteosActivos[0];
  const imagenes = sorteoActivo.imagenes || [];

  const handleClick = () => {
    window.open('https://eventosib.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={imagenes.length > 1}
        speed={800}
        className="h-96 md:h-125 w-full cursor-pointer"
      >
        {imagenes.map((imagen, index) => (
          <SwiperSlide key={index} onClick={handleClick}>
            <div className="relative w-full h-full">
              <img
                src={imagen}
                alt={`${sorteoActivo.titulo} - Imagen ${index + 1}`}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-4xl font-bold mb-2">
                  {sorteoActivo.titulo}
                </h3>
                {sorteoActivo.subtitulo && (
                  <p className="text-base md:text-xl text-gray-200 mb-4">
                    {sorteoActivo.subtitulo}
                  </p>
                )}
                <div className="flex items-center gap-4">
                  <span className="px-4 py-2 bg-amber-400 text-gray-900 font-bold rounded-lg">
                    ${sorteoActivo.precio_boleta}
                  </span>
                </div>
              </div>

              <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                Activo
              </div>

              {imagenes.length > 1 && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                  {index + 1} / {imagenes.length}
                </div>
              )}

              {/* Badge de clic */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-amber-400 text-gray-900 font-bold rounded-full shadow-2xl animate-pulse">
                  <MousePointerClick className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  <span className="text-xs sm:text-sm md:text-base">Haz clic aquí para participar</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};