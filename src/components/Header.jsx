import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Link do WhatsApp com mensagem padrão para o cabeçalho
  const numeroTelefone = "5585987133705"; // 
  const mensagem = "Olá! Acessei o site da loja e gostaria de falar com um atendente.";
  const whatsappUrl = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;

  // Estilização dinâmica para o link da página ativa
  const linkStyle = ({ isActive }) => 
    `text-base font-medium transition-colors duration-200 block py-2 md:py-0 ${
      isActive ? 'text-laranja-principal font-semibold' : 'text-slate-700 hover:text-laranja-principal'
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-40 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo da Loja */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/r3-logo.svg"
              alt="R3 Construções"
              className="h-14 w-auto"
            />
            <span className="text-2xl font-black tracking-tight text-slate-800">
              <span className="text-laranja-principal">CONSTRUÇÕES</span>
            </span>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={linkStyle}>Início</NavLink>
            <NavLink to="/categorias" className={linkStyle}>Categorias</NavLink>
            <NavLink to="/como-retirar" className={linkStyle}>Como Retirar</NavLink>
            <NavLink to="/contato" className={linkStyle}>Contato</NavLink>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-all duration-200 hover:shadow-lg"
            >
              <FaWhatsapp className="text-xl" />
              <span>Falar com Vendedor</span>
            </a>
          </nav>

          {/* Menu Hambúrguer (Mobile) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-slate-700 hover:text-amber-600 focus:outline-none transition-colors"
              aria-label="Abrir Menu"
            >
              {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Dropdown Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-slate-50 border-t border-slate-100 px-4 pt-4 pb-6 space-y-4 shadow-inner">
          <nav className="flex flex-col space-y-2">
            <NavLink to="/" onClick={toggleMenu} className={linkStyle}>Início</NavLink>
            <NavLink to="/categorias" onClick={toggleMenu} className={linkStyle}>Categorias</NavLink>
            <NavLink to="/como-retirar" onClick={toggleMenu} className={linkStyle}>Como Retirar</NavLink>
            <NavLink to="/contato" onClick={toggleMenu} className={linkStyle}>Contato</NavLink>
          </nav>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-green-600 text-white w-full py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-all"
            onClick={toggleMenu}
          >
            <FaWhatsapp className="text-xl" />
            <span>Falar com Vendedor</span>
          </a>
        </div>
      )}
    </header>
  );
}