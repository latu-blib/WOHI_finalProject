import {useEffect, useState} from 'react';
import React from "react";
import './index.css';
import {MarketsButton, NewsButton, WatchListButton, SearchBar} from "./components/header_buttons.jsx";
import {Currencies, Materials, Charts} from "./components/marketsPage.jsx";
import WatchListPage from "./components/watchListPage.jsx";
import NewsPage from "./components/newsPage.jsx";
import {getData} from "./api/marketApi.js";


function App({watchList, setWatchList}) {
  const [marketData, setMarketData] = useState([]);
    const [marketType, setMarketType] = useState("");
    const [stock, setStock] = useState([]);

  async function handleChange(type, symbol) {

      console.log("Haettava symboli ja tyyppi:", type, symbol);
      try {
          const result = await getData(type, symbol);
          setMarketData(result);
          setMarketType(type);

          if (type === "stock") {
              setStock(symbol);
          }
      } catch (error) {
          console.error("Data fetch failed:", error);
      }
  }

    function addToWatchlist(symbol) {
      if (!stock || !marketData?.data) {
          return;
      }

      const latest = marketData.data[0];
      const previous = marketData.data[1];

      const todayChange = (latest.close/previous.close)-1;

      const newItem = {
          symbol: stock,
          value: latest.close,
          todayChange: todayChange
      };

      setWatchList(previousList => {
          if (previousList.some(item => item.symbol === stock)) {
              return previousList;
          }
          return [...previousList, newItem];
      });
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
                {marketType === "stock" && (
                    <button onClick={() => addToWatchlist(stock)}>
                        Add to watchlist
                    </button>
                )}
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
