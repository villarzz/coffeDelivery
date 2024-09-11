import { Header } from "../../components/Header";
import { ItensToCheckout } from "./components/ItensToCheckout";
import { DeliveryInfos } from "./components/deliveryInfos";

export function Checkout() {
  return (
    <div className="antialiased">
      <div>
        <Header />
        <div className="flex gap-8">
          <DeliveryInfos></DeliveryInfos>
          <ItensToCheckout></ItensToCheckout>
        </div>
      </div>
    </div>
  );
}
