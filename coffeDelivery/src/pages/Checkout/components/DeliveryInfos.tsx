import { useState } from "react";
import { MapPinned } from "lucide-react";

export function DeliveryInfos() {
  const [formData, setFormData] = useState({
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    localStorage.setItem(name, value);
  };

  return (
    <div className="flex flex-col ml-[340px] mt-[78px]">
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
          <input
            type="text"
            placeholder="CEP"
            className="col-span-2 h-10 border bg-coffe-903 border-coffe-901 rounded-md p-3 mt-8"
          />
          <input
            type="text"
            placeholder="Rua"
            name="rua"
            className="col-span-6 h-10 border bg-coffe-903 border-coffe-901 rounded-md p-3 mt-8"
            onBlur={handleChange}
          />
          <input
            type="text"
            placeholder="Número"
            name="numero"
            className="col-span-2 h-10 border bg-coffe-903 border-coffe-901 rounded-md p-3 mt-8"
            onBlur={handleChange}
          />
          <input
            type="text"
            placeholder="Complemento"
            className="col-span-4 h-10 border bg-coffe-903 border-coffe-901 rounded-md p-3 mt-8"
          />
          <input
            type="text"
            placeholder="Bairro"
            name="bairro"
            className="col-span-2 h-10 border bg-coffe-903 border-coffe-901 rounded-md p-3 mt-8"
            onBlur={handleChange}
          />
          <input
            type="text"
            placeholder="Cidade"
            name="cidade"
            className="col-span-3 h-10 border bg-coffe-903 border-coffe-901 rounded-md p-3 mt-8"
            onBlur={handleChange}
          />
          <input
            type="text"
            placeholder="UF"
            name="uf"
            className="col-span-1 h-10 border bg-coffe-903 border-coffe-901 rounded-md p-3 mt-8"
            onBlur={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
