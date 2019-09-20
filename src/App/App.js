import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login/" exact component={Login} />
    </Router>
  );
}

export default App;
