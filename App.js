import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/SideBar';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import Analytics from './Components/Analytics';
import Comment from './Components/Comment';
import Product from './Components/Product';
import ProductList from './Components/ProductList';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <NavBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
        </NavBar>
      </Sidebar>
      
    </BrowserRouter>
  );
};

export default App;