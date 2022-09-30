import React from "react";
import toPublicationYears from "../dummydata/to-pubyears";

const toPubYearOptionItems = toPublicationYears.map((toPublicationYears) => (
  <option key={toPublicationYears.toPubYear}>{toPublicationYears.toPubYear}</option>
));

const ToPubYearDropdown = () => {
  return (
    <div>
      <select>{toPubYearOptionItems}</select>
    </div>
  );
};

export default ToPubYearDropdown;