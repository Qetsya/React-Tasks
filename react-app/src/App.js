import './App.css';
import ProductsList from './components/ProductsList';
import Input from './components/Input';
import { useState } from 'react';

const data = [
  {
      name: "Duona",
      id: Math.random(),
  },
    {
      name: "Vistiena",
      id: Math.random(),
  },
    {
      name: "Cipsai",
      id: Math.random(),
  },
    {
      name: "Pienas",
      id: Math.random(),
  },
  {
      name: "Vaistai",
      id: Math.random()
  }
  ]

function App() {
  const [filterData, setFilterData] = useState(data);

  const handleChange = (value) => {
    if(!value) {
      return setFilterData(data);
    }

    const result = data.filter((data) => {
      return data.name.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()); 
    })

    setFilterData(result);
  };

  return (
    <div className="App">
      <Input label="Search by:" onChange={handleChange} />
      <ProductsList list={filterData} infoMessage={}/>
    </div>
  );
}

export default App;