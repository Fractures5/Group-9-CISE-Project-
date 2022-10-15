import React, { useState } from "react";
//import articles from "../dummydata/articles.js";
import { useTable, useSortBy, usePagination, useFilters } from "react-table";

const Table = ({ columns, data }) => {
  const [filterInput, setFilterInput] = useState("");
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setFilter,

    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },

    useFilters,
    useSortBy,
    usePagination
  );

  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter("title", value); 
    setFilterInput(value);
  };

  const handleSEPracticeChange = e => {
    const value = e.target.value || undefined;
    setFilter("sePractice", value); 
    setFilterInput(value);
  };

  const handlePubYearsChange = e => {
    const value = e.target.value || undefined;
    setFilter("publicationYear", value); 
    setFilterInput(value);
  };

  // Render Data Table UI
  return (
    <>
    <div className="searchArticleField">
      <input
          value={filterInput}
          onChange={handleFilterChange}
          placeholder={"Search Title"}
        />
    </div>
      <select name="sePractices" id="sePractices" onChange={handleSEPracticeChange}>
        <option value="">All SE Practices</option>
        <option value="TDD">TDD</option>
        <option value="Agile">Agile</option>
        <option value="Mob Programming">Mob Programming</option>
        <option value="BDD">BDD</option>
        <option value="Pair Programming">Pair Programming</option>
      </select>

      <select name="sePractices" id="sePractices" onChange={handlePubYearsChange}>
        <option value="">All Years</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
        <option value="2011">2011</option>
        <option value="2010">2010</option>
        
      </select>
    
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <br></br>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[3, 7, 15].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Table;
