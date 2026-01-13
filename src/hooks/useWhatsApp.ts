export const useWhatsApp = () => {
  const phoneNumber = "593989536961";

  const openWhatsApp = (message: string = "Hola! vengo de ecuamas.com Necesito ayuda con recargas o notas de retiros.") => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return { openWhatsApp, phoneNumber };
};