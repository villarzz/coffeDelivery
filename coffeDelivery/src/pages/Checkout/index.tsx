import { Header } from "../../components/Header";
import { DeliveryInfos } from "./components/DeliveryInfos";
import { ItensToCheckout } from "./components/ItensToCheckout";
import { Payment } from "./components/Payment";

export function Checkout() {
  return (
    <div className="antialiased">
      <div>
        <Header />
        <div className="flex gap-8">
          <div className="flex flex-col gap-5">
            <DeliveryInfos></DeliveryInfos>
            <Payment></Payment>
          </div>
          <ItensToCheckout></ItensToCheckout>
        </div>
      </div>
    </div>
  );
}
