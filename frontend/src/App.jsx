import {useEffect, useState} from 'react';
import React from "react";
import './index.css';
import {MarketsButton, NewsButton, WatchListButton, SearchBar} from "./components/header_buttons.jsx";
import {Indexes, Materials, Currencies} from "./components/marketsPage.jsx";
import WatchListPage from "./components/watchListPage.jsx";
import NewsPage from "./components/newsPage.jsx";


function App() {
  const [count, setCount] = useState(0);

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
              <SearchBar />
            </div>
            <div>
              <Indexes />
              <Materials />
              <Currencies />
            </div>
          </section>
          </>
          );
        }

export default App
