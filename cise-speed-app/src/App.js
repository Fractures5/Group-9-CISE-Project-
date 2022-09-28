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
          <li>
            <NavLink exact to="/Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Home">Select the Practice</NavLink>
          </li>
        </ul>
        <div className="content">
          <Route path="/Home" component={Home} />
        </div>
      </div>
    </Router>
    // <div classNa<Router>me="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React test test test
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;