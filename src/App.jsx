
import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter] = useState(0);

  return (
   <div className='my-10 flex flex-col gap-5 justify-center items-center'>
    <p>Total Clicked : {counter}</p>
     <button onClick={() =>setCounter(counter + 1)} className="btn btn-primary">Primary</button>
   </div>
  )
}

export default App
