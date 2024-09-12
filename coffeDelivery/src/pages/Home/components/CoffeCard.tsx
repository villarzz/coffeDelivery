import { useContext, useState } from "react";
import { Coffe } from "../../../interfaces/coffe";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { ShoppingCartContext } from "../../../contexts/ShoppingCartContext";

export function CoffeCard({ name, description, price, img, type }: Coffe) {
  const [counter, setCounter] = useState<number>(1);
  const { setShoppingCartCounter,setCoffes } = useContext(ShoppingCartContext);

  const increaseCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const decreaseCounter = () => {
    setCounter(prevCounter => (prevCounter > 1 ? prevCounter - 1 : 1));
  };

  const addCoffeToCart = () => {
    const coffe = {
      name,
      description,
      price,
      img,
      type,
      quantity: counter,
    };
    setCoffes((prevCoffes:Coffe[]) => [...prevCoffes, coffe]);
  }

  const addToCart = () => {
    setShoppingCartCounter((prevCounter: number) => prevCounter + counter);
    addCoffeToCart();
  };

  return (
    <div className="bg-coffe-800 w-[256px] h-[310px] flex flex-col items-center rounded-tr-3xl rounded-bl-3xl p-3">
      <img
        src={img}
        width="120px"
        height="120px"
        className="mt-[-30px]"
        alt={name}
      />
      <div className="flex items-center gap-2">
        {type.map(type => (
          <p key={type} className="bg-coffe-400 px-2 py-1 rounded-3xl text-xs font-bold text-coffe-600 mt-3 mb-2">
            {type}
          </p>
        ))}
      </div>
      <h1 className="text-xl font-bold my-2">{name}</h1>
      <p className="text-sm text-center text-coffe-900">{description}</p>
      <div className="flex mt-8">
        <div className="text-coffe-700 flex items-center gap-1 mr-2">
          R$
          <h6 className="font-bold text-2xl">{price}</h6>
        </div>
        <div className="bg-coffe-901 w-[72px] h-[38px] flex justify-center items-center gap-1 rounded-md ml-5">
          <button
            onClick={decreaseCounter}
            className="text-coffe-300 text-3xl font-bold">
            <Minus className="size-5" />
          </button>
          {counter}
          <button
            onClick={increaseCounter}
            className="text-coffe-300 text-3xl font-bold">
            <Plus className="size-5" />
          </button>
        </div>
        <button
          className="bg-coffe-300 h-[38px] w-[38px] flex justify-center items-center text-coffe-100 rounded-lg ml-2"
          onClick={addToCart}>
          <ShoppingCart className="size-6 fill-coffe-300" />
        </button>
      </div>
    </div>
  );
}
