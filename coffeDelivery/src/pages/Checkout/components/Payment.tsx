import { CircleDollarSign, CreditCard, DollarSign } from "lucide-react";

export function Payment() {
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
        <button className="bg-coffe-901 p-7 h-[38px] flex justify-start items-center gap-1 rounded-md ml-5">
          <CreditCard className="text-coffe-300 size-5" />
          <p className="whitespace-nowrap text-sm">CARTÃO DE CRÉDITO</p>
        </button>
        <button className="bg-coffe-901 p-7 h-[38px] flex justify-center items-center gap-1 rounded-md ml-5">
          <CreditCard className="text-coffe-300 size-5" />
          <p className="whitespace-nowrap text-sm">CARTÃO DE DÉBITO</p>
        </button>
        <button className="bg-coffe-901 p-7 h-[38px] flex justify-center items-center gap-1 rounded-md ml-5">
          <CircleDollarSign className="text-coffe-300 size-5" />
          <p className="text-sm">DINHEIRO</p>
        </button>
      </div>
    </div>
  );
}

