import logo from "../../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <div className="mx-[160px] h-24 flex justify-between items-center">
      <div className="ml-40">
        <img src={logo} alt="" />
      </div>
      <div className="flex mr-40 gap-3 items-center ">
        <div className="flex items-center gap-1 p-2 bg-coffe-200 rounded-md text-coffe-300">
          <MapPin className="size-5" />
          Porto Alegre
        </div>
        <div className="flex items-center gap-1 p-2 rounded-md bg-coffe-400 text-coffe-500">
          <ShoppingCart className="size-6 fill-coffe-500" />
        </div>
      </div>
    </div>
  );
}
