import {useState} from "react";

export function MarketsButton() {
    function handleClick() {
        console.log("Markets klikattu");
    }
    return (
        <button className="headerButtons" id="Markets" onClick={handleClick}>Markets</button>
    );
}

export function NewsButton() {
    function handleClick() {
        console.log("Markets klikattu");
    }
    return (
        <button className="headerButtons" id="News" onClick={handleClick}>News</button>
    );
}

export function WatchListButton() {
    function handleClick() {
        console.log("Markets klikattu");
    }
    return (
        <button className="headerButtons" id="WatchList" onClick={handleClick}>Watchlist</button>
    );
}

export function SearchBar() {
    function handleClick() {
        console.log("Markets klikattu");
    }
    return (
        <form> <label id="searchBar">Search:</label>
            <input type="Search" id="SearchBar" placeholder="Search" name="Search"/>
            <button onClick={handleClick}>Search</button>
        </form>
    );
}