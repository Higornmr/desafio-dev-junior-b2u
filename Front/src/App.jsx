import React, { useState } from "react";
import {Button} from '../Components/Button' 
import { CardItem } from "../Components/Card";
import { Header } from "../Components/Header";

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
    <Header>
      <Button onClick={addSalesCard}>Adicionar Card</Button> 
      <Button onClick={() => listCards()}>List</Button>
      </Header>
   
      {salesCards.map((card) => (
        <CardItem key={card.id} style={{ display: 'inline-block' }}>
          <img src={card.image} alt="Product" width="300" height="400" />
          
        <div>
          <Button onClick={() => editCard(card.id)}>Editar</Button>
          <Button onClick={() => deleteCard(card.id)}>Deleter</Button>
          </div>
        </CardItem> 
      ))}
   
    </>
  );
}

export default App;
