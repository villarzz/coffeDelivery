import img from "../../../assets/coffe1.png";

export function CoffeList() {
  return (
    <div className="ml-[340px] flex flex-col justify-start mb-10">
      <h1 className="text-3xl font-bold my-[54px]">Nossos Cafés</h1>
      <div className="bg-coffe-800 w-[256px] h-[310px] flex flex-col items-center">
        <img src={img} width="120px" height="120px" className="mt-[-30px]" />
        <h1 className="text-xl font-bold">Expresso Tradicional</h1>
      </div>
    </div>
  );
}
