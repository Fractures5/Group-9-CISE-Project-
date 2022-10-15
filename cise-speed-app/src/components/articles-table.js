import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import '../App.css';

const ArticlesTable = (props) => {
    const article = props.article;

    // const articles = [
    //   {
    //     title: article.title,
    //     authors: article.author,
    //     journalname: article.journalname,
    //     pubyear: article.pubyear,
    //     claim: article.claim,
    //     sepractice: article.sepractice,
    //     evidence: article.evidence,
    //     participant: article.participant,
    //     doi: article.doi,
    //   },
    // ];

    return (
      <div className="test">
        <table id="articleTable">
          <tr>
            <td>{article.title}</td>
            <td>{article.author}</td>
            <td>{article.journalName}</td>
            <td>{article.publicationYear}</td>
            <td>{article.claim}</td>
            <td>{article.sePractice}</td>
            <td>{article.resultOfEvidence}</td>
            <td>{article.researchType}</td>
            <td>{article.typeOfParticipant}</td>
          </tr>
          <br></br>
        </table>
      </div>
      //   <div className="card-container">
      //     <div className="desc">
      //       <h2>
      //         <Link to={`/ShowArticlesList/${article._id}`}></Link>
      //       </h2>
      //       <p>{article.title}</p>
      //       <h3>{article.author}</h3>
      //     </div>
      //   </div>
    );
};

export default ArticlesTable;