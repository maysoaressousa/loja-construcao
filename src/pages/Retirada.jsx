import { FaCheckCircle, FaStore, FaMotorcycle, FaExclamationTriangle } from 'react-icons/fa';

export default function Retirada() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-slate-800">Retirada & Logística</h1>
          <p className="text-slate-600 mt-2 text-lg">Veja como funciona o nosso fluxo rápido de separação e entrega de mercadorias.</p>
        </div>

        {/* Linha do tempo do processo */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-slate-100 space-y-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-4">Passo a Passo para Comprar</h2>
          
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-green-600 text-white rounded-full p-1.5 z-10"><FaCheckCircle size={20} /></div>
              <div className="w-0.5 bg-slate-200 flex-grow h-full my-1"></div>
            </div>
            <div className="pb-4">
              <h3 className="font-bold text-slate-800 text-lg">1. Cotação e Fechamento</h3>
              <p className="text-slate-600 text-sm">Você nos envia os itens necessários no WhatsApp. Nosso vendedor confirma o estoque, aplica descontos e fecha o pedido.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-green-600 text-white rounded-full p-1.5 z-10"><FaCheckCircle size={20} /></div>
              <div className="w-0.5 bg-slate-200 flex-grow h-full my-1"></div>
            </div>
            <div className="pb-4">
              <h3 className="font-bold text-slate-800 text-lg">2. Pagamento Prático</h3>
              <p className="text-slate-600 text-sm">Para agilizar seu atendimento no balcão, realize o pagamento via Pix ou link de cartão antes de enviar a retirada.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-green-600 text-white rounded-full p-1.5 z-10"><FaCheckCircle size={20} /></div>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">3. Liberação e Separação</h3>
              <p className="text-slate-600 text-sm">Com o pagamento confirmado, nossa equipe separa os materiais em minutos e os deixa prontos na área de carga.</p>
            </div>
          </div>
        </div>

        {/* Formas de Retirada */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 space-y-3">
            <div className="flex items-center space-x-3 text-amber-600">
              <FaStore size={24} />
              <h3 className="font-bold text-lg text-slate-800">Você vem buscar?</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Estacione em nossa área de carga. Apresente o nome do pedido no balcão e nossa equipe fará o carregamento direto no seu carro ou caminhote.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 space-y-3">
            <div className="flex items-center space-x-3 text-green-600">
              <FaMotorcycle size={24} />
              <h3 className="font-bold text-lg text-slate-800">Vai mandar Uber?</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Solicite a modalidade <strong>Uber Flash ou Uber Moto</strong> no seu aplicativo, configure o endereço da loja e envie o nome do motorista/placa para nós via chat.
            </p>
          </div>
        </div>

        {/* Quadro de Termos Importantes */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl shadow-sm space-y-2">
          <div className="flex items-center space-x-2 text-amber-700 font-bold">
            <FaExclamationTriangle />
            <span>Aviso Importante sobre Conferência</span>
          </div>
          <p className="text-sm text-amber-900 leading-relaxed">
            Como não operamos com frota de entrega própria, toda e qualquer conferência de materiais (como quebras de pisos, conferência de quantidade de conexões ou sacos) **deve ser realizada no ato da retirada por você ou pelo transportador terceirizado**. Não nos responsabilizamos por danos ocorridos durante o trajeto via aplicativos.
          </p>
        </div>

      </div>
    </div>
  );
}