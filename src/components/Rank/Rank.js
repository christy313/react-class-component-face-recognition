import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="tc">
      <h2 className="f1">{`Hi ${name}, your current entry count is...`}</h2>
      <p className="f1">{`${entries}`}</p>
    </div>
  );
};

export default Rank;
