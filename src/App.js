import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import ProductList from "./components/Products/ProductList";
import Cart from "./components/Cart/Cart";
import Product from "./components/Products/Product";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Details from "./components/Detail/Details";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/product-info">
            <Details />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Modal />
      </Router>
    </div>
  );
}

export default App;
