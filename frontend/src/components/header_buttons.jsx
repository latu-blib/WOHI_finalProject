import {useState} from "react";
import { Link } from "react-router-dom";

export function MarketsButton() {
    return (
        <Link to="/">
            <button className="headerButtons">Markets</button>
        </Link>
    );
}

export function NewsButton() {
    return (
        <Link to={"/components/newsPage.jsx"}>
        <button className="headerButtons" id="News">News</button>
        </Link>
    );
}

export function WatchListButton() {
    return (
        <Link to={"/components/watchListPage.jsx"}>
        <button className="headerButtons" id="WatchList">Watchlist</button>
        </Link>
    );
}

export function SearchBar() {

    const [search, setSearch] = useState("");
    const [stockData, setStockData] = useState([]);

    async function handleSubmit(event) {
        event.preventDefault();
        console.log("Searching", search)

        try {
            const response = await fetch("http://localhost:8080/api/markets/${search}"
        );
            if (!response.ok) {
                throw new Error("error:${response.status}");
            }
            const data = await response.json();
            setStockData(data);
        } catch(error) {
            console.error("Error", error);
        }
    }

        return (
            <form onSubmit={handleSubmit}>
                <input type="Search"
                       id="SearchBar"
                       placeholder="Search..."
                       name="Search" value={search}
                       onChange={event => setSearch(event.target.value)}/>
                <button type={"submit"}>Search</button>
            </form>
        );
}