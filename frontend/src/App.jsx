import {useEffect, useState} from 'react'
import React from "react"
import './index.css'
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router";
import {MarketsButton, NewsButton, WatchListButton, SearchBar} from "./components/header_buttons.jsx"
import {Indexes, Materials, Currencies, Charts} from "./components/marketsPage.jsx"
import WatchListPage from "./components/watchListPage.jsx"
import NewsPage from "./components/newsPage.jsx"


function App() {
  const [count, setCount] = useState(0);

  return (
      <>
          <section id="center">
            <div className="hero">
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
            <div>
              <Charts />
            </div>
          </section>
          </>
          );
        }

export default App
