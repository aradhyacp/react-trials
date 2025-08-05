import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user,setUser} = useContext(UserContext)
    const handleLogout = () =>{
        setUser(null)
    }
  return (
    <div className="text-black">
    <div>{user?<h1>Welcome {user.userName}</h1>: <h1>please login</h1>}</div>
    {user && (
  <button onClick={handleLogout}>Logout</button>
)}

    </div>
  )
}

export default Profile