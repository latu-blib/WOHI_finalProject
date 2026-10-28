import {useState} from "react";
import { Link } from "react-router-dom";

export function MarketsButton() {
    return (
        <Link to="/WOHI_finalProject/">
            <button className="btn btn-primary border border-light px-4 me-3">Markets</button>
        </Link>
    );
}

export function NewsButton() {
    return (
        <Link to={"/news"}>
        <button className="btn btn-primary border border-light px-4 me-3" id="News">News</button>
        </Link>
    );
}

export function WatchListButton() {
    return (
        <Link to={"/watchlist"}>
        <button className="btn btn-primary border border-light px-4 me-3" id="WatchList">Watchlist</button>
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

            <form onSubmit={handleSubmit} className="mb-4">
                <input type="search"
                       id="SearchBar"
                       className="form-control"
                       placeholder="Company ticker"
                       name="Search"
                       value={search}
                       onChange={handleSearch}/>
                <button type={"submit"}>Search a stock</button>

            </form>
        );
}