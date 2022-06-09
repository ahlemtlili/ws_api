import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Recipe from '../Recipe/Recipe'

const RecipeList = ({recipes}) => {
    
      
  return (
    <div>
{recipes.map((el)=><Recipe el={el} key={el.recipe.uri.slice(51)}/>)}
    </div>
  )
}

export default RecipeList