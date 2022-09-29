import React from "react";
import { Route, NavLink, BrowserRouter as Router, Redirect } from "react-router-dom";
// import logo from './logo.svg';
import Home from "./pages/home-page";
import './App.css';
//App.js
const App = () => {
  return (
    <Router>
      <div>
        <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
        <ul className="header">
          <li><NavLink exact to="/Home">Home</NavLink></li>
          <li><NavLink exact to="/Home">Suggest Article</NavLink></li>
          <li><NavLink exact to="/Home">Backend</NavLink></li>
          <li><NavLink to="/Home">Select the Practice</NavLink></li>
        </ul>
        <div className="content">
          <Route path="/Home" component={Home} />
        </div>
      </div>
    </Router>
  );
}

export default App;