import { Intro } from "./components/intro";
import { Header } from "./components/Header";
import { CoffeList } from "./components/CoffeList";

export function Home() {
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
