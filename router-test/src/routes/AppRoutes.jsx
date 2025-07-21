import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Github from "../pages/Github";
import MainLayout from "../layout/MainLayout";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/github" element={<Github />}></Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
