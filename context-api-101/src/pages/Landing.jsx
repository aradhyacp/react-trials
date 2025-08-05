import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
        <div className="bg-green-600 text-5xl">Helllo Context api 101</div>
        <Link to="/login">login</Link>
    </div>
  )
}

export default Landing