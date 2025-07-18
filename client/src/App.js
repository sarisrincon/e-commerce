import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListProduct from "./components/productList/ListProduct";
import SearchProduct from "./components/search/SearchProduct";
import ProductDetail from "./components/productDetail/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SearchProduct />} />
        <Route path='/items' element={<ListProduct />} />
        <Route path='/items/:id' element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
