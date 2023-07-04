import './App.css'
import { useState } from 'react'

const useCounter = () => {
  const [counter, setCounter] = useState(0)

  const increase = () => setCounter(counter + 1)
  const decrease = () => setCounter(counter - 1)
  const reset = () => setCounter(0)

  return {counter, increase, decrease, reset}
}

export default function App() {

  const counter1 = useCounter()
  const counter2 = useCounter()
  const counter3 = useCounter()
  const counter4 = useCounter()

  return (
    <div className='parent'>
      <div>
        <div>{counter1.counter}</div>
        <button onClick={counter1.increase}>+</button>
        <button onClick={counter1.decrease}>-</button>
        <button onClick={counter1.reset}>Reset</button>
      </div>

      <div>
        <div>{counter2.counter}</div>
        <button onClick={counter2.increase}>+</button>
        <button onClick={counter2.decrease}>-</button>
        <button onClick={counter2.reset}>Reset</button>
      </div>

      <div>
        <div>{counter3.counter}</div>
        <button onClick={counter3.increase}>+</button>
        <button onClick={counter3.decrease}>-</button>
        <button onClick={counter3.reset}>Reset</button>
      </div>

      <div>
        <div>{counter4.counter}</div>
        <button onClick={counter4.increase}>+</button>
        <button onClick={counter4.decrease}>-</button>
        <button onClick={counter4.reset}>Reset</button>
      </div>
      
    </div>
    
  )
}
