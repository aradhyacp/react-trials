import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const Obj1 = {
    name: "Funky Monkey",
    serialNumber: 5883,
    price: 0.889
  }
  const Obj2 = {
    name: "Mimicatz",
    serialNumber: "007",
    imagesrc: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"
  }
  const Obj3 = {
    name: "Meme cat",
    serialNumber: 3344,
    imagesrc: "https://media.tenor.com/JjVEMUm8yigAAAAM/no-cat.gif"
  }
    const Obj4 = {
    name: "Meme cat 2",
    serialNumber: 3344,
    imagesrc: "https://media.tenor.com/G9qmH_P1nbsAAAAM/angry-angry-cat.gif"
  }

  return (
    <>
      <h1 className='bg-green-500 p-4 rounded-2xl text-white w-3xl text-6xl'>Tailwind and Props Test</h1>
      <div className="flex gap-6 mt-6 w-[85%] flex-wrap">
      <Card nft={Obj1}/>
      <Card nft={Obj2}/>
      <Card nft={Obj3}/>
      <Card nft={Obj4}/>
      <Card nft={Obj4}/>
      <Card nft={Obj4}/>
      <Card nft={Obj4}/>
      </div>
    </>
  )
}

export default App
