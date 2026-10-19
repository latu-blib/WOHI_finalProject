import {useState} from "react";

export function MarketsButton() {
    function handleClick() {
        console.log("Markets klikattu");
    }
    return (
        <button className="headerButtons" id="Markets">Markets</button>
    );
}

export function NewsButton() {
    function handleClick() {
        console.log("Markets klikattu");
    }
    return (
        <button className="headerButtons" id="News">News</button>
    );
}

export function WatchListButton() {
    function handleClick() {
        console.log("Markets klikattu");
    }
    return (
        <button className="headerButtons" id="WatchList">Watchlist</button>
    );
}

export function SearchBar() {
    return (
        <form> <label id="searchBar">Search:</label>
            <input type="Search" id="SearchBar" placeholder="Search" name="Search"/>
            <button>Search</button>
        </form>
    );
}