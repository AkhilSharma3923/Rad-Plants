import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Search from './Search';
import Catalogus from './Catalogus';
import Contact from './Contact';
import Cart from './Cart';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalogus" element={<Catalogus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Routing;
