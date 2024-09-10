import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ShoppingCartProvider } from "./contexts/shoppingCartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <ShoppingCartProvider>
          <Router />
        </ShoppingCartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
