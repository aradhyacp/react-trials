import { useState } from 'react'

import './App.css'

function App() {
  const [customClass,setCustomClass] = useState('')
  const colorChange = (color)=>{
    setCustomClass(color);
  };

  return (
    <div className={`${customClass} h-screen bg-emerald-600 w-full`}>
    <div className="text-3xl flex w-[400px] justify-center bg-amber-700 mx-auto p-5 rounded-[7px]">Dom Manipulation !</div>
    <div className="bg-gray-400 fixed flex flex-wrap justify-evenly w-full p-5 bottom-10">
      <div className="text-white bg-black p-3 rounded-[7px] cursor-pointer" onClick={()=>{colorChange("black")}}>black</div>
      <div className="text-black bg-red-500 p-3 rounded-[7px] cursor-pointer" onClick={()=>{colorChange("red")}}>red</div>
      <div className="text-black bg-yellow-500 p-3 rounded-[7px] cursor-pointer" onClick={()=>{colorChange("yellow")}}>yellow</div>
      <div className="text-black bg-pink-600 p-3 rounded-[7px] cursor-pointer" onClick={()=>{colorChange("pink")}}>pink</div>
      <div className="text-black bg-blue-600 p-3 rounded-[7px] cursor-pointer" onClick={()=>{colorChange("blue")}}>blue</div>
      <div className="text-black bg-white p-3 rounded-[7px] cursor-pointer" onClick={()=>{colorChange("white")}}>white</div>
    </div>
    </div>
  )
}

export default App
