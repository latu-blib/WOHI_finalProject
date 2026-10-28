import {MarketsButton, NewsButton, WatchListButton} from "./header_buttons.jsx";
import React from "react";

export default function WatchListPage({watchList, setWatchList}) {
    console.log("Watchlist: ", watchList)

    function removeFromWatchList(symbol) {
        setWatchList(watchList.filter(item => item.symbol !== symbol)
        );
    }

    return (
        <>
            <nav className="nav nav-pills justify-content-center gap-3 p-3 bg-light">
                <MarketsButton />
                <NewsButton />
                <WatchListButton />
            </nav>

            <table className="table table-striped shadow btn-styled">
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
                        <button className="btn btn-danger" onClick={() => removeFromWatchList(symbol)
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
