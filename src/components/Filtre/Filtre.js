import React, { useState } from 'react'

const Filtre = ({handlesubmit}) => {
    const [input, setInput] = useState("")
  return (
    <div>
        <form onSubmit={(e)=>handlesubmit(e,input)}>
        <input onChange={(e)=>setInput(e.target.value)} type="text"/>
        </form>
    </div>
  )
}

export default Filtre