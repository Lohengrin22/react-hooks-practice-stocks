import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
const url = "http://localhost:3001/stocks"


function MainContainer() {
  const [stonks, setStonks] = useState([]);
  const [portfolio, setPortfolio] = useState([])
  const [filteredStonks, setFilteredStonks] = useState("Tech")
  const [sortedStonks, setSortedStonks] = useState("Alphabetically")


  
  useEffect(() => {
  
    fetch(url)
    .then(response => response.json())
    .then((stockArray) => setStonks(stockArray));
  }, [])


  function addToPortfolioContainer(stonk){
    setPortfolio([...portfolio, stonk])

  }

  function removeFromPortfolio(stonk){
   const updatedPortfolio = portfolio.filter(portfolio => portfolio !== stonk)
   setPortfolio(updatedPortfolio)}


   const newlySortedStonks = stonks.sort((a,b)=>{
     if (sortedStonks === "Alphabetically"){
      
      
       return a.name.localeCompare(b.name)
     }
     else { 
       return a.price - b.price
     }
   })
  const newlyFilteredStonks = newlySortedStonks.filter((stonk)=>
      stonk.type === filteredStonks )




  return (
    <div>
      <SearchBar handleOnChange={setFilteredStonks} sorted = {sortedStonks} handleSortChange={setSortedStonks}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stonks={newlyFilteredStonks} handleClick={addToPortfolioContainer}/>
        </div>
        <div className="col-4">
          <PortfolioContainer onHandleClick={removeFromPortfolio} portfolio={portfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
