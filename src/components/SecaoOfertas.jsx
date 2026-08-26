import { useState } from 'react'; 
import { FaWhatsapp, FaTag, FaClock, FaSearchPlus, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa'; 

// Importe suas 9 novas imagens salvas na pasta src/assets/
import imgOferta1 from '../assets/oferta(1).jpg'; // Cavalete Maestro 7 Degraus
import imgOferta2 from '../assets/oferta(2).jpg'; // Cavalete Quality 8 Degraus
import imgOferta3 from '../assets/oferta(3).jpg'; // Cavalete BTF 4 Degraus
import imgOferta4 from '../assets/oferta(4).jpg'; // Cavalete Pratik 5 Degraus
import imgOferta5 from '../assets/oferta(5).jpg'; // Cavalete Quality 6 Degraus
import imgOferta6 from '../assets/oferta(6).jpg'; // Ducha Quadrada Branca Lar (Ref 8102)
import imgOferta7 from '../assets/oferta(7).jpg'; // Chuveiro Articulado Cromado (Ref 10510)
import imgOferta8 from '../assets/oferta(8).jpg'; // Ducha 115 Quadrada Cromada (Ref 1030)
import imgOferta9 from '../assets/oferta(9).jpg'; // Ducha Cromada 4" Maxi D (Ref 7398)

export default function SecaoOfertas() {
  const numeroTelefone = "5585987133705";
  
  // Estados do componente
  const [imagemZoom, setImagemZoom] = useState(null); 
  const [mostrarTodas, setMostrarTodas] = useState(false); 

  // Array com os 9 encartes reais da R3
  const listaOfertas = [
    {
      id: 1,
      nome: "Cavalete Maestro Alumínio - 7 Degraus",
      desconto: "6X SEM JUROS",
      aviso: "DESTAQUE",
      imageUrl: imgOferta1,
    },
    {
      id: 2,
      nome: "Ducha Cromada 4\" Maxi D - Lumar (Ref: 7398)",
      desconto: "ECONOMIA",
      aviso: "ÁGUA NA TEMPERATURA CERTA",
      imageUrl: imgOferta2, 
    },
    {
      id: 3,
      nome: "Ducha 115 Quadrada Cromada - Lumar (Ref: 1030)",
      desconto: "DESTAQUE",
      aviso: "LUMAR METAIS",
      imageUrl: imgOferta3, 
    },
    {
      id: 4,
      nome: "Ducha Quadrada Branca Lar - Sorte Metais (Ref: 8102)",
      desconto: "OFERTA",
      aviso: "SORTE METAIS",
      imageUrl: imgOferta4, 
    },
    {
      id: 5,
      nome: "Chuveiro Articulado Cromado - Sorte Metais (Ref: 10510)",
      desconto: "SUPER PREÇO",
      aviso: "ACABAMENTO CROMADO",
      imageUrl: imgOferta5, 
    },
    {
      id: 6,
      nome: "Cavalete Quality Alumínio - 6 Degraus",
      desconto: "6X SEM JUROS",
      aviso: "ALTA RESISTÊNCIA",
      imageUrl: imgOferta6, 
    },
    {
      id: 7,
      nome: "Cavalete Pratik Alumínio - 5 Degraus",
      desconto: "6X SEM JUROS",
      aviso: "MAIS VENDIDO",
      imageUrl: imgOferta7, 
    },
    {
      id: 8,
      nome: "Cavalete BTF Alumínio - 4 Degraus",
      desconto: "6X SEM JUROS",
      aviso: "COMPACTO & PRÁTICO",
      imageUrl: imgOferta8,
    },
    {
      id: 9,
      nome: "Cavalete Quality Alumínio - 8 Degraus",
      desconto: "6X SEM JUROS",
      aviso: "ALCANCE MÁXIMO",
      imageUrl: imgOferta9,
    },
  ];

  // Exibe 3 ofertas por padrão ou todas as 9 ao expandir
  const ofertasExibidas = mostrarTodas ? listaOfertas : listaOfertas.slice(0, 3);

  const handleGarantirOferta = (nomeProduto) => {
    const message = `Olá! Vi o encarte de oferta para "${nomeProduto}" no site e gostaria de garantir as minhas condições direto pelo WhatsApp!`;
    const url = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-12 bg-amber-50/40 border-b border-amber-100 px-4 md:py-16 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center mb-8 space-y-3 md:flex-row md:justify-between md:text-left md:space-y-0 border-b border-amber-200/60 pb-4">
          <div>
            <h2 className="text-2xl font-black text-azul-marca flex items-center justify-center gap-2 md:justify-start uppercase">
              <FaTag className="text-laranja-principal animate-bounce" /> Ofertas Imbatíveis
            </h2>
            <p className="text-slate-500 text-sm">Escadas, cavaletes, duchas e materiais com as melhores condições da região!</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-laranja-principal/10 text-laranja-principal px-3 py-1.5 rounded-xl text-xs font-bold border border-laranja-principal/20">
              <FaClock className="animate-spin [animation-duration:10s]" />
              <span>OFERTAS DA SEMANA</span>
            </div>

            {/* Link rápido "Ver Todas" no cabeçalho */}
            {listaOfertas.length > 3 && (
              <button
                onClick={() => setMostrarTodas(!mostrarTodas)}
                className="text-xs font-bold text-laranja-principal hover:text-laranja-hover flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>{mostrarTodas ? 'Ver Menos' : `Ver todas (${listaOfertas.length})`}</span>
                {mostrarTodas ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
              </button>
            )}
          </div>
        </div>

        {/* Grid de Ofertas */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 md:gap-6">
          {ofertasExibidas.map((prod) => (
            <div key={prod.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col relative group animate-fade-in">
              
              {/* Tag de Desconto / Condição */}
              <span className="absolute top-3 left-3 z-10 bg-laranja-principal text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-sm uppercase">
                {prod.desconto}
              </span>

              {/* Container da Imagem com proporção 3:4 perfeita para folhetos */}
              <div 
                onClick={() => setImagemZoom(prod.imageUrl)}
                className="relative aspect-[3/4] w-full overflow-hidden bg-slate-900 flex-shrink-0 border-b border-slate-100 cursor-pointer group/img"
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
                  <span className="text-[9px] font-bold uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 inline-block">
                    {prod.aviso}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-azul-marca line-clamp-2 min-h-[32px] sm:min-h-[40px] leading-tight">
                    {prod.nome}
                  </h3>
                </div>

                {/* Botão de WhatsApp */}
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

        {/* Botão Principal de Expandir */}
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

      {/* Modal Lightbox (Zoom em Tela Cheia) */}
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