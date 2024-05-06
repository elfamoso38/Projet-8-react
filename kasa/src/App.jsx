import React from 'react';
import Header from './Components/Header/Header';
import './sass/header.scss';
import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter, Routes,Route } from "react-router-dom";

const App = () => { 
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='./Pages/About.jsx' element={<About/>} />
      </Routes>
      </BrowserRouter>
  );
};

export default App;