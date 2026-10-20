import {useEffect, useState} from "react";
import {getData} from "../api/marketApi.js";

export function Indexes({symbol, onSelect}) {
    return  (
        <>
            <label form="marketPlaces">Indexes</label>
            <select id="marketPlaces" name="marketPlaces" onChange={event => onSelect(event.target.value)}
            >
                <option value={symbol}>OMXHPI</option>
                <option value={symbol}>S&P500</option>
                <option value={symbol}>DAX</option>
            </select>
        </>
    );
}

export function Materials({symbol, onSelect}) {

    return (
        <>
            <label form="materialList">Raw materials</label>
            <select id="materialList" name="materialList" onChange={event => onSelect(event.target.value)}
            >
                <option value={symbol}>WTI-Oil</option>
                <option value={symbol}>Brent Oil</option>
                <option value={symbol}>Gold</option>
                <option value={symbol}>Silver</option>
                <option value={symbol}>Aluminium</option>
            </select>
        </>
    )
}

export function Currencies({symbol, onSelect}) {

    return (
        <>
            <label form="currency">Currencies</label>
            <select id="currency" name="currency" onChange={event => onSelect(event.target.value)}
            >
                <option value={symbol}>EUR/USD</option>
                <option value={symbol}>USD/JPY</option>
                <option value={symbol}>GBD/USD</option>
                <option value={symbol}>USD/CAD</option>
                <option value={symbol}>AUD/USD</option>
                <option value={symbol}>EUR/GBD</option>
                <option value={symbol}>EUR/JPY</option>
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