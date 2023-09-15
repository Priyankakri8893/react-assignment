import { useEffect, useRef, useState } from "react"

const App= () => {
  const [input, setInput]= useState()

  const count= useRef(0)

  useEffect( () => {
    count.current= count.current + 1
  })

  const change= useRef()

  const colorChange= () => {
    change.current.focus()
    change.current.style.backgroundColor= "red"
  }

  return(
    <>
      <input type="text" onChange={ (e) => setInput(e.target.value)} value={input} ref={change}/>
      <p>number of times component render: {count.current}</p>
      <button onClick={colorChange}>colorChange</button>
    </>
  )
}


export default App;