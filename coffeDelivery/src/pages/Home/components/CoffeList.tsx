import axios from 'axios';
import React, { useEffect, useState } from 'react';
import img from "../../../assets/coffes/coffe1.png";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Coffe } from '../../../interfaces/coffe';

export function CoffeList() {
  const [coffes, setCoffes] = useState<Coffe[]>([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/coffes')
      .then(response => {
        setCoffes(response.data);
      })
  },[])

  return (
    <div className="mx-[340px] flex flex-col justify-start mb-10">
      <h1 className="text-3xl font-bold my-[54px]">Nossos Cafés</h1>
      <div className="grid grid-cols-4 gap-10">
        {coffes.map((coffe) =>(
          <h1 key={coffe.id}>{coffe.name}</h1>
        ))}
        {Array.from({ length: 14 }).map((_, index) => (
          <div key={index} className="bg-coffe-800 w-[256px] h-[310px] flex flex-col items-center rounded-tr-3xl rounded-bl-3xl p-3">
            <img src={img} width="120px" height="120px" className="mt-[-30px]"/>
            <p className="bg-coffe-400 px-2 py-1 rounded-3xl text-xs font-bold text-coffe-600 mt-3 mb-2">
              TRADICIONAL
            </p>
            <h1 className="text-xl font-bold my-2">Expresso Tradicional</h1>
            <p className="text-sm text-center text-coffe-900">
              O tradicional café feito com água quente e grãos moídos
            </p>
            <div className="flex mt-8">
              <div className="text-coffe-700 flex items-center gap-1 mr-2">
                R$
                <h6 className="font-bold text-2xl">9,90</h6>
              </div>
              <div className="bg-coffe-901 w-[72px] h-[38px] flex justify-center items-center gap-1 rounded-md ml-5">
                <button className="text-coffe-300 text-3xl font-bold">
                  <Minus className="size-5" />
                </button>
                1
                <button className="text-coffe-300 text-3xl font-bold">
                  <Plus className="size-5" />
                </button>
              </div>
              <button className="bg-coffe-300 h-[38px] w-[38px] flex justify-center items-center text-coffe-100 rounded-lg ml-2">
                <ShoppingCart className="size-6 fill-coffe-300" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
