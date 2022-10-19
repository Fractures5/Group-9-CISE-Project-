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
      //This link with http is used instead of https and the link for the heroku application as it was not stable and we could not find a fix
      //This is further explained in our Learning and Capability Learning Report in a seperate heading at the end that we talk about this issue
      const result = await axios("http://localhost:8082/api/backendArticleRoutes");  
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