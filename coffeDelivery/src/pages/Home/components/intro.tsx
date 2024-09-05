import img from "../../../assets/coffeYellow.png";
import { Coffee, Package, ShoppingCart, Timer } from "lucide-react";

export function Intro() {
  return (
    <div className="py-[100px] bg-[url(assets/background.png)] bg-cover">
      <div className="mx-[160px] flex justify-evenly">
        <div className="w-[588px]">
          <h1 className="font-black text-5xl leading-tight">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <div className="text-xl mt-4">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </div>
          <div className="mt-16 flex gap-7">
            <div className="flex flex-col gap-5">
              <div className="flex items-center">
                <div className="m-2 w-9 h-9 bg-coffe-500 flex justify-center items-center rounded-3xl">
                  <ShoppingCart className="size-5s fill-coffe-100 text-coffe-100" />
                </div>
                Compra simples e segura
              </div>
              <div className="flex items-center">
                <div className="m-2 w-9 h-9 bg-coffe-600 flex justify-center items-center rounded-3xl">
                  <Timer className="size-5s  text-coffe-100" />
                </div>
                Entrega rápida e rastreada
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center">
                <div className="m-2 w-9 h-9 bg-coffe-700 flex justify-center items-center rounded-3xl">
                  <Package className="size-5s text-coffe-100" />
                </div>
                Embalagem mantém o café intacto
              </div>
              <div className="flex items-center">
                <div className="m-2 w-9 h-9 bg-coffe-300 flex justify-center items-center rounded-3xl">
                  <Coffee className="size-5s  text-coffe-100" />
                </div>
                O café chega fresquinho até você
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={img} />
        </div>
      </div>
    </div>
  );
}
