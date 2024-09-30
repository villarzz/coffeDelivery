import { useContext, useEffect } from "react";
import { Intro } from "./components/intro";
import { Header } from "../../components/Header";
import { CoffeList } from "./components/CoffeList";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

export function Home() {
  const { setShoppingCartCounter,setCoffes } = useContext(ShoppingCartContext);

  useEffect(()=>{
    localStorage.clear();
    setShoppingCartCounter(0);
    setCoffes([]);
  },[])

  return (
    <div className="antialiased">
      <div>
        <Header />
        <Intro />
        <CoffeList />
      </div>
    </div>
  );
}
