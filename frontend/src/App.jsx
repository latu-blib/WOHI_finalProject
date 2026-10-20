import {useEffect, useState} from 'react';
import React from "react";
import './index.css';
import {MarketsButton, NewsButton, WatchListButton, SearchBar} from "./components/header_buttons.jsx";
import {Indexes, Materials, Bonds, Charts} from "./components/marketsPage.jsx";
import WatchListPage from "./components/watchListPage.jsx";
import NewsPage from "./components/newsPage.jsx";
import {getData} from "./api/marketApi.js";


function App() {
  const [marketData, setMarketData] = useState([]);

  async function handleChange(type,symbol) {

      console.log("Haettava tyyppi ja symboli:", type, symbol);
      try {
          const result = await getData(type, symbol);
          setMarketData(result);
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
              <Indexes onSelect={handleChange} />
              <Materials onSelect={handleChange} />
              <Bonds onSelect={handleChange} />
            </div>
              <Charts data={marketData} />
          </section>
          </>
          );
        }

export default App
