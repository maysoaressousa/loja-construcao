import { FaCheckCircle } from 'react-icons/fa';

// 1. Importação da imagem PNG trazida de volta para a pasta assets
import imgMarketplaces from '../assets/logo-r3.png'; // 👈 Verifique se o nome está exatamente igual ao seu arquivo físico

export default function Marketplaces() {
  return (
    <section className="bg-[#2b2d91] text-white py-12 px-4 md:py-16 relative overflow-hidden border-t border-white/5">
      {/* Detalhe decorativo de fundo */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-laranja-principal/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Grid de 12 colunas para organizar texto e imagem no PC */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* COLUNA 1: Textos e os Selos dos Marketplaces (Ocupa 7 colunas no PC) */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* Bloco de Textos */}
          <div className="space-y-2 max-w-xl mx-auto lg:mx-0">
            <span className="inline-block text-laranja-principal font-bold uppercase tracking-widest text-[10px] bg-laranja-principal/10 px-2.5 py-1 rounded">
              Garantia e Segurança
            </span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">
              Estamos nos melhores <span className="text-laranja-principal">Marketplaces</span> do Brasil!
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Se preferir, você também pode encontrar a qualidade da R3 Construções nas maiores plataformas de venda do país, contando com toda a segurança e suporte que você já conhece.
            </p>
          </div>

          {/* Grid dos Marketplaces */}
          <div className="grid grid-cols-2 gap-3 w-full sm:flex sm:justify-center lg:justify-start flex-wrap">
            <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 flex items-center justify-center space-x-2 text-xs font-semibold backdrop-blur-sm sm:min-w-[140px]">
              <FaCheckCircle className="text-laranja-principal flex-shrink-0" />
              <span>Mercado Livre</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 flex items-center justify-center space-x-2 text-xs font-semibold backdrop-blur-sm sm:min-w-[140px]">
              <FaCheckCircle className="text-laranja-principal flex-shrink-0" />
              <span>Magalu</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 flex items-center justify-center space-x-2 text-xs font-semibold backdrop-blur-sm sm:min-w-[140px]">
              <FaCheckCircle className="text-laranja-principal flex-shrink-0" />
              <span>Shopee</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 flex items-center justify-center space-x-2 text-xs font-semibold backdrop-blur-sm sm:min-w-[140px]">
              <FaCheckCircle className="text-laranja-principal flex-shrink-0" />
              <span>Leroy Merlin</span>
            </div>
          </div>

        </div>

        {/* COLUNA 2: Imagem PNG vinda de Assets (Ocupa 5 colunas no PC) */}
        <div className="lg:col-span-5 w-full h-64 sm:h-72 lg:h-[320px] rounded-2xl overflow-hidden shadow-xl bg-white/5 border border-white/10 flex items-center justify-center">
          <img 
            src={imgMarketplaces} // 👈 Vinculado à variável do import do topo
            alt="R3 Construções e Marketplaces parceiros" 
            className="w-full h-full object-cover" // 💡 DICA: Se for uma foto de fundo use object-cover. Se for uma imagem de logos com fundo transparente e você não quer que corte nada, mude para object-contain
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}