import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const User = () => {
    const obj = useParams();
    useEffect(()=>{
        console.log(obj);
        console.log(obj.id);
    })
    const id = obj["id"];
  return (
    <div className='bg-gray-600 text-white px-6 py-6 text-center text-4xl'>The Parameter received by the website is : {id}</div>
  )
}

export default User