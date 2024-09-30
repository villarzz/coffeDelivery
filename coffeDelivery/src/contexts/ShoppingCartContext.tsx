import { ReactNode, createContext, useState } from "react";
import { Coffe } from "../interfaces/coffe";

interface ShoppingCartContextData {
  shoppingCartCounter: number;
  setShoppingCartCounter: (value: any) => void;
  coffes: Coffe[];
  setCoffes: (value: any) => void;
  address:string,
  setAddress:(value:any) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextData);

export function ShoppingCartProvider({ children }: { children: ReactNode }) {
  const [coffes, setCoffes] = useState<Coffe[]>([]);
  const [address, setAddress] = useState<string>("");
  const [shoppingCartCounter, setShoppingCartCounter] = useState<number>(0);

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartCounter,
        setShoppingCartCounter,
        coffes,
        setCoffes,
        address,
        setAddress
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
