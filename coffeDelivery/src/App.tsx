import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";

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
