import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Coluna 1: Sobre a Empresa */}
        <div className="space-y-4">
          <span className="text-2xl font-black tracking-tight text-white">
            CONSTRU<span className="text-amber-500">FORT</span>
          </span>
          <p className="text-sm text-slate-400">
            Tudo para a sua obra, do alicerce ao acabamento. Rapidez na retirada e o melhor atendimento da região.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors text-xl" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Coluna 2: Links de Navegação */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4 border-l-4 border-amber-500 pl-2">Navegação</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
            <li><Link to="/categorias" className="hover:text-white transition-colors">Categorias de Materiais</Link></li>
            <li><Link to="/como-retirar" className="hover:text-white transition-colors">Como Retirar</Link></li>
            <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Regras de Retirada */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4 border-l-4 border-amber-500 pl-2">Retirada de Pedidos</h3>
          <p className="text-sm text-slate-400 mb-2">
            Feche seu orçamento pelo WhatsApp e retire direto no nosso balcão ou envie um <strong>Uber Flash / Moto</strong> para buscar.
          </p>
          <p className="text-xs text-amber-400 font-medium">
            * Não possuímos frota própria para entregas.
          </p>
        </div>

        {/* Coluna 4: Contato e Endereço */}
        <div className="space-y-3 text-sm">
          <h3 className="text-white font-semibold text-lg mb-4 border-l-4 border-amber-500 pl-2">Atendimento</h3>
          <div className="flex items-start space-x-2">
            <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
            <span>Av. Principal, 1234 - Bairro, Fortaleza - CE</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-amber-500 flex-shrink-0" />
            <span>(85) 99999-9999</span>
          </div>
          <div className="flex items-start space-x-2">
            <FaClock className="text-amber-500 mt-1 flex-shrink-0" />
            <div>
              <p>Seg a Sex: 07:30 às 17:30</p>
              <p>Sábado: 08:00 às 12:00</p>
            </div>
          </div>
        </div>

      </div>

      {/* Direitos Autorais */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>&copy; {anoAtual} ConstruFort. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}