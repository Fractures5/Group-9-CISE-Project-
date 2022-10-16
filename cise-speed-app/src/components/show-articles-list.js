// App.js

import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

import Table from "../components/evidence-table.js";
import "../App.css";
import Styles from "../components/table-style.js";

function App() {
  const [data, setData] = useState([]);

  const columns = useMemo(
    () => [
      {
        Header: "Articles",
        columns: [
          {
            Header: "Title",
            accessor: "title",
          },
          {
            Header: "Author",
            accessor: "author",
          },
          {
            Header: "Journal Name",
            accessor: "journalName",
          },
          {
            Header: "Publication Year",
            accessor: "publicationYear",
          },
          {
            Header: "Claim",
            accessor: "claim",
          },
          {
            Header: "SEPractice",
            accessor: "sePractice",
          },
          {
            Header: "Result of Evidence",
            accessor: "resultOfEvidence",
          },
          {
            Header: "Research Type",
            accessor: "researchType",
          },
          {
            Header: "Type of Participant",
            accessor: "typeOfParticipant",
          },
        ],
      },
    ],
    []
  );

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios('https://group9-cise-speed-app.herokuapp.com/api/backendArticleRoutes', data);
      setData(result.data);
    })();
  }, []);

  return (
    <div className="App">
      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
    </div>
  );
}

export default App;





















// import React, { Component } from 'react';
// import { useState } from "react";
// import '../App.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import ArticlesTable from './articles-table';

// class ShowArticlesList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//     };

//     this.handleKeyUp = this.handleKeyUp.bind(this);
//     this.sortSEPractice = this.sortSEPractice.bind(this);
//   }

//   handleKeyUp() {
//     console.log("getting triggerd");

//     var input, filter, table, tr, td, i, txtValue;
//       input = document.getElementById("searchTitle");
//       filter = input.value.toUpperCase();
//       table = document.getElementById("articleTable");
//       tr = table.getElementsByTagName("tr");
//       for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[0];
//         if (td) {
//           txtValue = td.textContent || td.innerText;
//           if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             tr[i].style.display = "";
//           } else {
//             tr[i].style.display = "none";
//           }
//         }       
//       }
//     console.log("reads bottom of function ");

//   }

//   sortSEPractice() {

//     console.log("triggering sortSEPractice function");

//     var input, filter, table, tr, td, i;
//     input = document.getElementById("sePracticeList");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("articleTable");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//       td = tr[i].getElementsByTagName("td")[0];
//       if (td) {
//         if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }       
//     }
//     console.log("reads bottom of sortSEPractice function ");
//   }

//   componentDidMount() {
//     axios
//       .get('http://localhost:8082/api/backendArticleRoutes')
//       .then(res => {
//         this.setState({
//             articles: res.data
//         })
//       })
//       .catch((err) => {
//         console.log("Error from ShowArticleList");
//       });
//   }
 

//   render() {
//     // const articles = this.state.articles;
//     // console.log("PrintBook: " + articles);
//     // let articleList;

//     // if(!articles) {
//     //     articleList = "there is no book record!";
//     // } else {
//     //     articleList = articles.map((article, k) => (
//     //       <ArticlesTable article={article} key={k} />
//     //     ));
//     // }
//     const articles = this.state.articles;
//     return (
//       <div className="ShowBookList">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="header-center">
//                 <h2 className="display-4 text-center">Articles List</h2>
//               </div>
//               <select id="sePracticeList" onChange={this.sortSEPractice} class='form-control'>
//                 <option>TDD</option>
//                 <option>Mob Programming</option>
//                 <option>Agile Programming</option>
//               </select>
//               <input type="text" id="searchTitle" onKeyUp={this.handleKeyUp} placeholder="Search for names.." title="Type in a name"></input>
//               <table id="articleTable">
//                 <tr>
//                   <th>Title</th>
//                   <th>Author</th>
//                   <th>Journal Name</th>
//                   <th>Publication Year</th>
//                   <th>Claim</th>
//                   <th>SE Practice</th>
//                   <th>Evidence</th>
//                   <th>Research Type</th>
//                   <th>Type of Participant</th>
//                 </tr>
//               </table>
//             </div>
//           </div>
//           {/* <div className="list">{articleList}</div> */}

//             {articles.map((article) => (
//               <div className ="searchArticles">
//                 <div className="tableContainer">
      
//                 <table id="articleTable">
//                   <tr>
//                     <td>{article.title}</td>
//                     <td>{article.author}</td>
//                     <td>{article.journalName}</td>
//                     <td>{article.publicationYear}</td>
//                     <td>{article.claim}</td>
//                     <td>{article.sePractice}</td>
//                     <td>{article.resultOfEvidence}</td>
//                     <td>{article.researchType}</td>
//                     <td>{article.typeOfParticipant}</td>
//                   </tr>
//                 {/* <br></br> */}
//               </table>
//               </div>
//             </div>
            
//             ))}

//         </div>
//       </div>
//     );

    
//   }
// }

// export default ShowArticlesList;