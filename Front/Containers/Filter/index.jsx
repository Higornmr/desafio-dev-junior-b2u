import React, { useState } from 'react';

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
  // ...
];

function FilterItens() {
  const [filter, setFilter] = useState({ name: '', brand: '', year: '', company: '' });

  const handleChange = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };

  const filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(filter.name.toLowerCase()) &&
      item.brand.toLowerCase().includes(filter.brand.toLowerCase()) &&
      item.year.includes(filter.year) &&
      item.company.toLowerCase().includes(filter.company.toLowerCase())
    );
  });

  return (
    <div>
      <form>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={filter.name }
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Marca:
          <input
            type="text"
            name="brand"
            value={filter.brand}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Ano:
          <input
            type="text"
            name="year"
            value={filter.year}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Empresa:
          <input
            type="text"
            name="company"
            value={filter.company}
            onChange={handleChange}
          />
        </label>
        <br />
      </form>
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
  );
}

export default FilterItens;
