import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Ads from './Pages/Shared/ads/Ads';
import Footer from './Pages/Shared/footer/Footer';
import Nav from './Pages/Shared/nav/Nav';

function App() {

  const [show, setShow] = useState(true)

  return (
    <div className="App">
      {
        show && <Ads setShow={setShow}></Ads>
      }
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
