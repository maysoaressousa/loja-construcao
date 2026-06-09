import { FaTools, FaWrench, FaLightbulb, FaTint, FaBorderAll, FaLayerGroup } from 'react-icons/fa';

export default function Categorias() {
  const numeroTelefone = "5585999999999";

  const listaCategorias = [
    { id: 1, nome: "Material Básico", icone: <FaLayerGroup />, desc: "Cimento, tijolos, areia, brita, ferro e ferragens estruturais." },
    { id: 2, nome: "Hidráulica", icone: <FaTint />, desc: "Tubos, conexões, caixas d'água, registros e reparos." },
    { id: 3, nome: "Elétrica", icone: <FaLightbulb />, desc: "Fios, cabos, disjuntores, tomadas, interruptores e iluminação." },
    { id: 4, nome: "Ferramentas", icone: <FaWrench />, desc: "Ferramentas manuais e elétricas, discos de corte e EPIs." },
    { id: 5, nome: "Pisos e Revestimentos", icone: <FaBorderAll />, desc: "Cerâmicas, porcelanatos, argamassas e rejuntes." },
    { id: 6, nome: "Tintas e Acabamento", icone: <FaTools />, desc: "Tintas imobiliárias, massas, texturas, rolos e pincéis." },
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
            <div key={cat.id} className="bg-white rounded-2xl border border-slate-100 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                {/* Ícone menor e mais discreto no mobile */}
                <div className="bg-laranja-principal text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-sm flex-shrink-0">
                  {cat.icone}
                </div>
                <div className="space-y-1">
                  <h2 className="text-lg font-bold text-azul-marca">{cat.nome}</h2>
                  <p className="text-slate-500 text-xs leading-relaxed">{cat.desc}</p>
                </div>
              </div>
              
              <div className="pt-4 mt-4 border-t border-slate-100">
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