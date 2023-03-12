import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './Layouts/Layout_base';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';

const App = () => {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Routes>
      <Footer />
    </Layout>
  );
};

export default App;
