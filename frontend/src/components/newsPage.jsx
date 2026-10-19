import {MarketsButton, NewsButton, SearchBar, WatchListButton} from "./header_buttons.jsx";
import React from "react";

function NewsPage() {
    return (
        <>
            <div className="hero">
                <MarketsButton />
                <NewsButton />
                <WatchListButton />
            </div>
            <div>
                <SearchBar/>
            </div>
            <nav id="newsFeed">
                <ul>
                    <li>items</li>
                </ul>
            </nav>
        </>
    )
}
export default NewsPage;