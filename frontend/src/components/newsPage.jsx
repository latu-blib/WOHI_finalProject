import {MarketsButton, NewsButton, SearchBar, WatchListButton} from "./header_buttons.jsx";
import React from "react";

export default function NewsPage() {
    return (
        <>
            <div className="hero">
                <MarketsButton />
                <NewsButton />
                <WatchListButton />
            </div>

            <nav id="newsFeed">
                <ul>
                    <li>items</li>
                </ul>
            </nav>
        </>
    )
}
