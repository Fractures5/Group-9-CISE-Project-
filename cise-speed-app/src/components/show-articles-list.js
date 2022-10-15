import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArticlesTable from './articles-table';

class ShowArticlesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/backendArticleRoutes')
      .then(res => {
        this.setState({
            articles: res.data
        })
      })
      .catch((err) => {
        console.log("Error from ShowArticleList");
      });
  }


  render() {
    const articles = this.state.articles;
    console.log("PrintBook: " + articles);
    let articleList;

    if(!articles) {
        articleList = "there is no book record!";
    } else {
        articleList = articles.map((article, k) => (
          <ArticlesTable article={article} key={k} />
        ));
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="header-center">
                <h2 className="display-4 text-center">Articles List</h2>
              </div>
              <table id="articleTable">
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Journal Name</th>
                  <th>Publication Year</th>
                  <th>Claim</th>
                  <th>SE Practice</th>
                  <th>Evidence</th>
                  <th>Research Type</th>
                  <th>Type of Participant</th>
                </tr>
              </table>
            </div>
          </div>
          <div className="list">{articleList}</div>
        </div>
      </div>
    );
  }
}

export default ShowArticlesList;