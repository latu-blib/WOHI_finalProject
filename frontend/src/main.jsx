import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react"
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import NewsPage from "./components/newsPage.jsx";
import WatchListPage from "./components/watchListPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}  />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/watchlist" element={<WatchListPage />} />
        </Routes>
    </BrowserRouter>,
);