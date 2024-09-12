import { Minus, Plus, Trash } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../../contexts/ShoppingCartContext";
import { Coffe } from "../../../interfaces/coffe";

export function ItensToCheckout() {
  const [deliveryPrice] = useState<number>(5);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { coffes, setCoffes } = useContext(ShoppingCartContext);
  const [totalItensPrice, setTotalItensPrice] = useState<number>(0);

  useEffect(() => {
    const updatedTotalPrice = coffes.reduce(
      (acc, coffe) => acc + coffe.price * coffe.quantity,
      0
    );
    setTotalItensPrice(updatedTotalPrice);
  }, [coffes]);

  useEffect(() => {
    setTotalPrice(totalItensPrice + (coffes.length > 0 ? deliveryPrice : 0));
  }, [totalItensPrice, deliveryPrice, coffes]);

  function increaseQuantity(id: number) {
    setCoffes((prevCoffes: Coffe[]) =>
      prevCoffes.map(coffe =>
        coffe.id === id ? { ...coffe, quantity: coffe.quantity + 1 } : coffe
      )
    );
  }

  function decreaseQuantity(id: number) {
    setCoffes((prevCoffes: Coffe[]) =>
      prevCoffes.map(coffe =>
        coffe.id === id && coffe.quantity > 1
          ? { ...coffe, quantity: coffe.quantity - 1 }
          : coffe
      )
    );
  }

  function removeCoffe(id: number) {
    setCoffes((prevCoffes: Coffe[]) =>
      prevCoffes.filter(coffe => coffe.id !== id)
    );
  }

  return (
    <div className="flex flex-col mr-[340px] mt-[78px]">
      <h2 className="text-2xl font-semibold">Cafés selecionados</h2>
      <div className="bg-coffe-800 p-9 w-[448px] rounded-tr-[32px] rounded-bl-[32px]">
        <div>
          {coffes.map(coffe => {
            return (
              <>
                <div className="flex items-start" key={coffe.id}>
                  <img src={coffe.img} className="w-16 h-16" />
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between w-full">
                      <p className="ml-5 text-lg mb-2">{coffe.name}</p>
                      <p className="text-xl text-coffe-700 font-semibold">
                        R$ {coffe.price * coffe.quantity}
                      </p>
                    </div>
                    <div className="flex">
                      <div className="bg-coffe-901 p-3 h-[38px] flex justify-center items-center gap-1 rounded-md ml-5">
                        <button
                          className="text-coffe-300 text-3xl font-bold"
                          onClick={() => decreaseQuantity(coffe.id)}>
                          <Minus className="size-5" />
                        </button>
                        {coffe.quantity}
                        <button
                          className="text-coffe-300 text-3xl font-bold"
                          onClick={() => increaseQuantity(coffe.id)}>
                          <Plus className="size-5" />
                        </button>
                      </div>
                      <button
                        className="bg-coffe-901 h-[38px] p-3 flex justify-center items-center gap-1 rounded-md ml-3"
                        onClick={() => removeCoffe(coffe.id)}>
                        <Trash className="size-5 text-coffe-300 text-3xl font-bold" />
                        REMOVER
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-coffe-901 h-px my-12 w-full"></div>
              </>
            );
          })}
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <p className="text-coffe-902">Total de itens</p>
            <p className="text-coffe-902">R$ {totalItensPrice},00</p>
          </div>
          {coffes.length > 0 && (
            <div className="flex justify-between">
              <p className="text-coffe-902">Entrega</p>
              <p className="text-coffe-902">R$ {deliveryPrice},00</p>
            </div>
          )}
          <div className="flex justify-between">
            <p className="font-bold text-2xl text-coffe-902">Total</p>
            <p className="font-bold text-2xl text-coffe-902">R$ {totalPrice}</p>
          </div>
        </div>
        <button className="bg-coffe-600 text-white w-full h-14 rounded-md mt-6">
          FINALIZAR COMPRA
        </button>
      </div>
    </div>
  );
}
