import img from "../../assets/Illustration.png";
import { Header } from "../../components/Header";
import { useContext, useEffect, useState } from "react";
import { Clock, DollarSign, MapPin } from "lucide-react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

export function DeliveryInfo() {
  const [endereco, setEndereco] = useState<string>("");
  const [paymentMethod, setpaymentMethod] = useState<string>("");
  const { setShoppingCartCounter,setCoffes } = useContext(ShoppingCartContext);

  useEffect(() => {
    const rua = localStorage.getItem("rua") || "";
    const numero = localStorage.getItem("numero") || "";
    const uf = localStorage.getItem("uf") || "";

    const enderecoCompleto = `${rua}, ${numero}, ${uf}`;

    setEndereco(enderecoCompleto);
    setpaymentMethod(localStorage.getItem("payment") || "");
  }, []);

  useEffect(()=>{
    setShoppingCartCounter(0);
    setCoffes([]);
  },[])

  return (
    <div>
      <Header />
      <div className="flex">
        <div className="mx-[320px] mt-[80px]">
          <h1 className="text-3xl text-coffe-500 font-bold">
            Uhu! Pedido confirmado
          </h1>
          <p className="mt-1">
            Agora é só aguardar que logo o café chegará até você
          </p>
          <div className="flex gap-20">
            <div className="w-[630px] relative bg-gradient-to-r p-[1px] from-coffe-600 to-coffe-300 rounded-tr-[36px] rounded-tl-md rounded-bl-[36px] rounded-br-md mt-10">
              <div className="flex items-center gap-3 bg-white p-4 rounded-tr-[36px] rounded-tl-md pt-10 px-10">
                <MapPin className="p-2 size-8 text-coffe-100 bg-coffe-300 rounded-full" />
                <p>Entrega em {endereco}</p>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 px-10">
                <Clock className="p-2 size-8 text-coffe-100 bg-coffe-600 rounded-full" />
                <p>
                  Previsao de entrega: <strong>30 minutos</strong>
                </p>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-bl-[36px] rounded-br-md pb-10 px-10">
                <DollarSign className="p-2 size-8 text-coffe-100 bg-coffe-500 rounded-full" />
                <p>
                  Pagamento na entrega: <strong>{paymentMethod}</strong>
                </p>
              </div>
            </div>
            <div>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
