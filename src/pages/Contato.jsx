import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope, FaDirections } from 'react-icons/fa';

export default function Contato() {
  const enderecoCompleto = "R. Padre Sá Leitão, 164 - Henrique Jorge, Fortaleza - CE, 60521-032";
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
              <div className="bg-laranja-principal/10 text-laranja-principal p-3 rounded-xl mt-1"><FaMapMarkerAlt size={20} /></div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800">Endereço</h3>
                <p className="text-slate-600 text-sm">{enderecoCompleto}</p>
                <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-xs text-laranja-principal font-semibold pt-1 hover:underline">
                  <FaDirections /> <span>Abrir no GPS / Rota</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-start space-x-4">
              <div className="bg-green-100 text-green-600 p-3 rounded-xl mt-1"><FaPhoneAlt size={20} /></div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800">WhatsApp / Vendas</h3>
                <p className="text-slate-600 text-sm">(85) 98713-3705</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-xl mt-1"><FaClock size={20} /></div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800">Horário Comercial</h3>
                <p className="text-slate-600 text-sm">Segunda a Sexta: 07:00 às 17:30</p>
                <p className="text-slate-600 text-sm">Sábado: 07:00 às 14:00</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-start space-x-4">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-xl mt-1"><FaEnvelope size={20} /></div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800">E-mail</h3>
                <p className="text-slate-600 text-sm">r3construecomm@gmail.com
</p>
              </div>
            </div>
          </div>

          {/* Mapa do Google Maps Embutido (Iframe Responsivo) */}
          <div className="lg:col-span-2 h-full min-h-[400px] bg-white p-4 rounded-2xl shadow-md border border-slate-100">
            {/* Lembre-se de substituir o src do iframe pela chave/link gerado real do Maps da sua loja no futuro */}
            <iframe
              title="Mapa de localização da loja física"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2411524407553!2d-38.57921209999999!3d-3.7576026999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74bdabea12883%3A0xc793794a8570f650!2zRGVww7NzaXRvIFIzIENvbnN0cnXDp8O1ZXM!5e0!3m2!1spt-BR!2sbr!4v1781020199579!5m2!1spt-BR!2sbr"
              className="w-full h-full min-h-[380px] rounded-xl border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
}