import { useState } from 'react'; 
import { FaWhatsapp, FaGift, FaClock, FaSearchPlus, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa'; 

// Importação das suas 6 imagens de ofertas
import imgOferta1 from '../assets/oferta-1.jpg'; 
import imgOferta2 from '../assets/oferta-2.jpg';
import imgOferta3 from '../assets/oferta-3.jpg';
import imgOferta4 from '../assets/oferta-4.jpg';
import imgOferta5 from '../assets/oferta-5.jpg';
import imgOferta6 from '../assets/oferta-6.jpg';

export default function SecaoOfertas() {
  const numeroTelefone = "5585987133705";
  
  // Estados do componente
  const [imagemZoom, setImagemZoom] = useState(null); 
  const [mostrarTodas, setMostrarTodas] = useState(false); 

  // Array com as suas 6 Ofertas
  const listaOfertas = [
    {
      id: 1,
      nome: "Furadeira de Impacto Bosch",
      desconto: "DIA DOS PAIS",
      aviso: "PRESENTE IDEAL",
      imageUrl: imgOferta1,
    },
    {
      id: 2,
      nome: "Furadeira de Impacto Multilaser",
      desconto: "DIA DOS PAIS",
      aviso: "PARA O PAIZÃO",
      imageUrl: imgOferta2,
    },
    {
      id: 3,
      nome: "Furadeira de Impacto Worker",
      desconto: "DIA DOS PAIS",
      aviso: "ESTOQUE LIMITADO",
      imageUrl: imgOferta3,
    },
    {
      id: 4,
      nome: "Furadeira de Impacto Skill",
      desconto: "DIA DOS PAIS",
      aviso: "PAI FERRAMENTISTA",
      imageUrl: imgOferta4, 
    },
    {
      id: 5,
      nome: "Furadeira de Impacto Tramontina",
      desconto: "DIA DOS PAIS",
      aviso: "REFORMA DA CASA",
      imageUrl: imgOferta5, 
    },
    {
      id: 6,
      nome: "Furadeira de Impacto Goodyear",
      desconto: "DIA DOS PAIS",
      aviso: "OFERTA IMPERDÍVEL",
      imageUrl: imgOferta6, 
    },
  ];

  // Exibe 3 ofertas por padrão ou todas as 6 ao clicar em "Ver Mais"
  const ofertasExibidas = mostrarTodas ? listaOfertas : listaOfertas.slice(0, 3);

  const handleGarantirOferta = (nomeProduto) => {
    const message = `Olá! Vi o encarte do Especial Dia dos Pais para "${nomeProduto}" no site e gostaria de garantir as minhas condições direto pelo WhatsApp!`;
    const url = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-12 bg-blue-950/5 border-b border-blue-900/10 px-4 md:py-16 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Seção com Link "Ver Mais" rápido no topo */}
        <div className="flex flex-col items-center text-center mb-8 space-y-3 md:flex-row md:justify-between md:text-left md:space-y-0 border-b border-blue-900/10 pb-4">
          <div>
            <h2 className="text-2xl font-black text-azul-marca flex items-center justify-center gap-2 md:justify-start uppercase">
              <FaGift className="text-laranja-principal animate-bounce" /> Especial Dia dos Pais
            </h2>
            <p className="text-slate-500 text-sm">Presentes, ferramentas e materiais com as melhores condições para o seu paizão!</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-blue-900/10 text-azul-marca px-3 py-1.5 rounded-xl text-xs font-bold border border-blue-900/20">
              <FaClock className="animate-spin [animation-duration:10s] text-laranja-principal" />
              <span>OFERTAS DA SEMANA</span>
            </div>

            {/* Link rápido "Ver Todas" no Cabeçalho */}
            {listaOfertas.length > 3 && (
              <button
                onClick={() => setMostrarTodas(!mostrarTodas)}
                className="text-xs font-bold text-laranja-principal hover:text-laranja-hover flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>{mostrarTodas ? 'Ver Menos' : `Ver mais (${listaOfertas.length})`}</span>
                {mostrarTodas ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
              </button>
            )}
          </div>
        </div>

        {/* Grid de Ofertas Dinâmico */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 md:gap-6">
          {ofertasExibidas.map((prod) => (
            <div key={prod.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col relative group animate-fade-in">
              
              {/* Tag Temática do Card */}
              <span className="absolute top-3 left-3 z-10 bg-laranja-principal text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-sm uppercase">
                {prod.desconto}
              </span>

              {/* 🛠️ CONTAINER DA IMAGEM: Proporção quadrada sem cortes */}
              <div 
                onClick={() => setImagemZoom(prod.imageUrl)}
                className="relative aspect-square w-full overflow-hidden bg-slate-900 flex-shrink-0 border-b border-slate-100 cursor-pointer group/img"
                title="Clique para ampliar"
              >
                <img
                  src={prod.imageUrl}
                  alt={prod.nome}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover/img:scale-102"
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
                  <span className="text-[9px] font-bold uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 inline-block">
                    {prod.aviso}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-azul-marca line-clamp-2 min-h-[32px] sm:min-h-[40px] leading-tight">
                    {prod.nome}
                  </h3>
                </div>

                {/* Botão de Direcionamento ao WhatsApp */}
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

        {/* BOTÃO PRINCIPAL DE EXPANDIR NO RODAPÉ DA SEÇÃO */}
        {listaOfertas.length > 3 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setMostrarTodas(!mostrarTodas)}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-azul-marca font-bold px-6 py-3 rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow active:scale-98 cursor-pointer text-xs sm:text-sm uppercase tracking-wide"
            >
              <span>{mostrarTodas ? 'Mostrar Menos Ofertas' : `Ver Mais Ofertas (${listaOfertas.length - 3} restantes)`}</span>
              {mostrarTodas ? <FaChevronUp size={14} className="text-laranja-principal" /> : <FaChevronDown size={14} className="text-laranja-principal" />}
            </button>
          </div>
        )}

      </div>

      {/* MODAL LIGHTBOX (Zoom em Tela Cheia) */}
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