import { ReactNode, createContext, useState } from "react";
import { Coffe } from "../interfaces/coffe";

interface ShoppingCartContextData {
  shoppingCartCounter: number;
  setShoppingCartCounter: (value: any) => void;
  coffes: Coffe[];
  setCoffes: (value: any) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextData);

export function ShoppingCartProvider({ children }: { children: ReactNode }) {
  const [shoppingCartCounter, setShoppingCartCounter] = useState<number>(0);
  const [coffes, setCoffes] = useState<Coffe[]>([]);

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCartCounter, setShoppingCartCounter, coffes,setCoffes }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
