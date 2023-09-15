import { useReducer } from "react";

const initialValue= 0;

const reducer= (state, action) => {
  if(action.type === "increase"){
    return state= state+1
  }

  if(action.type === "decrease"){
    if(state === 0) return state = 0
    return state= state-1
  }
}

const App= () => {
  const [count, dispatch]= useReducer(reducer, initialValue)
  return(
    <>
      <button onClick={() => dispatch({type: "increase"})}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch({type: "decrease"})}>-</button>
    </>
  )
}

export default App;

