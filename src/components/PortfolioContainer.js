import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, onHandleClick}) {
  const portfolioArray = portfolio.map((portfolio)=>{
    return(
    <Stock 
    key={portfolio.id}
    stonk={portfolio}
    handleClick={onHandleClick}
    /> )
  })
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioArray}
    </div>
  );
}

export default PortfolioContainer;
