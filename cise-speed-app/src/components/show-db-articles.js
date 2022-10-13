import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showDBArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('https://group9-cise-speed-app.herokuapp.com/api/backendArticleRoutes'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
            article: res.data
        })
      })
      .catch(err => {
        console.log("Error from showDBArticles");
      })
  };

//   onDeleteClick (id) {
//     axios
//       .delete('https://group9-cise-speed-app.herokuapp.com/api/backendArticleRoutes'+id)
//       .then(res => {
//         this.props.history.push("/");
//       })
//       .catch(err => {
//         console.log("Error form ShowBookDetails_deleteClick");
//       })
//   };


  render() {

    const article = this.state.article;
    let BookItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ article.title }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="showDBArticles">
        <div className="container">
          <div>
            { BookItem }
          </div>
        </div>
      </div>
    );
  }
}

export default showDBArticles;