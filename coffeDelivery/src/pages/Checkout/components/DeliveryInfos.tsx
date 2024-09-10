import { MapPinned } from "lucide-react";

export function DeliveryInfos() {
  return (
    <div className="flex flex-col mx-[340px] mt-[78px]">
      <h2 className="text-2xl font-semibold">Complete seu pedido</h2>
      <div className="w-[640px] bg-coffe-800 p-9">
        <div className="flex items-center gap-2">
          <MapPinned className="text-coffe-500 mb-5" />
          <div>
            <p className="text-md font-semibold text-coffe-902">
              Endereço de entrega
            </p>
            <p className="text-sm text-coffe-700">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-x-3">
          <input type="text" placeholder="CEP" className="col-span-2 h-10 border bg-coffe-903 border-coffe-901 rounded-md p-3 mt-8"/>
          <input type="text" placeholder="Rua" className="col-span-6 h-10 border bg-coffe-903 border-coffe-901 rounded-md p-3 mt-8"/>
          <input type="text" placeholder="Número" className="col-span-2 h-10 border bg-coffe-903 border-coffe-901 rounded-md p-3 mt-8"/>
          <input type="text" placeholder="Complemento" className="col-span-4 h-10 border bg-coffe-903 border-coffe-901 rounded-md p-3 mt-8"/>
          <input type="text" placeholder="Bairro" className="col-span-2 h-10 border bg-coffe-903 border-coffe-901 rounded-md p-3 mt-8"/>
          <input type="text" placeholder="Cidade" className="col-span-3 h-10 border bg-coffe-903 border-coffe-901 rounded-md p-3 mt-8"/>
          <input type="text" placeholder="UF" className="col-span-1 h-10 border bg-coffe-903 border-coffe-901 rounded-md p-3 mt-8"/>
        </div>
      </div>
    </div>
  );
}
