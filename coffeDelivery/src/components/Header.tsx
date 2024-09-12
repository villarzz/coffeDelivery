import { useContext } from "react";
import logo from "../assets/Logo.svg";
import { MapPin, ShoppingCart } from "lucide-react";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import { NavLink } from "react-router-dom";

export function Header() {
  const { shoppingCartCounter } = useContext(ShoppingCartContext);

  return (
    <div className="mx-[160px] h-24 flex justify-between items-center">
      <div className="ml-40">
        <NavLink to="/" title="Home">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className="flex mr-40 gap-3 items-center ">
        <div className="flex items-center gap-1 p-2 bg-coffe-200 rounded-md text-coffe-300">
          <MapPin className="size-5" />
          Brasília
        </div>
        <div className="relative">
          <button className="flex items-center gap-1 p-2 rounded-md bg-coffe-400 text-coffe-500 relative">
            <NavLink to="/checkout" title="Check Out">
              <ShoppingCart className="size-6 fill-coffe-500" />
            </NavLink>
          </button>
          {shoppingCartCounter > 0 && (
            <span className="absolute top-[-10px] right-[-10px] bg-coffe-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {shoppingCartCounter}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
