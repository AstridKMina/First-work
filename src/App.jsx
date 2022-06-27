import { useState } from 'react'
import React from 'react';
import quotes from './quotes.json'
import './App.css'
import QuotesBox from './components/QuotesBox';
import Mybutton from './components/Mybutton';
import colors from './colors.json'



function App() {

  const random = Math.floor(Math.random() * quotes.length)
  const [count, setCount] = useState(random);

  const randomColor = Math.floor(Math.random() * colors.length)
  const [hex, setHex] = useState(randomColor);

  const change = () => {
    const random = Math.floor(Math.random() * quotes.length)
    setCount(random);

    const randomColor = Math.floor(Math.random() * colors.length)
    setHex(randomColor)

  }

  let color= colors[hex].hex
// @ts-ignore
document.body.style=`background:${color}`;


  return (
   

      <div className="App" >

        <QuotesBox changer={count} colorback={color} />
        <Mybutton btn={change} colorback={color}/>

      </div>

  
  )
}



export default App
