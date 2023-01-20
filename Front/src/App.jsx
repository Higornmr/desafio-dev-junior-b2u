import React, { useState } from "react";
import {Button} from '../Components/Button' 
import { CardItem } from "../Components/Card";
import { Header } from "../Components/Header";
import { Input } from "../Components/Inputs";
import ImageUploader from "./Image";

import { Boddy } from "../Containers/Home";

function App() {
  const [salesCards, setSalesCards] = useState([]);

  const addSalesCard = () => {
    const newCard = {
      id: salesCards.length + 1,
      image: "https://via.placeholder.com/150",
      name: "Nome do carro",
      marca: "Marca do carro",
      fabricante: "Fabricante",
      ano: "ano do carro",
    };
    setSalesCards([...salesCards, newCard]);
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
      <Input type="text" placeholder="abacate" />
      <Input type="text" placeholder="abacate"  />
      <Input type="text" placeholder="abacate"  />
      <Input type="text" placeholder="abacate"  />
      <ImageUploader />
      <Button onClick={addSalesCard}>Adicionar Card</Button> 
      </Header>
   <Boddy>
 
      {salesCards.map((card) => (
        <CardItem key={card.id} style={{ display: 'inline-block' }}>
          <img src={card.image} alt="Product" width="100%" height="400" />
      
        <div>  
          <Button onClick={() => editCard(card.id)}>Editar</Button>  
          <Button onClick={() => deleteCard(card.id)}>Deleter</Button>
          </div>
        </CardItem> 
      ))}
      </Boddy>

    
  
    </>
  );
}

export default App;


