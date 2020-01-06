import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import "bootstrap/dist/css/bootstrap.min.css";
import AddItem from "./components/Add_Item";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route exact path='/' component={Overview}></Route>
      <Route path='/create' component={AddItem}></Route>
    </Router>
  );
}

export default App;
