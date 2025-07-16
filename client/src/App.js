import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' //aprender sobre esto
import ListProduct from "./screens/ListProducts";
import ProductDetail from "./screens/ProductDetail";
import SearchProduct from "./screens/SearchProduct";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SearchProduct}/>
        <Route exatc path='/items?search=' component={ListProduct}/>
        <Route exact path='/items/:id' component={ProductDetail}/>
      </Switch>
    </Router>
  );
}

export default App;
