//This is the home-page.js file that will be the splashscreen for the SPEED application
import articles from "../dummydata/articles.js";
import Styles from "../components/table-style.js";
import Table from "../components/evidence-table.js";
import tablecolumns from "../components/table-columns.js";
import Dropdown from "../components/dropdown.js";
import FromPubYearDropdown from "../components/from-pubyear-dropdown.js";

const Home = () => {
  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
      <br></br>
      <Dropdown />
      <br></br>
      <FromPubYearDropdown />
      <br></br>
      <Dropdown />
      <br></br>
      <Styles>
        <Table data={articles} columns={tablecolumns} />
      </Styles>
      <br></br>
    </div>
  );
};

export default Home;