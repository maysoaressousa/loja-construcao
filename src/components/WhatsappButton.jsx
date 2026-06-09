import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsappButton() {
  const numeroTelefone = "5585987133705"; // Substitua pelo número real da loja com DDD
  const mensagemPadrao = "Olá! Estou navegando no site de vocês e gostaria de fazer uma cotação.";
  const url = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagemPadrao)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Falar no WhatsApp"
    >
      {/* Efeito de onda pulsante decorativa */}
      <span className="absolute inset-0 rounded-full bg-green-500 -z-10 animate-ping opacity-25 group-hover:scale-125 transition-all duration-300"></span>
      
      {/* Ícone */}
      <FaWhatsapp size={28} />
    </a>
  );
}