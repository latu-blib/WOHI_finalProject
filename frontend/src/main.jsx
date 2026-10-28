import {useState} from 'react'
import React from "react"
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import NewsPage from "./components/newsPage.jsx";
import WatchListPage from "./components/watchListPage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function Root() {
    const [watchList, setWatchList] = useState([]);

    return (
        <Routes>
            <Route path="/WOHI_finalProject/" element={
                <App
                    watchList={watchList}
                    setWatchList={setWatchList}
                />
            }
            />

            <Route path="/news" element={<NewsPage/>}
            />

            <Route path="/watchlist" element={
                <WatchListPage
                    watchList={watchList}
                    setWatchList={setWatchList}/>
            }
            />
        </Routes>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>
);