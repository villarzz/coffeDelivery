import { Clock, DollarSign, MapPin } from "lucide-react";
import { Header } from "../../components/Header";

export function DeliveryInfo() {
  return (
    <div>
      <Header />
      <div className="mx-[320px] mt-[80px]">
        <h1 className="text-3xl text-coffe-500 font-bold">
          Uhu! Pedido confirmado
        </h1>
        <p className="mt-1">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <div className="w-[630px] relative bg-gradient-to-r p-[1px] from-coffe-600 to-coffe-300 rounded-tr-[36px] rounded-tl-md rounded-bl-[36px] rounded-br-md">
          <div className="flex items-center gap-3 bg-white p-4 rounded-tr-[36px] rounded-tl-md">
            <MapPin className="p-2 size-8 text-coffe-100 bg-coffe-300 rounded-full" />
            <p>
              Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
              Alegre, RS
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 ">
            <Clock className="p-2 size-8 text-coffe-100 bg-coffe-600 rounded-full" />
            <p>
              Previsao de entrega: <strong>30 minutos</strong>
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-bl-[36px] rounded-br-md">
            <DollarSign className="p-2 size-8 text-coffe-100 bg-coffe-500 rounded-full" />
            <p>
              Pagamento na entrega: <strong>Cartão de Crédito</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
