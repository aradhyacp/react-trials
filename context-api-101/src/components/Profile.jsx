import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { useLoaderData } from "react-router-dom";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const handleLogout = () => {
    setUser(null);
  };
  const imgurl = useLoaderData()
  return (
    <div className="min-h-screen bg-[#171122] pt-13">
      {/* <div>{user?<h1>Welcome {user.userName}</h1>: <h1>please login</h1>}</div>
    {user && (
  <button onClick={handleLogout}>Logout</button>
)} */}
      <div className="flex items-center flex-col gap-5 w-fit mx-auto">
        <div className="size-50 mt-6">
          <img
            src={imgurl}
            alt="pfp"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-2xl font-bold">@ {user.userName}</div>
          <div className="text-[#a493c8] text-base font-normal leading-normal text-center">
            Password: {user.password}
          </div>
        </div>
        <div className="px-4 bg-[#7b47eb] h-10 flex items-center font-bold rounded-lg cursor-pointer" onClick={handleLogout}>Logout</div>
      </div>
    </div>
  );
};

export default Profile;
