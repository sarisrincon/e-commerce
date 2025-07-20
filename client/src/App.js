import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from "./components/productList/ProductList";
import SearchProduct from "./components/search/SearchProduct";
import ProductDetail from "./components/productDetail/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SearchProduct />} />
        <Route path='/items' element={<ProductList />} />
        <Route path='/items/:id' element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
