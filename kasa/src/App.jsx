import React from 'react';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './Components/Footer/Footer';
import Error from './Pages/Error404';
import './sass/main.scss';
import { BrowserRouter, Routes,Route } from "react-router-dom";

const App = () => { 
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='./Pages/About.jsx' element={<About/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
};

export default App;