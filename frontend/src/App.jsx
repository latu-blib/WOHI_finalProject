import {useEffect, useState} from 'react';
import React from "react";
import './index.css';
import {MarketsButton, NewsButton, WatchListButton, SearchBar} from "./components/header_buttons.jsx";
import {Currencies, Materials, Charts} from "./components/marketsPage.jsx";
import WatchListPage from "./components/watchListPage.jsx";
import NewsPage from "./components/newsPage.jsx";
import {getData} from "./api/marketApi.js";


function App() {
  const [marketData, setMarketData] = useState([]);
    const [marketType, setMarketType] = useState("");

  async function handleChange(type, symbol) {

      console.log("Haettava symboli ja tyyppi:", type, symbol);
      try {
          const result = await getData(type, symbol);
          setMarketData(result);
          setMarketType(type);
      } catch (error) {
          console.error("Data fetch failed:", error);
      }
  }

  return (
      <>
          <section id="center">
            <div className="hero">
                <h1>Toimii</h1>
              <MarketsButton />
              <NewsButton />
              <WatchListButton />
            </div>
            <div>
              <SearchBar onSearch={handleChange}/>
            </div>
            <div>
              <Currencies onSelect={handleChange} />
              <Materials onSelect={handleChange} />
            </div>
              <Charts data={marketData}
                      type={marketType}
              />
          </section>
          </>
          );
        }

export default App
