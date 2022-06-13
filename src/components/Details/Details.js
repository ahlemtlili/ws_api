import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"

const Details = () => {
     const {id}=useParams()
     const [oneRecipe, setOneRecipe] = useState({})
     const getOneRecipe=async()=>{
    try {
        const response= await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=e97c05d8&app_key=450d2bb29469f70db0894908f57136ff`)
setOneRecipe(response.data.recipe)
    } catch (error) {
        console.error(error);   
    }
    }
    useEffect(() => {
        getOneRecipe()
    }, [])
    
  return (
    <div>{oneRecipe.label}</div>
  )
}

export default Details