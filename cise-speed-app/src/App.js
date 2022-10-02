import React from "react"
import { Route, NavLink, BrowserRouter as Router} from "react-router-dom";

import SuggestArticle from "./pages/suggest-article-page";
import './App.css';

//App.js
const App = () => {
  return (
    <Router>
      <div>
        <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
        <ul className="header">
          <li>
            <NavLink exact to="/SuggestArticle">Suggest Article</NavLink>
          </li>
        </ul>
        <div className="content">
          <Route path="/SuggestArticle" component={SuggestArticle} />
        </div>
      </div>
    </Router>
  );
}
export default App;