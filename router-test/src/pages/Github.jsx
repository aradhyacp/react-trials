import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Github = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.github.com/users/aradhyacp", {
        method: "GET",
      });
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="w-full">
      <div className="flex bg-gray-500 p-10 w-full justify-center gap-15">
        <div className="w-70 ">
          <img className="rounded-full" src={data.avatar_url} alt="image" />
        </div>
        <div className="flex w-[50%] flex-col text-3xl text-white">
            <div className="">{data.name}</div>
          <div className="">@{data.login}</div>
          <div className="">public repo : {data.public_repos}</div>
          <div className="">public_gists: {data.public_gists}</div>
          <div className="">followers: {data.followers}</div>
          <div className="">following: {data.following}</div>
          <div className="">account created at: {data.created_at}</div>
          <div className="">latest update at: {data.updated_at}</div>
        </div>
      </div>
    </div>
  );
};

export default Github;
