import { useState } from 'react'; 
import { FaWhatsapp, FaTag, FaClock, FaSearchPlus, FaTimes } from 'react-icons/fa'; 

// Importação dos seus encartes reais
import imgOferta1 from '../assets/oferta-1.jpg'; 
import imgOferta2 from '../assets/oferta-2.jpg';
import imgOferta3 from '../assets/oferta-3.jpg';

export default function SecaoOfertas() {
  const numeroTelefone = "5585987133705";
  
  // Estado para controlar o Zoom da Imagem
  const [imagemZoom, setImagemZoom] = useState(null);

  // Array simplificado (removido os atributos antigos de preço)
  const listaOfertas = [
    {
      id: 1,
      nome: "Portaria Eletrônica",
      desconto: "OFERTAS ESPECIAIS",
      aviso: "Estoque Limitado",
      imageUrl: imgOferta1,
    },
    {
      id: 2,
      nome: "Extensões Elétricas e Hidráulicas",
      desconto: "OFERTAS ESPECIAIS",
      aviso: "Estoque Limitado",
      imageUrl: imgOferta2,
    },
    {
      id: 3,
      nome: "Tudo para sua obra e reforma",
      desconto: "OFERTAS ESPECIAIS",
      aviso: "Estoque Limitado",
      imageUrl: imgOferta3,
    },
  ];

  const handleGarantirOferta = (nomeProduto) => {
    const message = `Olá! Vi o encarte de oferta do "${nomeProduto}" no site e gostaria de garantir as minhas condições direto pelo WhatsApp!`;
    const url = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-12 bg-amber-50/40 border-b border-amber-100 px-4 md:py-16 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center mb-8 space-y-2 md:flex-row md:justify-between md:text-left md:space-y-0 border-b border-amber-200/60 pb-4">
          <div>
            <h2 className="text-2xl font-black text-azul-marca flex items-center justify-center gap-2 md:justify-start uppercase">
              <FaTag className="text-laranja-principal animate-bounce" /> Ofertas Imbatíveis
            </h2>
            <p className="text-slate-500 text-sm">Os melhores preços da região, válidos enquanto durar o estoque!</p>
          </div>
          <div className="flex items-center gap-2 bg-laranja-principal/10 text-laranja-principal px-3 py-1.5 rounded-xl text-xs font-bold border border-laranja-principal/20">
            <FaClock className="animate-spin [animation-duration:10s]" />
            <span>OFERTAS DA SEMANA</span>
          </div>
        </div>

        {/* Grid de Ofertas */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 md:gap-6">
          {listaOfertas.map((prod) => (
            <div key={prod.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col relative group">
              
              {/* Tag de Desconto */}
              <span className="absolute top-3 left-3 z-10 bg-laranja-principal text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-sm">
                {prod.desconto}
              </span>

              {/* CONTAINER DA IMAGEM CLICÁVEL */}
              <div 
                onClick={() => setImagemZoom(prod.imageUrl)}
                className="relative h-52 sm:h-64 md:h-72 lg:h-80 overflow-hidden bg-slate-50 flex-shrink-0 border-b border-slate-100 cursor-pointer group/img"
                title="Clique para ampliar"
              >
                <img
                  src={prod.imageUrl}
                  alt={prod.nome}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white text-xs font-bold gap-2">
                  <div className="bg-white/20 p-2.5 rounded-full backdrop-blur-sm">
                    <FaSearchPlus size={18} />
                  </div>
                  <span className="bg-slate-950/60 px-2 py-1 rounded-md text-[10px] tracking-wide uppercase">Clique para ampliar</span>
                </div>
              </div>

              {/* Informações da Oferta */}
              <div className="p-4 flex flex-col justify-between flex-1 space-y-4 bg-white">
                <div className="space-y-1.5">
                  <span className="text-[9px] font-bold uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 inline-block">
                    {prod.aviso}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-azul-marca line-clamp-2 min-h-[32px] sm:min-h-[40px] leading-tight">
                    {prod.nome}
                  </h3>
                  
                  {/* 🛠️ A caixinha antiga de preço ("De / Por") foi completamente excluída daqui */}
                </div>

                {/* Botão de Direcionamento */}
                <button
                  onClick={() => handleGarantirOferta(prod.nome)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl transition-all text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-98 cursor-pointer"
                >
                  <FaWhatsapp size={16} />
                  <span>Eu Quero</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* MODAL LIGHTBOX (Mantido para facilitar a leitura em tela cheia) */}
      {imagemZoom && (
        <div 
          onClick={() => setImagemZoom(null)} 
          className="fixed inset-0 bg-slate-950/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300 cursor-zoom-out"
        >
          <button 
            onClick={() => setImagemZoom(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer shadow-md"
          >
            <FaTimes size={20} />
          </button>

          <img
            src={imagemZoom}
            alt="Encarte de Oferta Ampliado"
            onClick={(e) => e.stopPropagation()} 
            className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-xl shadow-2xl transition-transform duration-300 border border-white/10"
          />
        </div>
      )}

    </section>
  );
}