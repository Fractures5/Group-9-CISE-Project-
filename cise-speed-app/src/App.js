import React from "react";
import { Route, NavLink, BrowserRouter as Router, Redirect } from "react-router-dom";

import Home from "./pages/home-page.js";
import SuggestArticle from "./pages/suggest-article-page.js";
import NotFoundPage from "./pages/404";
import BackendArticle from "./pages/backend-article-page.js";
import ShowArticlesList from "./components/show-articles-list.js";
import ShowDBArticles from "./pages/show-articles.js"
import "./App.css";
const App = () => {
  return (
    <Router>
      <div>
        <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/SuggestArticleForm">Suggest Article</NavLink></li>
          <li><NavLink to="/BackendArticleForm">Backend</NavLink></li>
          <li><NavLink to="/ShowArticlesList">Show Articles</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/SuggestArticleForm" component={SuggestArticle} />
          <Route exact path="/BackendArticleForm" component={BackendArticle} />
<<<<<<< HEAD
          <Route root path="/ShowArticlesList" component={ShowArticlesList} />
=======
          <Route exact path="/ShowArticlesList" component={ShowDBArticles} />
>>>>>>> 71771a75e7b50e486e91f1133ac492a3b61ce718
          <Route exact path="/404" component={NotFoundPage} />
          {/* <Redirect to="/404" /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;