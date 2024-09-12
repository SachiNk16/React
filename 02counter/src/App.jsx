import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[counter,setCounter] =useState(15)
  // let counter =15

  const addValue=()=>{
    // console.log("value added", Math.random());
    console.log("clicked", counter);

    // counter = counter + 1
    setCounter(counter+3)
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>counter value : {counter}</h2>

    <button
    onClick={addValue}
    >Add value </button>

    <br />
    <br />

    <button>remove value{counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
