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
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-black text-slate-800 tracking-tight">Nossas Categorias</h1>
          <p className="text-slate-600 mt-2 text-lg">
            Trabalhamos com marcas líderes do mercado para garantir a segurança da sua estrutura. Solicite valores direto pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listaCategorias.map((cat) => (
            <div key={cat.id} className="bg-white rounded-2xl shadow-md border border-slate-100 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-200">
              <div className="space-y-4">
                <div className="bg-amber-500 text-white w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-md shadow-amber-500/20">
                  {cat.icone}
                </div>
                <h2 className="text-2xl font-bold text-slate-800">{cat.nome}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{cat.desc}</p>
              </div>
              
              <div className="pt-6 mt-6 border-t border-slate-50">
                <button
                  onClick={() => handleConsultarEstoque(cat.nome)}
                  className="w-full bg-slate-800 hover:bg-amber-600 text-white font-semibold py-3 px-4 rounded-xl transition-all text-sm flex items-center justify-center space-x-2"
                >
                  <span>Consultar esta Categoria</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}