import { useState } from "react";
import "./app.css"

const App= () => {
    const [count, setCount]= useState(0)

    return(
        <div className="app">
        <button onClick={ () => setCount(count+1)}>+</button>
        <span>{count}</span>
        <button onClick={ () => (count === 0)?setCount(0) : setCount(count-1)}>-</button>
        </div>
    )
}


export default App;
