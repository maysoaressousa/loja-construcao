import { FaTools, FaWrench, FaLightbulb, FaTint, FaBorderAll, FaLayerGroup } from 'react-icons/fa';
import imgBasico from '../assets/material-basico.png';
import imgHidraulica from '../assets/hidraulica.png';
import imgEletrica from '../assets/eletrica.png';
import imgFerramentas from '../assets/ferramentas.png';
import imgPisos from '../assets/pisos-e-revestimentos.png';
import imgTintas from '../assets/tintas.png';

export default function Categorias() {
  const numeroTelefone = "5585987133705";

  // 2. Troque as strings fixas pelas variáveis que você importou acima
  const listaCategorias = [
    {
      id: 1,
      nome: "Material Básico",
      icone: <FaLayerGroup />,
      desc: "Cimento, tijolos, areia, brita, ferro e ferragens estruturais.",
      imageUrl: imgBasico, // 👈 Agora aponta para a imagem importada
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
    const mensagem = `Olá! Estou vendo a categoria de "${nomeCategoria}" no site e gostaria de consultar a disponibilidade e valores.`;
    const url = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 px-4 md:py-16 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-16">
          <h1 className="text-3xl font-black text-azul-marca tracking-tight md:text-4xl">Nossas Categorias</h1>
          <p className="text-slate-500 text-sm mt-2 md:text-base">
            Trabalhamos com as melhores marcas do mercado. Selecione a categoria abaixo para cotar direto pelo WhatsApp.
          </p>
        </div>

        {/* 1 coluna no celular, 2 no tablet, 3 no PC */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {listaCategorias.map((cat) => (
            <div key={cat.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cat.imageUrl}
                  alt={cat.nome}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute left-4 bottom-4 text-white">
                  <div className="bg-laranja-principal text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-sm">
                    {cat.icone}
                  </div>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <h2 className="text-lg font-bold text-azul-marca">{cat.nome}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{cat.desc}</p>
                </div>

                <button
                  onClick={() => handleConsultarEstoque(cat.nome)}
                  className="w-full bg-slate-100 hover:bg-laranja-principal hover:text-white text-azul-marca font-semibold py-3 px-4 rounded-xl transition-all text-xs flex items-center justify-center"
                >
                  Consultar Disponibilidade
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}