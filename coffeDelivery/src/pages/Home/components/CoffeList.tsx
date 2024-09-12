import axios from 'axios';
import { CoffeCard } from './CoffeCard';
import { useEffect, useState } from 'react';
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
          <CoffeCard
            key={coffe.id}
            id={coffe.id}
            name={coffe.name}
            description={coffe.description}
            price={coffe.price}
            img={coffe.img}
            type={coffe.type}
            quantity={coffe.quantity}
          ></CoffeCard>
        ))}
      </div>
    </div>
  );
}
