import React, { useState } from "react";
import {Button} from '../Components/Button' 
import { CardItem } from "../Components/Card";
import { Header } from "../Components/Header";
import { Input } from "../Components/Inputs";
import  FilterItens  from "../Containers/Filter";

import { Boddy } from "../Containers/Home";

function App() {
  const [salesCards, setSalesCards] = useState([]);
  const initialCardState = {name: '', marca:'', fabricante: '', ano:'', descricao:''}
  const [newCard, setNewCard] = useState(initialCardState); 

  const addSalesCard = () => {
    const card = {
      name: newCard.name,
      marca: newCard.marca,
      fabricante: newCard.fabricante,
      descricao: newCard.descricao,
      ano: newCard.ano,
    } 
    if(Object.values(card).every((item) => item)){
      setSalesCards([...salesCards, card]);
      setNewCard(initialCardState)
    }
      else alert("Campos obrigatorios")
  };

  const handleChange = (event) => {
    setNewCard(prevState=>({...prevState,[event.target.name]:event.target.value})) 
  }

  const editCard = (id) => {
    console.log(`Editing card with id: ${id}`);
  };

  const deleteCard = (id) => {
    setSalesCards(salesCards.filter((card) => card.id !== id));
  };

  return (
    <>    
    <Header>
      <Input type="text" value={newCard.name} placeholder='Nome' name="name" onChange={handleChange}/>
      <Input type="text" value={newCard.marca} placeholder='Marca' name="marca" onChange={handleChange}/>
      <Input type="number" value={newCard.ano} placeholder='Ano' name='ano' onChange={handleChange}/>
      <Input type="text" value={newCard.fabricante} placeholder='Fabricante' name='fabricante' onChange={handleChange}/>
      <Input type="text" value={newCard.descricao} placeholder='Descrição' name='descricao'  onChange={handleChange}/>
      <Button onClick={addSalesCard}>Adicionar Card</Button> 
    </Header>'  '

   <Boddy>
   <FilterItens/>
      {salesCards.map((card) => (
        <CardItem car={card} style={{ display: 'inline-block' }}>
     { /* <img src={card.image} alt="Product" width="100%" height="400" />*/}
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


