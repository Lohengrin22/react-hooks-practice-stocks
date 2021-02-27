import React from "react";

function Stock({stonk, handleClick}) {

  return (
    <div onClick={() =>handleClick(stonk)} >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stonk.name}</h5>
          <p className="card-text">{stonk.ticker}: {stonk.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
