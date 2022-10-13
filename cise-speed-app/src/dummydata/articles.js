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

 

}

const articleData = this.state.article;
const articles = [
  {
    title: articleData.title,
    authors: "Munir, H., Wnuk, K., Petersen, K., Moayyed, M.",
    journalname: " ",
    pubyear: "2014",
    claim: "code quality improvement",
    sepractice: "TDD",
    evidence: "strong support",
    participant: "student",
    doi: "https://doi.org/10.1145/2601248.2601267",
  },
];
module.exports = articles;

export default showDBArticles;


//render() {

  //   const article = this.state.article;
  //   let BookItem = <div>
  //     <table className="table table-hover table-dark">
  //       {/* <thead>
  //         <tr>
  //           <th scope="col">#</th>
  //           <th scope="col">First</th>
  //           <th scope="col">Last</th>
  //           <th scope="col">Handle</th>
  //         </tr>
  //       </thead> */}
  //       <tbody>
  //         <tr>
  //           <th scope="row">1</th>
  //           <td>Title</td>
  //           <td>{ article.title }</td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   </div>

  //   return (
  //     <div className="showDBArticles">
  //       <div className="container">
  //         <div>
  //           { BookItem }
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  
  

//}

//export default showDBArticles;

// const articles = [
//   {
//     id: "1",
//     title:
//       "An experimental evaluation of test driven development vs. test-last development with industry professionals",
//     authors: "Munir, H., Wnuk, K., Petersen, K., Moayyed, M.",
//     journalname: " ",
//     pubyear: "2014",
//     claim: "code quality improvement",
//     sepractice: "TDD",
//     evidence: "strong support",
//     participant: "student",
//     doi: "https://doi.org/10.1145/2601248.2601267",
//   },
//   {
//     id: "2",
//     title:
//       "Realizing quality improvement through test driven development: results and experiences of four industrial teams",
//     authors: "Nagappan, N., Maximilien, E. M., Bhat, T., Williams, L.",
//     journalname: " ",
//     pubyear: "2008",
//     claim: "product quality improvement",
//     sepractice: "Mob Programming",
//     evidence: "weak support",
//     participant: "student",
//     doi: "https://doi.org/10.1007/s10664-008-9062-z",
//   },
//   {
//     id: "3",
//     title:
//       "Does Test-Driven Development Really Improve Software Design Quality?",
//     authors: "Janzen, D. S.",
//     journalname: " ",
//     pubyear: "2008",
//     claim: "code quality improvement",
//     sepractice: "Pair Programming",
//     evidence: "weak support",
//     participant: "practitioner",
//     doi: "https://doi.org/10.1007/s10664-008-9062-z",
//   },
//   {
//     id: "4",
//     title:
//       "A Comparative Case Study on the Impact of Test-Driven Development on Program Design and Test Coverage",
//     authors: "Siniaalto, M., Abrahamsson, P.",
//     journalname: " ",
//     pubyear: "2017",
//     claim: "code quality improvement",
//     sepractice: "Agile Development",
//     evidence: "weak against",
//     participant: "student",
//     doi: "https://doi.org/10.1109/esem.2007.35",
//   },
//   {
//     id: "5",
//     title:
//       "A Comparative Case Study on the Impact of Test-Driven Development on Program Design and Test Coverage",
//     authors: "Siniaalto, M., Abrahamsson, P.",
//     journalname: " ",
//     pubyear: "2017",
//     claim: "code quality improvement",
//     sepractice: "TDD",
//     evidence: "weak against",
//     participant: "student",
//     doi: "https://doi.org/10.1109/esem.2007.35",
//   },
//   {
//     id: "6",
//     title: "CISE testing journal",
//     authors: "Siniaalto, M., Abrahamsson, P.",
//     journalname: " ",
//     pubyear: "2017",
//     claim: "code quality improvement",
//     sepractice: "Agile Development",
//     evidence: "weak against",
//     participant: "student",
//     doi: "https://doi.org/10.1109/esem.2007.35",
//   },
//   {
//     id: "7",
//     title: "AUT programming manual",
//     authors: "Siniaalto, M., Abrahamsson, P.",
//     journalname: " ",
//     pubyear: "2017",
//     claim: "code quality improvement",
//     sepractice: "Mob Programming",
//     evidence: "weak against",
//     participant: "student",
//     doi: "https://doi.org/10.1109/esem.2007.35",
//   },
//   {
//     id: "8",
//     title: "Victoria University programming manual",
//     authors: "Siniaalto, M., Abrahamsson, P.",
//     journalname: " ",
//     pubyear: "2017",
//     claim: "code quality improvement",
//     sepractice: "Pair Programming",
//     evidence: "weak against",
//     participant: "student",
//     doi: "https://doi.org/10.1109/esem.2007.35",
//   },
//   {
//     id: "9",
//     title: "Networks and Software Engineer programming notebook",
//     authors: "Siniaalto, M., Abrahamsson, P.",
//     journalname: " ",
//     pubyear: "2017",
//     claim: "code quality improvement",
//     sepractice: "Agile Development",
//     evidence: "weak against",
//     participant: "student",
//     doi: "https://doi.org/10.1109/esem.2007.35",
//   },
//   {
//     id: "10",
//     title: "Victoria University programming manual",
//     authors: "Siniaalto, M., Abrahamsson, P.",
//     journalname: " ",
//     pubyear: "2017",
//     claim: "code quality improvement",
//     sepractice: "Pair Programming",
//     evidence: "weak against",
//     participant: "student",
//     doi: "https://doi.org/10.1109/esem.2007.35",
//   },
//   {
//     id: "11",
//     title: "React Native Tutorial",
//     authors: "Siniaalto, M., Abrahamsson, P.",
//     journalname: " ",
//     pubyear: "2017",
//     claim: "code quality improvement",
//     sepractice: "Pair Programming",
//     evidence: "weak against",
//     participant: "developer",
//     doi: "https://doi.org/10.1109/esem.2007.35",
//   },
// ];
//