import {MarketsButton, NewsButton, WatchListButton} from "./header_buttons.jsx";
import React, {useState} from "react";

export default function WatchListPage({watchList, setWatchList}) {
    console.log("Watchlist: ", watchList)

    function removeFromWatchList(symbol) {
        setWatchList(watchList.filter(item => item.symbol !== symbol)
        );
    }

    return (
        <>
            <div className="hero">
                <MarketsButton />
                <NewsButton />
                <WatchListButton />
            </div>

            <table id="myList">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Today%</th>
                </tr>
                </thead>

                <tbody>
                {watchList.map(item => (
                    <tr key={item.symbol}>
                        <td>{item.symbol}</td>
                        <td>{item.value}</td>
                        <td>
                            {item.todayChange.toFixed(2)} %
                        </td>
                        <td>
                        <button onClick={() => removeFromWatchList(symbol)
                        }
                        >
                            X
                        </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}
