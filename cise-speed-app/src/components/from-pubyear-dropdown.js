import React from "react";
import FromPublicationYears from "../dummydata/from-pubyears";

const fromPubYearOptionItems = FromPublicationYears.map((FromPublicationYears) => (
  <option key={FromPublicationYears.fromPubYear}>{FromPublicationYears.fromPubYear}</option>
));

const FromPubYearDropdown = () => {
  return (
    <div>
      <select>{fromPubYearOptionItems}</select>
    </div>
  );
};

export default FromPubYearDropdown;
