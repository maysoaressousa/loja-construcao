import { FaCheckCircle } from 'react-icons/fa';

export default function Marketplaces() {
  return (
    <section className="bg-azul-marca text-white py-12 px-4 md:py-16 relative overflow-hidden border-t border-white/5">
      {/* Detalhe decorativo de fundo */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-laranja-principal/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between gap-8 relative z-10">
        
        {/* Textos */}
        <div className="space-y-2 max-w-xl">
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

        {/* Grid dos Marketplaces (Responsivo) */}
        <div className="grid grid-cols-2 gap-3 w-full sm:flex sm:justify-center lg:w-auto flex-wrap">
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
    </section>
  );
}