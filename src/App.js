import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import Filtre from './components/Filtre/Filtre';
import RecipeList from './components/RecipeList/RecipeList';

function App() {
  const [query, setQuery] = useState("")
  const handlesubmit=(e,x)=>{e.preventDefault();setQuery(x)}
  const [recipes, setRecipes] = useState(null)
  const [loading, setLoading] = useState(true)
    const getrecipes  =async()=> {
        try {
          const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=e97c05d8&app_key=450d2bb29469f70db0894908f57136ff&cuisineType=American`);
          setRecipes(response.data.hits);
          console.log(response.data.hits)
          setLoading(false)
        } catch (error) {
          console.error(error);
        }
      }
      useEffect(() => {
          console.log("component app did mount or state query updated")
        getrecipes()
      }, [query])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>
    <Filtre handlesubmit={handlesubmit}/>
    {loading?<h1>loading ...</h1>: <RecipeList recipes={recipes}/>}</div>}/>
    <Route path="/Recipedetails/:id" element={<Details/>}/>
    
    </Routes>
    </div>
  );
}

export default App;
