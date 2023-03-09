import React, { useEffect, useState, FC } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface IPizza {
  imageUrl: string;
  title: string;
  price: number;
}

const pizzaObj: IPizza = {
  imageUrl: "",
  title: "",
  price: 0,
};

const FullPizza: FC = () => {
  const [pizza, setPizza] = useState<IPizza>(pizzaObj);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const url = `/api/pizza/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        alert("Error fetching pizza " + error);
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>"Loading..."</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza img" />
      <h3>{pizza.title}</h3>
      <p>Lorem ipsum dolor sit amet.</p>
      <h4>{pizza.price || 0} ₽</h4>
    </div>
  );
};

export default FullPizza;
