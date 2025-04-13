import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../src/redux/counter/counterSlice'
  

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <button onClick={() => { dispatch(decrement()) }}>-</button>&nbsp;&nbsp;&nbsp;
        Currently count is {count}
        &nbsp;&nbsp;&nbsp;
        <button onClick={() => { dispatch(increment()) }}>+</button>
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  )
}

export default App
