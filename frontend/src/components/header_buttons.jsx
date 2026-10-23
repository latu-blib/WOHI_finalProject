import {useState} from "react";
import { Link } from "react-router-dom";
import {getData} from "../api/marketApi.js";

export function MarketsButton() {
    return (
        <Link to="/">
            <button className="headerButtons">Markets</button>
        </Link>
    );
}

export function NewsButton() {
    return (
        <Link to={"/news"}>
        <button className="headerButtons" id="News">News</button>
        </Link>
    );
}

export function WatchListButton() {
    return (
        <Link to={"/watchlist"}>
        <button className="headerButtons" id="WatchList">Watchlist</button>
        </Link>
    );
}

export function SearchBar({onSearch}) {

    const [search, setSearch] = useState("");

    async function handleSearch(event) {
        const value = event.target.value;
        setSearch(value);

    }
    function handleSelect(stock) {
        setSearch(stock.name);

        onSearch("stock", stock.ticker);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Searching", search)

        onSearch("stock", search)
    }

        return (

            <form onSubmit={handleSubmit}>
                <input type="search"
                       id="SearchBar"
                       placeholder="Search company by its ticker..."
                       name="Search"
                       value={search}
                       onChange={handleSearch}/>
                <button type={"submit"}>Search a stock</button>

            </form>
        );
}