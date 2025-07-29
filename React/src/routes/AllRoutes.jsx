import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Details from '../pages/details';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product/:id" element={<Details />} />
    </Routes>
  );
};

export default AllRoutes;
