import { useState } from "react";
import { CircleDollarSign, CreditCard, DollarSign } from "lucide-react";

export function Payment() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button: any) => {
    setSelectedButton(button);
    localStorage.setItem("payment", button);
  };

  return (
    <div className="bg-coffe-800 p-4 ml-[340px]">
      <div className="flex">
        <DollarSign className="text-coffe-300" />
        <div className="ml-2">
          <p className="text-lg">Pagamento</p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <div className="flex items-start mt-6">
        <button
          onClick={() => handleButtonClick("Crédito")}
          className={`p-7 h-[38px] flex justify-start items-center gap-1 rounded-md ml-5 ${
            selectedButton === "Crédito"
              ? "bg-purple-100 border border-purple-600"
              : "bg-gray-200"
          }`}>
          <CreditCard
            className={`size-5 ${
              selectedButton === "Crédito" ? "text-purple-600" : "text-coffe-300"
            }`}
          />
          <p
            className={`whitespace-nowrap text-sm ${
              selectedButton === "Crédito" ? "text-purple-600" : "text-coffe-700"
            }`}>
            CARTÃO DE CRÉDITO
          </p>
        </button>

        <button
          onClick={() => handleButtonClick("Débito")}
          className={`p-7 h-[38px] flex justify-center items-center gap-1 rounded-md ml-5 ${
            selectedButton === "Débito"
              ? "bg-purple-100 border border-purple-600"
              : "bg-gray-200"
          }`}>
          <CreditCard
            className={`size-5 ${
              selectedButton === "Débito" ? "text-purple-600" : "text-coffe-300"
            }`}
          />
          <p
            className={`whitespace-nowrap text-sm ${
              selectedButton === "Débito" ? "text-purple-600" : "text-coffe-700"
            }`}>
            CARTÃO DE DÉBITO
          </p>
        </button>

        <button
          onClick={() => handleButtonClick("Dinheiro")}
          className={`p-7 h-[38px] flex justify-center items-center gap-1 rounded-md ml-5 ${
            selectedButton === "Dinheiro"
              ? "bg-purple-100 border border-purple-600"
              : "bg-gray-200"
          }`}>
          <CircleDollarSign
            className={`size-5 ${
              selectedButton === "Dinheiro" ? "text-purple-600" : "text-coffe-300"
            }`}
          />
          <p
            className={`whitespace-nowrap text-sm ${
              selectedButton === "Dinheiro" ? "text-purple-600" : "text-coffe-700"
            }`}>
            DINHEIRO
          </p>
        </button>
      </div>
    </div>
  );
}
