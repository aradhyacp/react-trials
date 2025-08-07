import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import Login from "../components/Login";
import Profile from "../components/Profile";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/dashboard"
            element={<Dashboard />}
            loader={async () => {
              const res = await fetch(
                "https://jsonplaceholder.typicode.com/users"
              );
              return res.json();
            }}
          ></Route>
          <Route
            path="/profile"
            element={<Profile />}
            loader={() => {
              const img =
                "https://github.com/aradhyacp/react-trials/blob/main/light-dark-mode/public/defaultpfp.jpeg?raw=true";
              return img;
            }}
          ></Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRoutes;
