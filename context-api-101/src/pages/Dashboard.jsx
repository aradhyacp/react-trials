import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const {user} = useContext(UserContext);
    const [userNameList,setuserNameList] = useState([])
    useEffect(()=>{
        const fetchAPI = async () =>{
            const response = await fetch("https://jsonplaceholder.typicode.com/users"
            )
            const json = await response.json()
            setuserNameList(json)
            
        }
        fetchAPI();
    },[]
    )
useEffect(() => {
  userNameList.map(user => (
    console.log(user.name)
  ));
}, [userNameList]);


  return (
    <div>
        <div className="">Currently logged in as: {user.userName}</div>
        <div className="">Users in the company are {userNameList.map(user=>(
            <div className="">{user.name}</div>
        ))}</div>
        <Link to="/profile">Profile</Link>
    </div>
  )
}

export default Dashboard