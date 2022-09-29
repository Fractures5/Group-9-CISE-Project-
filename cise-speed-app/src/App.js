import React from "react";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/home-page.js";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div>
        <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
         <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink exact to="/SuggestArticle">Suggest Article</NavLink></li>
          <li><NavLink exact to="/SubmitArticle">Backend</NavLink></li>
          {/* <li><NavLink to="/Home">Select the Practice</NavLink></li> */}
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
        </div>
      </div>
    </Router>
  );
};

export default App;