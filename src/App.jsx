import { useEffect, useState } from "react";
import "./App.css"

function App(){
  const [time, setTime]= useState(new Date().toLocaleTimeString())

  
    setInterval( () => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

  return(
    <>
    <h1>{time}</h1>
    </>
  )
}


export default App;