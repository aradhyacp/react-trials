import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link, useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const userNameList = useLoaderData();
  return (
    <div className="min-h-screen flex flex-col bg-[#171122]">
      {/* <div className="">Currently logged in as: {user.userName}</div>
      <div>Users in the company:</div>
      <div>
        {userNameList.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>

      <Link to="/profile">Profile</Link> */}
      <div className="flex px-4 py-3 flex-row justify-between border-solid border-b-[#2f2447] border-b-2">
        <Link
          className="flex gap-5 flex-row items-center"
          to={user ? "/dashboard" : "/"}
        >
          <div className="size-6 text-white">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="text-white text-2xl font-bold logo">Demo App</div>
        </Link>
        <Link
          className="text-white bg-[#7b47eb] px-6 font-bold h-10 flex items-center rounded-lg"
          to="/profile"
        >
          Profile
        </Link>
      </div>
      <div className="flex mt-5 justify-center text-3xl font-bold">Currently Logged In as: {user.userName}</div>
      <div className="mt-10 px-10 py-4 ">
        <div className="mb-7 flex justify-center">List of Database Users</div>
        <div className="flex border border-[#443465] bg-[#171122] rounded-lg overflow-hidden mb-6">
            <table className="table-fixed w-full">
                <thead>
                    <tr class="bg-[#221a32]">
                      <th class=" px-4 py-3 text-left text-white text-sm font-medium leading-normal w-[25%]">ID</th>
                      <th class=" px-4 py-3 text-left text-white text-sm font-medium leading-normal w-[25%]">Name</th>
                      <th class=" px-4 py-3 text-left text-white text-sm font-medium leading-normal w-[25%]">Username</th>
                      <th class=" px-4 py-3 text-left text-white text-sm font-medium leading-normal w-[25%]">Email</th>
                      </tr>
                </thead>
                <tbody>
                    {userNameList.map((u)=>(
                        <tr key={u.id} className="border-t border-t-[#443465] ">
                        <td className="w-[25%] px-2 py-4 text-[#a493c8] text-sm font-normal leading-normal">{u.id}</td>
                        <td className="w-[25%] px-2 py-4 text-[#a493c8] text-sm font-normal leading-normal">{u.name}</td>
                        <td className="w-[25%] px-2 py-4 text-[#a493c8] text-sm font-normal leading-normal">{u.username}</td>
                        <td className="w-[25%] px-2 py-4 text-[#a493c8] text-sm font-normal leading-normal">{u.email}</td>
                    </tr>)
                    )}
                    
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
