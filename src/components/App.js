import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";

import Home from "./Home";
import Developer from "../pages/team/Developer";
import Designer from "../pages/team/Designer";
import Marketer from "../pages/team/Marketer";

import Survey from "./Survey";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      { window.location.pathname !== "/survey" && 
      <NavBar />
      }
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/developer" element={<Developer />}></Route>
        <Route path="/designer" element={<Designer />}></Route>
        <Route path="/marketer" element={<Marketer />}></Route>

        <Route path="/survey" element={<Survey />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
