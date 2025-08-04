import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    if (!userName.trim() || !password.trim()) {
      const msg="Username and password are required"
      setError(msg);
      alert(msg);
      return;
    }
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div>
      <h2>login</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="username"
      />{" "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />{" "}
      <button onClick={handleSubmit}>login</button>
    </div>
  );
};

export default Login;
