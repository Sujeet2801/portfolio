
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import './App.css';

//component
import Navbar from './component/Navbar';
import Themes from './component/Themes';

//pages
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Themes/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path='contact' element={<Contact/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
