import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Navbar from './navbar';
import { Redirect, Route, Switch } from "react-router-dom"

function App() {
  return (
    <><Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/Service" component={Service} />
        <Redirect to="/" />
      </Switch>
    </>

  );
}

export default App;
