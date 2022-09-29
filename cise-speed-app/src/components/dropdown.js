import React from 'react';
import SEPractices from "../dummydata/se-practices";

const optionItems = SEPractices.map((SEPractices) =>
  <option key={SEPractices.practice}>{SEPractices.practice}</option>
);
const Dropdown = () => {
  return (
    <div>
      <select>{optionItems}</select>
    </div>
  )
}
export default Dropdown;
