import React from "react";
import { Route, NavLink, BrowserRouter as Router, Redirect } from "react-router-dom";

import Home from "./pages/home-page.js";
import NotFoundPage from "./pages/404";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div>
        <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
        <ul className="header">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/SuggestArticle">
              Suggest Article
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/SubmitArticle">
              Backend
            </NavLink>
          </li>
          {/* <li><NavLink to="/Home">Select the Practice</NavLink></li> */}
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </div>
      </div>
    </Router>
  );
};

export default App;