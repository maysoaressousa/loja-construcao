import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton'; // Importando o botão flutuante

import Home from './pages/Home';
import Categorias from './pages/Categorias';
import Retirada from './pages/Retirada';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/como-retirar" element={<Retirada />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      {/* O botão fica aqui, fixo na tela independente da página ativa */}
      <WhatsappButton /> 

      <Footer />
    </Router>
  );
}

export default App;