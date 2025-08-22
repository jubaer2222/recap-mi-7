
import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter] = useState(0);

  return (
   <div className='my-10 flex flex-col gap-5 justify-center items-center'>
    <p>Total Clicked : {counter}</p>
    <div className='flex gap-2'>
       <button onClick={() =>setCounter(counter + 1)} className="btn btn-primary">Add</button>
     <button onClick={() =>setCounter(counter - 1)} className="btn btn-primary">Remove</button>
     <button onClick={() =>setCounter(0)} className="btn btn-primary">Reset</button>
    </div>
   </div>
  )
}

export default App
