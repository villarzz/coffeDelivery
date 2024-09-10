import { ReactNode, createContext, useState } from "react";

interface ShoppingCartContextData {
  shoppingCartCounter: number;
  setShoppingCartCounter: (value: any) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextData);

export function ShoppingCartProvider({ children }: { children: ReactNode }) {
  const [shoppingCartCounter, setShoppingCartCounter] = useState<number>(0);

  return (
    <ShoppingCartContext.Provider value={{ shoppingCartCounter, setShoppingCartCounter }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
