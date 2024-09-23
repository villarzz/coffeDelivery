import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Route, Routes } from "react-router-dom";
import { DeliveryInfo } from "./pages/DeliveryInfo";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/delivery" element={<DeliveryInfo />} />
    </Routes>
  );
}
