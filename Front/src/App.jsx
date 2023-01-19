import React, { useState } from "react";
import { Button } from "../Components/Button";
import { Card } from "../Components/Card";

function App() {
  const [salesCards, setSalesCards] = useState([]);

  const addSalesCard = () => {
    const newCard = {
      id: salesCards.length + 1,
      image: "https://via.placeholder.com/150",
    };
    setSalesCards([...salesCards, newCard]);
  };

  const listCards = () => {
    console.log(salesCards);
  };

  const editCard = (id) => {
    console.log(`Editing card with id: ${id}`);
  };

  const deleteCard = (id) => {
    setSalesCards(salesCards.filter((card) => card.id !== id));
  };

  return (
    <>    
      <button onClick={addSalesCard}>Adicionar Card</button> 
      <button onClick={() => listCards()}>List</button>
      {salesCards.map((card) => (
        <div key={card.id} style={{ display: "inline-block" }}>
          <Card src={card.image} alt="Product" width="150" height="150" />
          <br />
          <button onClick={() => editCard(card.id)}>Editar</button>
          
          <button onClick={() => deleteCard(card.id)}>Deletar</button>
         
        </div>
      ))}
    </>
  );
}

export default App;
