import {useEffect, useState} from "react";
import {getData} from "../api/marketApi.js";

export function Indexes({onSelect}) {
    function handleSelect(event) {
        const type = event.target.name;
        const symbol = event.target.value

        onSelect(type, symbol);
    }

    return  (
        <>
            <label form="marketPlaces">Indexes</label>
            <select id="marketPlaces" name="marketPlaces" onChange={handleSelect}
            >
                <option value="OMXHPI">OMXHPI</option>
                <option value="S&P500">S&P500</option>
                <option value="DAX">DAX</option>
            </select>
        </>
    );
}

export function Materials({onSelect}) {
    function handleSelect(event) {
        const type = event.target.name;
        const symbol = event.target.value

        onSelect(type, symbol);
    }

    return (
        <>
            <label form="materialList">Commodities</label>
            <select id="materialList" name="commodity" onChange={handleSelect}
            >
                <option value="commodity_WTI-oil">WTI-Oil</option>
                <option value="commodity_Brent-oil">Brent Oil</option>
                <option value="commodity_Gold">Gold</option>
                <option value="commodity_Silver">Silver</option>
                <option value="commodity_Aluminium">Aluminium</option>
            </select>
        </>
    )
}

export function Bonds({onSelect}) {
    function handleSelect(event) {
        const type = event.target.name;
        const symbol = event.target.value

        onSelect(type, symbol);
    }

    return (
        <>
            <label form="Bonds">Currencies</label>
            <select id="bonds" name="Bonds" onChange={handleSelect}
            >
                <option value="US">EUR/USD</option>
                <option value="Germany">USD/JPY</option>
                <option value="France">GBD/USD</option>
                <option value="Switzerland">USD/CAD</option>
                <option value="Australia">AUD/USD</option>
                <option value="EU">EUR/GBD</option>
                <option value="Japan">EUR/JPY</option>
            </select>
        </>
    )
}

export function Charts({ data }) {
    console.log("Charts sai datan:", data);
    if (!data || !data.data || data.data.length === 0) {
        return <p>Valitse kohde nähdäksesi markkinadatan.</p>;
    }

    const stock = data.data[0];
    return (
        <div>
            <h2>{stock.symbol}</h2>
            <p>Open: {stock.open}</p>
            <p>High: {stock.high}</p>
            <p>Low: {stock.low}</p>
            <p>Close: {stock.close}</p>
            <p>Volume: {stock.volume}</p>
        </div>
    );
}

//tee chart uudelleen
//watchlist, lisätään vaikka searchin jälkeisen togglen kautta