import {MarketsButton, NewsButton, WatchListButton} from "./header_buttons.jsx";
import React from "react";

function NewsPage() {
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

export default class NewsPage {
}