
import React, { useEffect, useState } from "react";
import axios from "axios";
import {Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail"
import SearchBar from "./components/SearchBar/SearchBar";
import { useLocation } from "react-router-dom";
import FormGame from "./components/Form/FormGame";


function App() {
  //? Verifica la locacion actual
  const location = useLocation();

  return (
    <div className="App">
      <div>
        {location.pathname === "/Home" && <SearchBar />}
      </div>
      
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route  exact path="/Home" element={<Cards/>} />
        <Route exact path="/Detail/:detailId" element={<Detail/>} />
        <Route  exact path="/newGame" element={<FormGame/>} />
      </Routes>

    </div>
  );
}

export default App;
