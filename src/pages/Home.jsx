import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaStore, FaMotorcycle, FaInstagram, FaArrowRight } from 'react-icons/fa';
import Marketplaces from './Marketplaces';
import Categorias from './Categorias'; 
import SecaoOfertas from '../components/SecaoOfertas';


// 1. Importe as imagens dos seus banners e posts do Instagram
import banner1 from '../assets/banner-1.png'; 
import banner2 from '../assets/banner-2.png';
import banner3 from '../assets/banner-3.png';
import banner4 from '../assets/banner-4.png';
import banner5 from '../assets/banner-5.png';
import instagram1 from '../assets/instagram-1.jpg';
import instagram2 from '../assets/instagram-2.jpg';
import instagram3 from '../assets/instagram3.jpg';
import instagram4 from '../assets/instagram-4.jpg';
import imgLogistica from '../assets/instagram-2.jpg'; // 

export default function Home() {
  const numeroTelefone = "5585987133705";
  const whatsappUrl = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent("Olá! Estou na página inicial do site e gostaria de fazer um orçamento.")}`;

  // 2. Agrupe os banners em um array
  const banners = [banner1, banner2, banner3, banner4];
  
  // Estado para controlar qual banner está ativo
  const [currentSlide, setCurrentSlide] = useState(0);

  // Efeito para rodar os banners automaticamente a cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 5000); // 5000ms = 5 segundos

    return () => clearInterval(intervalo); // Limpa o intervalo se o usuário mudar de página
  }, [banners.length]);

  // Array do Instagram com imagens reais
  const instagramPosts = [
    { id: 1, url: instagram1, link: 'https://www.instagram.com/r3.construcoess/' },
    { id: 2, url: instagram2, link: 'https://www.instagram.com/r3.construcoess/' },
    { id: 3, url: instagram3, link: 'https://www.instagram.com/r3.construcoess/' },
    { id: 4, url: instagram4, link: 'https://www.instagram.com/r3.construcoess/' },
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* SEÇÃO HERO: Banners rotativos */}
      <section className="relative bg-[#0a1931] text-white overflow-hidden w-full flex flex-col md:block">
        
        {/* CONTAINER DOS BANNERS */}
        <div className="relative w-full aspect-[16/7] sm:aspect-[21/9] md:h-[500px] lg:h-[600px] overflow-hidden flex items-center justify-center bg-[#0a1931]">
          {banners.map((banner, index) => (
            <img
              key={index}
              src={banner}
              alt={`Banner R3 ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        
        {/* CAMADA DO CONTEÚDO: Botões fixos na base */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-center md:justify-start px-4 pb-4 md:pl-12 md:pb-8 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pt-16">
          <div className="flex flex-col sm:flex-row gap-3 p-2.5 rounded-2xl bg-slate-950/40 backdrop-blur-md border border-white/10 shadow-2xl w-full max-w-sm sm:max-w-none sm:w-auto">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 rounded-xl shadow-lg active:scale-95 transition-all w-full sm:w-auto cursor-pointer text-xs md:text-sm"
            >
              <FaWhatsapp size={18} />
              <span>Solicitar Orçamento</span>
            </a>
            
            <Link 
              to="/categorias" 
              className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-5 rounded-xl border border-white/10 backdrop-blur-sm transition-all w-full sm:w-auto cursor-pointer text-xs md:text-sm"
            >
              <span>Ver Produtos</span>
              <FaArrowRight size={14} />
            </Link>
          </div>
        </div>

      </section>

      {/* SEÇÃO OFERTAS: Grid de Ofertas com 2 colunas no celular e 4 no PC */}
      <SecaoOfertas />

      {/* 🚀 SEÇÃO CATEGORIAS
          Ela vai carregar exatamente o grid com as imagens dos produtos e os botões verdes do WhatsApp */}
      <Categorias />

      {/* SEÇÃO LOGÍSTICA: Imagem à esquerda no PC, empilhada no celular */}
      <section className="py-12 px-4 max-w-7xl mx-auto md:py-20 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* 1. Imagem Alinhada à Esquerda */}
          <div className="lg:col-span-5 w-full h-64 sm:h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-sm bg-slate-100">
            <img 
              src={imgLogistica} 
              alt="Logística de Entrega e Retirada R3" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* 2. Conteúdo de Texto e Cards à Direita */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Textos alinhados de forma elegante */}
            <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              <h2 className="text-2xl font-extrabold text-azul-marca md:text-3xl">
                Compre e Retire com Agilidade
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Aqui você não perde tempo esperando entregas demoradas.
              </p>
            </div>
            
            {/* Grid dos Cards internos (1 coluna no mobile, 2 colunas a partir de telas pequenas) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
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

          </div>

        </div>
      </section>


      {/* SEÇÃO MARKETPLACES */}
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
            <a href="https://www.instagram.com/r3.construcoess/" target="_blank" rel="noopener noreferrer" className="inline-block bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold px-4 py-2 rounded-xl text-xs shadow-sm transition-all">
              Acessar Perfil
            </a>
          </div>
          
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