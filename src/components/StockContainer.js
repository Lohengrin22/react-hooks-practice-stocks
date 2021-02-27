import React from "react";
import Stock from "./Stock";

function StockContainer({stonks, handleClick}) {
  const stonksArray = stonks.map((stonk)=>{
    return <Stock 
    key={stonk.id}
    stonk={stonk}
    handleClick={handleClick}
    />
  })
  return (
    <div>
      <h2>Stocks</h2>
      {stonksArray}
    </div>
  );
}

export default StockContainer;
