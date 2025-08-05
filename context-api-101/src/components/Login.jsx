import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    if (!userName.trim() || !password.trim()) {
      const msg="Username and password are required"
      setError(msg);
      alert(msg);
      return;
    }
    e.preventDefault();
    setUser({ userName, password });
    navigate("/dashboard")
  };
  return (
    <div className="flex h-screen min-h-screen bg-[#171122] text-white flex-col">
      <div className="mt-15 flex justify-center text-4xl font-bold">Login</div>
      <div className="flex flex-col mt-10 items-center gap-3">
        <label className="flex flex-col w-90">Username
        <input type="text" onChange={(e)=> setUserName(e.target.value)} placeholder="Enter Your Username" className="mt-3 px-3 py-3 rounded-lg focus:outline-0 focus:ring-0 border border-[#443465] bg-[#221a32] focus:border-[#443465] placeholder:text-[#a493c8]"/></label>
        <label className="flex flex-col w-90">Password
        <input type="text" onChange={(e)=> setPassword(e.target.value)} placeholder="Enter your Password" className="mt-3 p-3 rounded-lg focus:outline-0 focus:ring-0 border border-[#443465] bg-[#221a32] focus:border-[#443465] placeholder:text-[#a493c8]"/></label>
        {error&&<div>{error}</div>}
        <div className="mt-5 text-xl cursor-pointer px-3 py-4 bg-[#7b47eb] text-white w-90 font-bold rounded-lg text-center" onClick={handleSubmit}>Login</div>
      </div>
      
    </div>
  );
};

export default Login;
