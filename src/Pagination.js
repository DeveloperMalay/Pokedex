import React from "react";

function Pagination({ gotoprevpage, gotonextpage }) {
  return (
    <div className="btns">
      {gotoprevpage && <button onClick={gotoprevpage}>Previous</button>}
      {gotonextpage && <button onClick={gotonextpage}>Next</button>}
    </div>
  );
}

export default Pagination;
