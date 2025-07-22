import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Github, { githubInfoLoader } from "../pages/Github";
import MainLayout from "../layout/MainLayout";
import NotFound from "../pages/NotFound";
import User from "../pages/User";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/github"
          element={<Github />}
          loader={githubInfoLoader}
        ></Route>
        <Route path="/user/:id" element={<User />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </>
  )
);
const AppRoutes = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route element={<MainLayout />}>
    //       <Route path="/" element={<Home />}></Route>
    //       <Route path="/about" element={<About />}></Route>
    //       <Route path="/contact" element={<Contact />}></Route>
    //       <Route path="/github" element={<Github />} loader={githubInfoLoader}></Route>
    //       <Route path="/user/:id" element={<User/>}></Route>
    //     </Route>
    //     <Route path="*" element={<NotFound/>}></Route>
    //   </Routes>
    // </Router>
    <RouterProvider router={router} />
  );
};

export default AppRoutes;
