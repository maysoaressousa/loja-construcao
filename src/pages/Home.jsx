import { Link } from 'react-router-dom';
import { FaWhatsapp, FaStore, FaMotorcycle, FaInstagram, FaArrowRight } from 'react-icons/fa';
import Marketplaces from './Marketplaces';

export default function Home() {
  const numeroTelefone = "5585987133705"; // Substitua pelo número real da loja
  const whatsappUrl = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent("Olá! Estou na página inicial do site e gostaria de fazer um orçamento.")}`;

  const instagramPosts = [
    { id: 1, url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=500", link: "https://instagram.com" },
    { id: 2, url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500", link: "https://instagram.com" },
    { id: 3, url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500", link: "https://instagram.com" },
    { id: 4, url: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=500", link: "https://instagram.com" },
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* SEÇÃO HERO: Ultra limpa no mobile, robusta no desktop */}
      <section className="bg-azul-marca text-white py-12 px-4 text-center md:py-24 md:px-8 relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <span className="inline-block text-laranja-principal font-bold uppercase tracking-wider text-xs bg-laranja-principal/10 px-3 py-1.5 rounded-md">
            Do alicerce <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Collapsible Group Item #1
                    </button>
                  </h2>
                </div>
            
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
            </div> acabamento
          </span>
          
          <h1 className="text-3xl font-black tracking-tight leading-tight md:text-6xl">
            Tudo para a sua Obra com o <span className="text-laranja-principal">Melhor Preço</span>
          </h1>
          
          <p className="text-base text-slate-300 max-w-md mx-auto md:text-lg md:max-w-2xl">
            Faça seu orçamento pelo WhatsApp, pague sem sair de casa e retire no local ou peça um Uber Entrega.
          </p>
          
          {/* Botões: Stacking vertical no celular (w-full) e lado a lado no PC */}
          <div className="flex flex-col gap-3 pt-4 max-w-xs mx-auto sm:max-w-none sm:flex-row sm:justify-center">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-md active:scale-98 transition-all w-full sm:w-auto"
            >
              <FaWhatsapp size={20} />
              <span>Solicitar Orçamento</span>
            </a>
            
            <Link 
              to="/categorias" 
              className="flex items-center justify-center space-x-2 bg-transparent hover:bg-white/5 text-white font-medium py-4 px-6 rounded-xl border border-white/20 transition-all w-full sm:w-auto"
            >
              <span>Ver Produtos</span>
              <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* SEÇÃO LOGÍSTICA: Um embaixo do outro no celular, grid no PC */}
      <section className="py-12 px-4 max-w-7xl mx-auto md:py-20 md:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl font-extrabold text-azul-marca md:text-3xl">Compre e Retire com Agilidade</h2>
          <p className="text-slate-500 text-sm mt-1">Aqui você não perde tempo esperando entregas demoradas.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          {/* Card 1 */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center space-y-3">
            <div className="bg-orange-100 text-laranja-principal p-3.5 rounded-xl"><FaStore size={24} /></div>
            <h3 className="text-lg font-bold text-azul-marca">Retirada no Balcão</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Feche seu pedido pelo WhatsApp, passe na nossa loja e nós ajudamos a carregar tudo no seu veículo com rapidez.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center space-y-3">
            <div className="bg-green-100 text-green-600 p-3.5 rounded-xl"><FaMotorcycle size={24} /></div>
            <h3 className="text-lg font-bold text-azul-marca">Uber Flash / Moto</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Não pode vir? Solicite um motorista ou entregador de aplicativo (Uber/99) e nos envie o código. Despachamos na hora.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ENCAIXE A NOVA SEÇÃO AQUI */}
      <Marketplaces />

      {/* INSTAGRAM: Grid inteligente 2x2 no mobile e 4x1 no PC */}
      <section className="py-12 px-4 border-t border-slate-100 bg-slate-50/50 md:py-16 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8 space-y-2 md:flex-row md:justify-between md:text-left md:space-y-0">
            <div>
              <h2 className="text-2xl font-extrabold text-azul-marca flex items-center justify-center gap-2 md:justify-start">
                <FaInstagram className="text-pink-600" /> Siga a R3 no Instagram
              </h2>
              <p className="text-slate-500 text-sm">Acompanhe nossas novidades e ofertas de estoque.</p>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold px-4 py-2 rounded-xl text-xs shadow-sm transition-all">
              Acessar Perfil
            </a>
          </div>
          
          {/* grid-cols-2 no celular garante que as fotos não fiquem gigantes e verticais */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {instagramPosts.map((post) => (
              <a key={post.id} href={post.link} target="_blank" rel="noopener noreferrer" className="group relative aspect-square block overflow-hidden rounded-xl bg-slate-200">
                <img src={post.url} alt="Instagram" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <FaInstagram className="text-white text-xl md:text-2xl" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}