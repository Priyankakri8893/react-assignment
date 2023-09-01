import { useState } from "react";
import "./app.css"

const App= () => {
    const [count, setCount]= useState(0)
    const [form, setForm]= useState({
        name: "",
        email: "",
        age: ""
    })

    const formhandle= (event) => {
        const name= event.target.name
        const value= event.target.value

        setForm( (prev) => {return {...prev, [name]: value}})
    }

    return(
        <div className="app">
        <button onClick={ () => setCount(count+1)}>+</button>
        <span>{count}</span>
        <button onClick={ () => (count === 0)?setCount(0) : setCount(count-1)}>-</button>
        {/* ****************************** */}

        <br />
        <br />
        <h1>Register</h1>
        <br />
        <form action="">
        name: <input type="text" name="name" value={form.name} onChange={formhandle}/>
        <br />
        <br />
        email: <input type="email" name="email" value={form.email} onChange={formhandle}/>
        <br />
        <br />
        age: <input type="number" name="age" value={form.age} onChange={formhandle}/>
        <br />
        <br />
        <input type="submit" />
        </form>
        <h2>my name is {form.name} and age is {form.age}. my email is {form.email}</h2>
        </div>
    )
}


export default App;
