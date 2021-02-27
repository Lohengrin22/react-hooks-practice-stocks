import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
const url = "http://localhost:3001/stocks"


function MainContainer() {
  const [stonks, setStonks] = useState([]);
  const [portfolio, setPortfolio] = useState([])
  useEffect(() => {
  
    fetch(url)
    .then(response => response.json())
    .then((stockArray) => setStonks(stockArray));
  }, [])


  function addToPortfolioContainer(stonk){
    setPortfolio([...portfolio, stonk])
    console.log(portfolio)
  }

  function removeFromPortfolio(stonk){
   const updatedPortfolio = portfolio.filter(portfolio => portfolio !== stonk)
   setPortfolio(updatedPortfolio)}

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stonks={stonks} handleClick={addToPortfolioContainer}/>
        </div>
        <div className="col-4">
          <PortfolioContainer onHandleClick={removeFromPortfolio} portfolio={portfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
