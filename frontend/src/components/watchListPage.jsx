import {MarketsButton, NewsButton, SearchBar, WatchListButton} from "./header_buttons.jsx";
import React from "react";

export default function WatchListPage() {
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
            <table id="myList">
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Today%</th>
                </tr>
                <tr>
                    <th>stocks</th>
                    <td>11.00</td>
                    <td>??</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}
