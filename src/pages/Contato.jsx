import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope, FaDirections } from 'react-icons/fa';

export default function Contato() {
  const enderecoCompleto = "Av. Principal, 1234 - Bairro, Fortaleza - CE";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoCompleto)}`;

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-black text-slate-800">Fale Conosco</h1>
          <p className="text-slate-600 mt-2">Venha nos fazer uma visita ou tire suas dúvidas rapidamente.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Cartões de Informação Técnica */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-start space-x-4">
              <div className="bg-amber-100 text-amber-600 p-3 rounded-xl mt-1"><FaMapMarkerAlt size={20} /></div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800">Endereço</h3>
                <p className="text-slate-600 text-sm">{enderecoCompleto}</p>
                <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-xs text-amber-600 font-semibold pt-1 hover:underline">
                  <FaDirections /> <span>Abrir no GPS / Rota</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-start space-x-4">
              <div className="bg-green-100 text-green-600 p-3 rounded-xl mt-1"><FaPhoneAlt size={20} /></div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800">WhatsApp / Vendas</h3>
                <p className="text-slate-600 text-sm">(85) 99999-9999</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-xl mt-1"><FaClock size={20} /></div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800">Horário Comercial</h3>
                <p className="text-slate-600 text-sm">Segunda a Sexta: 07:30 às 17:30</p>
                <p className="text-slate-600 text-sm">Sábado: 08:00 às 12:00</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-start space-x-4">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-xl mt-1"><FaEnvelope size={20} /></div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800">E-mail</h3>
                <p className="text-slate-600 text-sm">contato@construfort.com</p>
              </div>
            </div>
          </div>

          {/* Mapa do Google Maps Embutido (Iframe Responsivo) */}
          <div className="lg:col-span-2 h-full min-h-[400px] bg-white p-4 rounded-2xl shadow-md border border-slate-100">
            {/* Lembre-se de substituir o src do iframe pela chave/link gerado real do Maps da sua loja no futuro */}
            <iframe
              title="Mapa de localização da loja física"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3503254331464!2d-38.5266!3d-3.7319!2m3!1f0!2f0!3f0!3m2!1i1242!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDMnNTQuOCJTIDM4wrAzMSczNS44Ilc!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
              className="w-full h-full min-h-[380px] rounded-xl border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
}