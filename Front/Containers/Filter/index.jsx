import React, { useState } from 'react';
import { Input } from '../../Components/Inputs';
// import {ContainerItens, Container, Form} from './styles'

const items = [
  {
    name: 'item 1',
    brand: 'brand 1',
    year: '2022',
    company: 'company 1'
  },
  {
    name: 'item 2',
    brand: 'brand 2',
    year: '2021',
    company: 'company 2'
  },
  {
    name: 'item 3',
    brand: 'brand 1',
    year: '2020',
    company: 'company 1'
  },
  {
    name: 'item 4',
    brand: 'brand 2',
    year: '2019',
    company: 'company 3'
  },
];

function FilterItens() {
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    setFilter (event.target.value);
  };

  const filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.brand.toLowerCase().includes(filter.toLowerCase()) ||
      item.year.includes(filter.year) ||
      item.company.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div>

      <form>
        <label>
          Nome:
          <Input
            type="text"
            value={filter}
            onChange={handleChange}
          />
        </label>      
    
      </form>
      <div>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.name}>
            <p>Nome: {item.name}</p>
            <p>Marca: {item.brand}</p>
            <p>Ano: {item.year}</p>
            <p>Empresa: {item.company}</p>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default FilterItens;
