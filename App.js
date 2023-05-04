import { useState } from 'react';
import './App.css';

function App() {
  const [fruits, setFruits] = useState([
    {id: 1, nom: "Abricot"},
    {id: 2, nom: "Banane"},
    {id: 3, nom: "Fraise"},
  ])

  const [newFruit, setNewFruit] = useState("");

  const supprimeFruit = function(id) {
    const fruitsCopy = [...fruits];
    const fruitsCopyUpdate = fruitsCopy.filter((fruits) => fruits.id !== id);
    setFruits(fruitsCopyUpdate);
  }

  const ajouterFruit = (e) => {
    e.preventDefault();
    const fruitsCopy = [...fruits]; // On copie le state d'abord
    
    const id = new Date().getTime();
    const nom = newFruit;

    fruitsCopy.push({id: id, nom: nom});
    setFruits(fruitsCopy);
    setNewFruit("");
  }

  const handleChange = (e) => {
    setNewFruit(e.target.value);
  }

  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>{fruits.map((fruit) => {
        return <li key={fruit.id}> {fruit.nom} <button onClick={()=>supprimeFruit(fruit.id)}>x</button> </li>
      })}</ul>
      <form action='submit' onSubmit={ajouterFruit}>
        <input type='text' onChange={handleChange} required placeholder='banane'/>
        <button>ajouter | +</button>
      </form>
    </div>
  )
}

export default App;
