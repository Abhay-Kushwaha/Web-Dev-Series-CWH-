import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [btn, setbtn] = useState(false)
  const [form, setForm] = useState({ phone: "" })
  const [todos, settodos] = useState([
    {
      title: "Hellow",
      desc: "India"
    },
    {
      title: "Namaste",
      desc: "Bharat"
    }
  ])
  const Todo = ({ todo }) => {
    return (<>
    <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
    </>)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form);
    
  }

  return (
    <>
      {todos.map(todo => {
        return <p className='para'><Todo todo={todo} /></p>
      })}
      {btn ? <button>Click him</button> : <button>Click him Again</button>}<br />
      {/* {btn && <button>Value is {btn}</button>}<br /> */}
      <button onClick={() => { setbtn(!btn) }}>Click to toggle</button>

      <hr width="100%" />

      <input type="text" name="phone" value={form.phone} onChange={handleChange} />

    </>
  )
}

export default App
