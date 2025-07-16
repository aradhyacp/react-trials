import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter]= useState(5);
  const [classColor,setclassColor] = useState('');
  const addValue =()=>{
    console.log(counter);
    setCounter(counter+1);
    setclassColor('green');
  }

  const minusValue = () =>{
    setCounter(counter-1);
    setclassColor('red');
  }

  useEffect(()=>{
    if(classColor){
      const timeout = setTimeout(() => {
        setclassColor('')
      }, 400);
      return () => clearTimeout(timeout);
    }
  },[classColor])

  return (
    <>
    <h1>Counter example</h1>
    <h2>Current value: <span className={classColor}>{counter}</span></h2>
    <div className="button-container"><button onClick={addValue}>Increment</button>
    <button onClick={minusValue}>Decrement</button></div>

    </>
  )
}

export default App
