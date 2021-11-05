import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from 'react';

import {
  Route,
  Switch
} from "react-router-dom"

import NavBar from "./components/NavBar.js"
import ProductList from "./components/ProductList.js"
import Details from "./components/Details.js"
import Cart from "./components/Cart"
import Default from "./components/Default.js"
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal />
    </React.Fragment>
  );
}


export default App;
