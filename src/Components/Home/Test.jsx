import React from 'react'
import { useState } from 'react'

const Test = () => {
  const [value,setValue]=useState(0)
  function Plus() {
    setValue(value+1)
  }
  function Minus() {
    setValue(value-1)
  }
  
  

  return (
    <div>
      <h1 >{value}</h1>
      <button onClick={Minus}>Decrement</button>
      <button onClick={Plus}>Increment</button>
    </div>
  )
}

export default Test