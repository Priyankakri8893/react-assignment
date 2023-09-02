import { useEffect, useState } from "react";
import "./app.css"

// const App= () => {
//     const [count, setCount]= useState(0)

//     useEffect( () => {
//       document.title= count
//     },[])

//     return(
//         <div className="app">
//         <button onClick={ () => setCount(count+1)}>+</button>
//         <span>{count}</span>
//         <button onClick={ () => (count === 0)?setCount(0) : setCount(count-1)}>-</button>

//         </div>
//     )
// }

const App= () => {
  const [size, setSize]= useState(window.screen.width)

  const screenResize= () => {
    setSize(window.innerWidth)
  }

  useEffect( () => {
    window.addEventListener("resize", screenResize)
    
    return () => {
      window.removeEventListener("resize", screenResize)
    }
  }, [size])
  return(
    <div className="app">
      <h1>window size is {size}</h1>
    </div>
  )
}


export default App;
