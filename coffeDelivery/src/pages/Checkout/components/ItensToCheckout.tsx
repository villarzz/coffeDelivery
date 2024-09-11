import { Minus, Plus, Trash } from "lucide-react";
import img from "../../../assets/coffes/coffe1.png";

export function ItensToCheckout() {
  return (
    <div className="flex flex-col mr-[340px] mt-[78px]">
      <h2 className="text-2xl font-semibold">Cafés selecionados</h2>
      <div className="bg-coffe-800 p-9 w-[448px] rounded-tr-[32px] rounded-bl-[32px]">
        <div className="flex items-start">
          <img src={img} className="w-16 h-16" />
          <div className="flex flex-col">
            <div className="flex">
              <p className="ml-5 text-lg mb-2">Expresso Tradicional</p>
              <p className="text-xl ml-10 text-coffe-700 font-semibold">
                R$ 9,90
              </p>
            </div>
            <div className="flex">
              <div className="bg-coffe-901 p-3 h-[38px] flex justify-center items-center gap-1 rounded-md ml-5">
                <button className="text-coffe-300 text-3xl font-bold">
                  <Minus className="size-5" />
                </button>
                1
                <button className="text-coffe-300 text-3xl font-bold">
                  <Plus className="size-5" />
                </button>
              </div>
              <div className="bg-coffe-901 h-[38px] p-3 flex justify-center items-center gap-1 rounded-md ml-3">
                <Trash className="size-5 text-coffe-300 text-3xl font-bold" />
                REMOVER
              </div>
            </div>
          </div>
        </div>
        <div className="bg-coffe-901 h-px my-12 w-full"></div>
        <div className="flex items-start">
          <img src={img} className="w-16 h-16s" />
          <div className="flex flex-col">
            <div className="flex">
              <p className="ml-5 text-lg mb-2">Expresso Tradicional</p>
              <p className="text-xl ml-10 text-coffe-700 font-semibold">
                R$ 9,90
              </p>
            </div>
            <div className="flex">
              <div className="bg-coffe-901 p-3 h-[38px] flex justify-center items-center gap-1 rounded-md ml-5">
                <button className="text-coffe-300 text-3xl font-bold">
                  <Minus className="size-5" />
                </button>
                1
                <button className="text-coffe-300 text-3xl font-bold">
                  <Plus className="size-5" />
                </button>
              </div>
              <div className="bg-coffe-901 h-[38px] p-3 flex justify-center items-center gap-1 rounded-md ml-3">
                <Trash className="size-5 text-coffe-300 text-3xl font-bold" />
                REMOVER
              </div>
            </div>
          </div>
        </div>
        <div className="bg-coffe-901 h-px my-12 w-full"></div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <p className="text-coffe-902">Total de itens</p>
            <p className="text-coffe-902">R$ 29,70</p>
          </div>
          <div className="flex justify-between">
            <p className="text-coffe-902">Entrega</p>
            <p className="text-coffe-902">R$ 3,50</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-2xl text-coffe-902">Total</p>
            <p className="font-bold text-2xl text-coffe-902">R$ 33,20</p>
          </div>
        </div>
        <button className="bg-coffe-600 text-white w-full h-14 rounded-md mt-6">
          FINALIZAR COMPRA
        </button>
      </div>
    </div>
  );
}
