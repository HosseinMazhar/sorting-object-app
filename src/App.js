import AddingItemForm from "./components/AddIngItemForm";
import { useState } from 'react'
import ItemCard from "./components/ItemCard";
import React from "react";
import FilteringItem from "./components/FilteringItem";

function App() {

  const [formData, setFormData] = useState([]);

  const dataHandler = (data) => {
    setFormData([...formData, {
      name: data.name,
      number: data.number,
    }])
  }

  const sorter = (filter) => {
    debugger;
    if (filter === 'DownToUp') {
      setFormData([...formData].sort((a, b) => a.number - b.number));
      console.log(formData);
    }
    if (filter === 'upToDown') {
      setFormData([...formData].sort((a, b) => b.number - a.number));
      console.log(formData);
    }
  }

  return (
    <div className="App w-screen h-screen bg-slate-200 flex flex-col items-center">
      <AddingItemForm dataHandler={dataHandler} />
      <FilteringItem sorter={sorter} />
      {formData
        .filter(data => data.name !== '' && data.number !== '')
        .map((data, index) => { return <ItemCard key={index} name={data.name} number={data.number} /> })
      }
    </div>
  )
}

export default App;
