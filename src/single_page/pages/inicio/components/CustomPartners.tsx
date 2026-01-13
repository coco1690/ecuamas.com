import { CustomLogoEventosIB } from "@/components/custom/CustomLogoEventosIB";

export const CustomPartners = () => {
  const partners = [
    { name: 'Ecuabet', logo: '/assets/ecuabet_logo.png', url: 'https://www.ecuabet.com', type: 'image' },
    { name: 'Doradobet', logo: '/assets/doradobet_logo.png', url: 'https://www.doradobet.com', type: 'image' },
    { name: 'EventosIB', url: 'https://eventosib.com', type: 'component' },
  ];

  const handlePartnerClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-950/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-3 sm:mb-4">
          Nuestros Aliados
        </h2>
        <p className="text-sm sm:text-base text-center text-gray-400 mb-8 sm:mb-12">
          Somos la agencia principal de nuestros aliados
        </p>
        
        {/* Desktop - Grid normal */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              onClick={() => handlePartnerClick(partner.url)}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer"
            >
              {partner.type === 'image' ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-auto object-contain"
                />
              ) : (
                <div className="h-16 flex items-center">
                  <CustomLogoEventosIB />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile - CSS Animation */}
        <div className="md:hidden overflow-hidden relative">
          <div className="flex animate-scroll-left">
            {[...Array(3)].map((_, repeatIndex) => 
              partners.map((partner, index) => (
                <div
                  key={`${repeatIndex}-${index}`}
                  onClick={() => handlePartnerClick(partner.url)}
                  className="flex items-center justify-center shrink-0 mx-4 cursor-pointer grayscale active:grayscale-0 opacity-60 active:opacity-100 transition-all duration-300"
                >
                  {partner.type === 'image' ? (
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="h-12 w-auto object-contain" 
                    />
                  ) : (
                    <div className="h-12 flex items-center scale-90">
                      <CustomLogoEventosIB />
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};