import React, { useState } from "react";
import {Button} from '../Components/Button' 
import { CardItem } from "../Components/Card";
import { Header } from "../Components/Header";

import { Boddy } from "../Containers/Home";

const cars = [
  { id: 1, manufacturer: "Honda", model: "Civic" },
  { id: 2, manufacturer: "Toyota", model: "Camry" },
  { id: 3, manufacturer: "Honda", model: "Accord" },
  { id: 4, manufacturer: "Toyota", model: "Corolla" },
  { id: 5, manufacturer: "Honda", model: "CR-V" },
  { id: 6, manufacturer: "Toyota", model: "RAV4" },
  { id: 7, manufacturer: "Honda", model: "Pilot" },
  { id: 8, manufacturer: "Toyota", model: "Highlander" },
];

function App() {
  const [salesCards, setSalesCards] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState("");

  const addSalesCard = () => {
    const newCard = {
      id: salesCards.length + 1,
      image: "https://via.placeholder.com/150",
    };
    setSalesCards([...salesCards, newCard]);
  };

  const editCard = (id) => {
    console.log(`Editing card with id: ${id}`);
  };

  const deleteCard = (id) => {
    setSalesCards(salesCards.filter((card) => card.id !== id));
  };

  const handleManufacturerChange = (e) => {
    const selected = e.target.value;
    setSelectedManufacturer(selected);
    const filtered = cars.filter(
      (car) => car.manufacturer === selected
    ).slice(0,3);
    setFilteredCars(filtered);
  };

  return (
    <>    
    <Header>
      <Button onClick={addSalesCard}>Adicionar Card</Button> 
      </Header>
   <Boddy>
   <div>
      <label>
        Filtrar por fabricante:
        <select onChange={handleManufacturerChange}>
          <option value="">Todos</option>
          <option value="Honda">Honda</option>
          <option value="Toyota">Toyota</option>
        </select>
      </label>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Fabricante</th>
            <th>Modelo</th>
          </tr>
        </thead>
        <tbody>
          {filteredCars.map((car) => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.manufacturer}</td>
              <td>{car.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
      {salesCards.map((card) => (
        <CardItem key={card.id} style={{ display: 'inline-block' }}>
          <img src={card.image} alt="Product" width="300" height="400" />
      
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
