import { Link } from 'react-router-dom';
import { FaWhatsapp, FaStore, FaMotorcycle, FaInstagram, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  const numeroTelefone = "5585987133705"; 
  const whatsappUrl = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent("Olá! Estou na página inicial do site e gostaria de fazer um orçamento.")}`;

  // Dados falsos (mock) para o feed do Instagram
  const instagramPosts = [
    { id: 1, url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=500", link: "https://instagram.com/r3.contrucoess" },
    { id: 2, url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500", link: "https://instagram.com/r3.contrucoess" },
    { id: 3, url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500", link: "https://instagram.com/r3.contrucoess" },
    { id: 4, url: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=500", link: "https://instagram.com/r3.contrucoess" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Seção Hero (Banner Principal) */}
      <section className="relative bg-azul-marca text-white py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200')` }}></div>
        <div className="relative max-w-4xl mx-auto text-center space-y-6 z-10">
          <span className="text-laranja-principal font-bold uppercase tracking-wider text-sm bg-laranja-principal/10 px-3 py-1 rounded-full">Do alicerce ao acabamento</span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
            Tudo para a sua Obra com o <span className="text-laranja-principal">Melhor Preço</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            Faça seu orçamento pelo WhatsApp, pague sem sair de casa e retire no local ou envie um Uber Entrega.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all w-full sm:w-auto justify-center">
              <FaWhatsapp size={24} />
              <span>Solicitar Orçamento Agora</span>
            </a>
            <Link to="/categorias" className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white font-medium px-8 py-4 rounded-xl transition-all w-full sm:w-auto justify-center border border-slate-600">
              <span>Ver Produtos</span>
              <FaArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Como Funciona (Retirada/Uber) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-slate-800">Compre e Retire com Agilidade</h2>
          <p className="text-slate-600 mt-2">Esqueça fretes demorados. Aqui você está no controle do envio.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col items-center text-center space-y-4">
            <div className="bbg-orange-100 text-laranja-principal p-4 rounded-full"><FaStore size={32} /></div>
            <h3 className="text-xl font-bold text-slate-800">Retirada no Balcão</h3>
            <p className="text-slate-600 text-sm">Feche o pedido pelo WhatsApp, passe na nossa loja física e nós ajudamos você a carregar tudo no seu veículo com rapidez.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col items-center text-center space-y-4">
            <div className="bg-green-100 text-green-600 p-4 rounded-full"><FaMotorcycle size={32} /></div>
            <h3 className="text-xl font-bold text-slate-800">Uber Flash / Moto</h3>
            <p className="text-slate-600 text-sm">Não pode vir buscar? Solicite um motorista ou entregador de aplicativo (Uber/99) e nos envie o código. Despachamos para você imediatamente.</p>
          </div>
        </div>
      </section>

      {/* Seção Feed do Instagram */}
      <section className="bg-white py-16 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-black text-slate-800 flex items-center gap-2">
                <FaInstagram className="text-pink-600" /> Siga nosso Instagram
              </h2>
              <p className="text-slate-600 mt-1">Fique por dentro das novidades, ofertas e reposições de estoque.</p>
            </div>
            <a href="https://instagram.com/r3.contrucoess" target="_blank" rel="noopener noreferrer" className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-5 py-2.5 rounded-xl transition-all flex items-center space-x-2 text-sm">
              <span>Acessar @r3.contrucoess</span>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <a key={post.id} href={post.link} target="_blank" rel="noopener noreferrer" className="group relative aspect-square block overflow-hidden rounded-xl bg-slate-200 shadow-sm">
                <img src={post.url} alt="Post do Instagram" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <FaInstagram className="text-white text-3xl" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}