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

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Searching", search)

        onSearch(search)
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