import { FaTools, FaWrench, FaLightbulb, FaTint, FaBorderAll, FaLayerGroup, FaWhatsapp } from 'react-icons/fa';
import imgBasico from '../assets/material-basico.png';
import imgHidraulica from '../assets/hidraulica.png';
import imgEletrica from '../assets/eletrica.png';
import imgFerramentas from '../assets/ferramentas.png';
import imgPisos from '../assets/pisos-e-revestimentos.png';
import imgTintas from '../assets/tintas.png';

export default function Categorias() {
  const numeroTelefone = "5585987133705";

  const listaCategorias = [
    {
      id: 1,
      nome: "Material Básico",
      icone: <FaLayerGroup />,
      desc: "Cimento, tijolos, areia, brita, ferro e ferragens estruturais.",
      imageUrl: imgBasico,
    },
    {
      id: 2,
      nome: "Hidráulica",
      icone: <FaTint />,
      desc: "Tubos, conexões, caixas d'água, registros e reparos.",
      imageUrl: imgHidraulica,
    },
    {
      id: 3,
      nome: "Elétrica",
      icone: <FaLightbulb />,
      desc: "Fios, cabos, disjuntores, tomadas, interruptores e iluminação.",
      imageUrl: imgEletrica,
    },
    {
      id: 4,
      nome: "Ferramentas",
      icone: <FaWrench />,
      desc: "Ferramentas manuais e elétricas, discos de corte e EPIs.",
      imageUrl: imgFerramentas,
    },
    {
      id: 5,
      nome: "Pisos e Revestimentos",
      icone: <FaBorderAll />,
      desc: "Cerâmicas, porcelanatos, argamassas e rejuntes.",
      imageUrl: imgPisos,
    },
    {
      id: 6,
      nome: "Tintas e Acabamento",
      icone: <FaTools />,
      desc: "Tintas imobiliárias, massas, texturas, rolos e pincéis.",
      imageUrl: imgTintas,
    },
  ];

  const handleConsultarEstoque = (nomeCategoria) => {
    const message = `Olá! Estou vendo a categoria de "${nomeCategoria}" no site e gostaria de consultar a disponibilidade e valores.`;
    const url = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 px-4 md:py-16 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-16">
          <h1 className="text-3xl font-black text-azul-marca tracking-tight md:text-4xl">Nossas Categorias</h1>
          <p className="text-slate-500 text-sm mt-2 md:text-base">
            Trabalhamos com as melhores marcas do mercado. Selecione a categoria abaixo para cotar direto pelo WhatsApp.
          </p>
        </div>

        {/* Grid de Cards - Ajustado para flexbox interno */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {listaCategorias.map((cat) => (
            <div key={cat.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              
              {/* Container da Imagem (Agora limpo, sem o botão absoluto) */}
              <div className="relative h-44 overflow-hidden flex-shrink-0">
                <img
                  src={cat.imageUrl}
                  alt={cat.nome}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute left-4 bottom-4 text-white">
                  <div className="bg-laranja-principal text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-md">
                    {cat.icone}
                  </div>
                </div>
              </div>

              {/* Conteúdo de Texto e Botão Inferior */}
              <div className="p-5 flex flex-col justify-between flex-1 space-y-5">
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-azul-marca">{cat.nome}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{cat.desc}</p>
                </div>

                {/* O botão do WhatsApp agora fica aqui, estilizado em verde e com o ícone oficial */}
                <button
                  onClick={() => handleConsultarEstoque(cat.nome)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl transition-all text-xs flex items-center justify-center gap-2 shadow-sm hover:shadow active:scale-98 cursor-pointer"
                >
                  <FaWhatsapp size={16} />
                  <span>Consultar via WhatsApp</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}